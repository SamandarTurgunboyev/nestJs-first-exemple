"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthMiddleware = void 0;
const common_1 = require("@nestjs/common");
const token_service_1 = require("../token/token.service");
let AuthMiddleware = class AuthMiddleware {
    tokenService;
    constructor(tokenService) {
        this.tokenService = tokenService;
    }
    use(req, res, next) {
        try {
            const authorization = req.headers.authorization;
            if (!authorization) {
                throw new common_1.UnauthorizedException('Authorization header is missing');
            }
            const accessToken = authorization.split(' ')[1];
            if (!accessToken) {
                throw new common_1.UnauthorizedException('Access token is missing');
            }
            const userData = this.tokenService.validationAccToken(accessToken);
            if (!userData) {
                throw new common_1.UnauthorizedException('Invalid or expired token');
            }
            req.user = userData;
            next();
        }
        catch (error) {
            throw new common_1.UnauthorizedException('Authentication failed');
        }
    }
};
exports.AuthMiddleware = AuthMiddleware;
exports.AuthMiddleware = AuthMiddleware = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [token_service_1.TokenService])
], AuthMiddleware);
//# sourceMappingURL=auth.middleware.js.map