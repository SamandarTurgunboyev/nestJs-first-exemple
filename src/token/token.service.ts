import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Token, TokenDocument } from 'src/schemas/token.schema';

@Injectable()
export class TokenService {
    constructor(
        @InjectModel(Token.name) private tokenModel: Model<TokenDocument>,
        private readonly jwtService: JwtService,
    ) { }

    async generateToken(payload: any): Promise<{ accessToken: string; refreshToken: string }> {
        const accessToken = this.jwtService.sign(payload, {
            secret: process.env.JWT_ACC_KEY,
            expiresIn: '5m',
        });
        const refreshToken = this.jwtService.sign(payload, {
            secret: process.env.JWT_REF_KEY,
            expiresIn: '30d',
        });

        return { accessToken, refreshToken };
    }

    async saveToken(userId: string, refreshToken: string): Promise<TokenDocument> {
        const existToken = await this.tokenModel.findOne({ user: userId });

        if (existToken) {
            existToken.refreshToken = refreshToken;
            return existToken.save();
        }

        const token = await this.tokenModel.create({ user: userId, refreshToken });
        return token;
    }

    async removeToken(refreshToken: string): Promise<any> {
        return this.tokenModel.findOneAndDelete({ refreshToken });
    }

    validationAccToken(token: string): any {
        try {
            return this.jwtService.verify(token, { secret: process.env.JWT_ACC_KEY });
        } catch (error) {
            return null;
        }
    }

    validationRefToken(token: string): any {
        try {
            return this.jwtService.verify(token, { secret: process.env.JWT_REF_KEY });
        } catch (error) {
            return null;
        }
    }

    async findToken(refreshToken: string): Promise<TokenDocument | null> {
        return this.tokenModel.findOne({ refreshToken });
    }
}