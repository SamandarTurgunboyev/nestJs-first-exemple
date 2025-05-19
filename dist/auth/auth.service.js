"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const common_2 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const user_schema_1 = require("../schemas/user.schema");
const token_service_1 = require("../token/token.service");
const bcrypt = __importStar(require("bcrypt"));
let AuthService = class AuthService {
    userModel;
    tokenService;
    constructor(userModel, tokenService) {
        this.userModel = userModel;
        this.tokenService = tokenService;
    }
    async registration(dto) {
        const saltOrRounds = 10;
        const password = dto.password;
        const hash = await bcrypt.hash(password, saltOrRounds);
        const currentUser = await this.userModel.findOne({ email: dto.email });
        if (currentUser) {
            throw new common_1.NotFoundException(`User already exists`);
        }
        const user = await this.userModel.create({ password: hash, email: dto.email, name: dto.name });
        const payload = { id: user._id, name: user.name, email: user.email };
        const token = this.tokenService.generateToken({ ...payload });
        await this.tokenService.saveToken(String(payload.id), (await token).refreshToken);
        return {
            user,
            token
        };
    }
    async login(dto) {
        const user = await this.userModel.findOne({ email: dto.email });
        if (!user) {
            throw new common_2.BadRequestException("User not found");
        }
        const isPassword = await bcrypt.compare(dto.password, user.password);
        if (!isPassword) {
            throw new common_2.BadRequestException("Password is incorrect");
        }
        const userDto = { id: user._id, name: user.name, email: user.email };
        const tokens = this.tokenService.generateToken({ ...userDto });
        await this.tokenService.saveToken(String(userDto.id), (await tokens).refreshToken);
        return { user: userDto, tokens };
    }
    async getMe(refreshToken) {
        const userDto = this.tokenService.validationRefToken(refreshToken);
        if (!userDto) {
            throw new common_1.UnauthorizedException('Authentication required');
        }
        return userDto;
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(user_schema_1.User.name)),
    __metadata("design:paramtypes", [mongoose_2.Model,
        token_service_1.TokenService])
], AuthService);
//# sourceMappingURL=auth.service.js.map