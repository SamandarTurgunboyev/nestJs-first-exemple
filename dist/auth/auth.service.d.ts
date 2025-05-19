import { Model } from 'mongoose';
import { User, UserDocument } from 'src/schemas/user.schema';
import { TokenService } from 'src/token/token.service';
import { UserDto } from './dto/dto';
import { Role } from 'src/role.enum';
export declare class AuthService {
    private userModel;
    private tokenService;
    constructor(userModel: Model<UserDocument>, tokenService: TokenService);
    registration(dto: UserDto): Promise<{
        user: import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, User, {}> & User & {
            _id: import("mongoose").Types.ObjectId;
        } & {
            __v: number;
        }, {}> & import("mongoose").Document<unknown, {}, User, {}> & User & {
            _id: import("mongoose").Types.ObjectId;
        } & {
            __v: number;
        } & Required<{
            _id: import("mongoose").Types.ObjectId;
        }>;
        token: Promise<{
            accessToken: string;
            refreshToken: string;
        }>;
    }>;
    login(dto: Omit<UserDto, "name">): Promise<{
        user: {
            id: import("mongoose").Types.ObjectId;
            name: string;
            email: string;
            role: Role;
        };
        tokens: Promise<{
            accessToken: string;
            refreshToken: string;
        }>;
    }>;
    getMe(refreshToken: string): Promise<any>;
}
