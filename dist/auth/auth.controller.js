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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthController = void 0;
const common_1 = require("@nestjs/common");
const auth_service_1 = require("./auth.service");
const dto_1 = require("./dto/dto");
const swagger_1 = require("@nestjs/swagger");
let AuthController = class AuthController {
    authService;
    constructor(authService) {
        this.authService = authService;
    }
    async registration(dto, res) {
        const data = await this.authService.registration(dto);
        res.cookie('refreshToken', (await data.token).refreshToken, {
            httpOnly: true,
            secure: false,
            maxAge: 30 * 24 * 60 * 60 * 1000
        });
        return {
            accessToken: (await data.token).accessToken,
            refreshToken: (await data.token).refreshToken,
            user: data.user
        };
    }
    async login(dto, res) {
        const data = await this.authService.login(dto);
        res.cookie('refreshToken', (await data.tokens).refreshToken, {
            httpOnly: true,
            secure: false,
            maxAge: 30 * 24 * 60 * 60 * 1000
        });
        return {
            accessToken: (await data.tokens).accessToken,
            refreshToken: (await data.tokens).refreshToken,
            user: data.user
        };
    }
    async getMe(req) {
        const refreshToken = req.cookies.refreshToken;
        if (!refreshToken) {
            return new common_1.UnauthorizedException("Bad authorization");
        }
        return this.authService.getMe(refreshToken);
    }
};
exports.AuthController = AuthController;
__decorate([
    (0, common_1.HttpCode)(201),
    (0, common_1.Post)("register"),
    (0, common_1.UsePipes)(common_1.ValidationPipe),
    (0, swagger_1.ApiBody)({ type: dto_1.UserDto }),
    (0, swagger_1.ApiResponse)({
        status: 201,
        schema: {
            example: {
                accessToken: 'ACCESS_TOKEN',
                refreshToken: 'REFRESH_TOKEN',
                user: {
                    id: 'userId123',
                    name: 'john',
                    email: 'john@example.com'
                }
            }
        }
    }),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Res)({ passthrough: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dto_1.UserDto, Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "registration", null);
__decorate([
    (0, common_1.HttpCode)(201),
    (0, common_1.Post)("login"),
    (0, common_1.UsePipes)(common_1.ValidationPipe),
    (0, swagger_1.ApiBody)({
        schema: {
            example: {
                email: "john@example.com",
                password: "12345678a"
            }
        }
    }),
    (0, swagger_1.ApiResponse)({
        status: 201,
        schema: {
            example: {
                accessToken: "Access Token",
                refreshToken: "Refresh Token",
                user: {
                    id: 'userId123',
                    name: 'john',
                    email: 'john@example.com'
                }
            }
        }
    }),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Res)({ passthrough: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "login", null);
__decorate([
    (0, common_1.HttpCode)(200),
    (0, common_1.Get)("getMe"),
    (0, swagger_1.ApiOperation)({ summary: 'Get current logged-in user by refreshToken cookie' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        schema: {
            example: {
                id: 'userId123',
                name: 'john',
                email: 'john@example.com'
            }
        }
    }),
    (0, swagger_1.ApiResponse)({ status: 401, description: 'Unauthorized: Refresh token not provided or invalid' }),
    (0, swagger_1.ApiCookieAuth)(),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "getMe", null);
exports.AuthController = AuthController = __decorate([
    (0, swagger_1.ApiTags)('Authentication'),
    (0, common_1.Controller)('auth'),
    __metadata("design:paramtypes", [auth_service_1.AuthService])
], AuthController);
//# sourceMappingURL=auth.controller.js.map