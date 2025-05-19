import { Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { BadRequestException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from 'src/schemas/user.schema';
import { TokenService } from 'src/token/token.service';
import * as bcrypt from 'bcrypt';
import { UserDto } from './dto/dto';
import { Role } from 'src/role.enum';

@Injectable()
export class AuthService {
    constructor(
        @InjectModel(User.name) private userModel: Model<UserDocument>,
        private tokenService: TokenService
    ) { }

    async registration(dto: UserDto) {
        const saltOrRounds = 10;
        const password = dto.password;
        const hash = await bcrypt.hash(password, saltOrRounds);

        const currentUser = await this.userModel.findOne({ email: dto.email })
        if (currentUser) {
            throw new NotFoundException(`User already exists`);
        }
        const user = await this.userModel.create({ password: hash, email: dto.email, name: dto.name, roles: Role.User })

        const payload = { id: user._id, name: user.name, email: user.email, role: user.roles }
        const token = this.tokenService.generateToken({ ...payload })
        await this.tokenService.saveToken(String(payload.id), (await token).refreshToken)
        return {
            user,
            token
        }
    }

    async login(dto: Omit<UserDto, "name">) {
        const user = await this.userModel.findOne({ email: dto.email })
        if (!user) {
            throw new BadRequestException("User not found")
        }
        const isPassword = await bcrypt.compare(dto.password, user.password)
        if (!isPassword) {
            throw new BadRequestException("Password is incorrect")
        }
        const userDto = { id: user._id, name: user.name, email: user.email, role: user.roles }
        const tokens = this.tokenService.generateToken({ ...userDto })
        await this.tokenService.saveToken(String(userDto.id), (await tokens).refreshToken)

        return { user: userDto, tokens }
    }

    async getMe(refreshToken: string) {
        const userDto = this.tokenService.validationRefToken(refreshToken)
        if (!userDto) {
            throw new UnauthorizedException('Authentication required');
        }

        return userDto
    }
}
