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
exports.BlogController = void 0;
const common_1 = require("@nestjs/common");
const blog_service_1 = require("./blog.service");
const blog_dto_1 = require("./dto/blog.dto");
const swagger_1 = require("@nestjs/swagger");
let BlogController = class BlogController {
    blogService;
    constructor(blogService) {
        this.blogService = blogService;
    }
    async getAllBlogs() {
        return this.blogService.getAllBlogs();
    }
    async createBlog(dto, req) {
        return this.blogService.createBlog(dto, req.user);
    }
    async getBlogId(id, req) {
        return this.blogService.getBlogId(id, req?.user);
    }
    async getUpdateBlog(id, dto, req) {
        return this.blogService.updateBlog(id, dto, req?.user);
    }
    async deleteBlog(id, req) {
        return this.blogService.deleteBlog(id, req?.user);
    }
};
exports.BlogController = BlogController;
__decorate([
    (0, common_1.HttpCode)(200),
    (0, common_1.Get)(),
    (0, swagger_1.ApiResponse)({
        status: 201,
        schema: {
            example: [
                {
                    title: "Vue.js",
                    excerpt: "Vue.js courses",
                    description: "Vue.js description",
                    authorId: {
                        _id: "682aef235174a2985cccd5c0",
                        email: "Nest@gmail.com",
                        password: "$2b$10$WUpIa7lij5cbSn4DoalL4O1EkK/HfD3W06er2k47h5Quf0FkadAVW",
                        name: "Nestjs",
                    },
                    _id: "682aff8c5a549abc16962234",
                }
            ]
        }
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], BlogController.prototype, "getAllBlogs", null);
__decorate([
    (0, common_1.HttpCode)(201),
    (0, common_1.Post)("create"),
    (0, common_1.UsePipes)(common_1.ValidationPipe),
    (0, swagger_1.ApiOperation)({ summary: 'Create blog logged-in user' }),
    (0, swagger_1.ApiBody)({ type: blog_dto_1.BlogDto }),
    (0, swagger_1.ApiResponse)({
        status: 201,
        schema: {
            example: {
                title: "Vue.js",
                excerpt: "Vue.js courses",
                description: "Vue.js description",
                authorId: "682af800e53024afb0c98cd3",
                _id: "682aff8c5a549abc16962234",
            }
        }
    }),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [blog_dto_1.BlogDto, Object]),
    __metadata("design:returntype", Promise)
], BlogController.prototype, "createBlog", null);
__decorate([
    (0, common_1.HttpCode)(200),
    (0, common_1.Get)(":id"),
    (0, swagger_1.ApiOperation)({ summary: 'Get blog one logged-in user' }),
    (0, swagger_1.ApiResponse)({
        status: 201,
        schema: {
            example: {
                title: "Vue.js",
                excerpt: "Vue.js courses",
                description: "Vue.js description",
                authorId: {
                    _id: "682aef235174a2985cccd5c0",
                    email: "Nest@gmail.com",
                    password: "$2b$10$WUpIa7lij5cbSn4DoalL4O1EkK/HfD3W06er2k47h5Quf0FkadAVW",
                    name: "Nestjs",
                },
                _id: "682aff8c5a549abc16962234",
            }
        }
    }),
    __param(0, (0, common_1.Param)("id")),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], BlogController.prototype, "getBlogId", null);
__decorate([
    (0, common_1.HttpCode)(201),
    (0, common_1.Patch)(":id"),
    (0, swagger_1.ApiOperation)({ summary: 'update blog logged-in user' }),
    (0, swagger_1.ApiBody)({ type: blog_dto_1.BlogDto }),
    (0, swagger_1.ApiResponse)({
        status: 201,
        schema: {
            example: {
                title: "Vue.js",
                excerpt: "Vue.js courses",
                description: "Vue.js description",
                authorId: {
                    _id: "682aef235174a2985cccd5c0",
                    email: "Nest@gmail.com",
                    password: "$2b$10$WUpIa7lij5cbSn4DoalL4O1EkK/HfD3W06er2k47h5Quf0FkadAVW",
                    name: "Nestjs",
                },
                _id: "682aff8c5a549abc16962234",
            }
        }
    }),
    __param(0, (0, common_1.Param)("id")),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object, Object]),
    __metadata("design:returntype", Promise)
], BlogController.prototype, "getUpdateBlog", null);
__decorate([
    (0, common_1.HttpCode)(200),
    (0, swagger_1.ApiOperation)({ summary: 'delete blog logged-in user' }),
    (0, common_1.Delete)(":id"),
    __param(0, (0, common_1.Param)("id")),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], BlogController.prototype, "deleteBlog", null);
exports.BlogController = BlogController = __decorate([
    (0, common_1.Controller)('blog'),
    __metadata("design:paramtypes", [blog_service_1.BlogService])
], BlogController);
//# sourceMappingURL=blog.controller.js.map