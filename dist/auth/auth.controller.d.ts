import { AuthService } from './auth.service';
import { UserDto } from './dto/dto';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    registration(dto: UserDto, res: any): Promise<{
        accessToken: string;
        refreshToken: string;
        user: import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, import("../schemas/user.schema").User, {}> & import("../schemas/user.schema").User & {
            _id: import("mongoose").Types.ObjectId;
        } & {
            __v: number;
        }, {}> & import("mongoose").Document<unknown, {}, import("../schemas/user.schema").User, {}> & import("../schemas/user.schema").User & {
            _id: import("mongoose").Types.ObjectId;
        } & {
            __v: number;
        } & Required<{
            _id: import("mongoose").Types.ObjectId;
        }>;
    }>;
    login(dto: Omit<UserDto, "name">, res: any): Promise<{
        accessToken: string;
        refreshToken: string;
        user: {
            id: import("mongoose").Types.ObjectId;
            name: string;
            email: string;
            role: import("../role.enum").Role;
        };
    }>;
    getMe(req: any): Promise<any>;
}
