import { NestMiddleware } from '@nestjs/common';
import { Response, NextFunction } from 'express';
import { TokenService } from '../token/token.service';
export declare class AuthMiddleware implements NestMiddleware {
    private readonly tokenService;
    constructor(tokenService: TokenService);
    use(req: any, res: Response, next: NextFunction): void;
}
