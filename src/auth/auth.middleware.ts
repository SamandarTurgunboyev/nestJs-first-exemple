// src/auth/auth.middleware.ts
import { Injectable, NestMiddleware, UnauthorizedException } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { TokenService } from '../token/token.service';

@Injectable()
export class AuthMiddleware implements NestMiddleware {
  constructor(private readonly tokenService: TokenService) { } // Fix naming: tokenService

  use(req: any, res: Response, next: NextFunction) {
    try {
      const authorization = req.headers.authorization;
      if (!authorization) {
        throw new UnauthorizedException('Authorization header is missing');
      }

      const accessToken = authorization.split(' ')[1];
      if (!accessToken) {
        throw new UnauthorizedException('Access token is missing');
      }

      const userData = this.tokenService.validationAccToken(accessToken); // Use tokenService
      if (!userData) {
        throw new UnauthorizedException('Invalid or expired token');
      }

      req.user = userData; // Set req.user for valid tokens
      next();
    } catch (error) {
      throw new UnauthorizedException('Authentication failed');
    }
  }
}