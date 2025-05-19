import { JwtService } from '@nestjs/jwt';
import { Model } from 'mongoose';
import { TokenDocument } from 'src/schemas/token.schema';
export declare class TokenService {
    private tokenModel;
    private readonly jwtService;
    constructor(tokenModel: Model<TokenDocument>, jwtService: JwtService);
    generateToken(payload: any): Promise<{
        accessToken: string;
        refreshToken: string;
    }>;
    saveToken(userId: string, refreshToken: string): Promise<TokenDocument>;
    removeToken(refreshToken: string): Promise<any>;
    validationAccToken(token: string): any;
    validationRefToken(token: string): any;
    findToken(refreshToken: string): Promise<TokenDocument | null>;
}
