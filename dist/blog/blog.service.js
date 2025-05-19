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
exports.BlogService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const blog_schemas_1 = require("../schemas/blog.schemas");
const mongoose_2 = require("mongoose");
let BlogService = class BlogService {
    blogModel;
    constructor(blogModel) {
        this.blogModel = blogModel;
    }
    async getAllBlogs() {
        return await this.blogModel.find().populate("authorId").populate("authorId");
    }
    async createBlog(dto, user) {
        if (!user) {
            throw new common_1.UnauthorizedException('Authentication required to access this blog');
        }
        return await this.blogModel.create({ title: dto.title, authorId: user.id, excerpt: dto.excerpt, description: dto.description });
    }
    async getBlogId(id, user) {
        if (!user) {
            throw new common_1.UnauthorizedException('Authentication required to access this blog');
        }
        const blog = await this.blogModel.findById(id).populate("authorId");
        if (!blog) {
            throw new common_1.NotFoundException(`Blog with ID ${id} not found`);
        }
        return blog;
    }
    async updateBlog(id, dto, user) {
        if (!user) {
            throw new common_1.UnauthorizedException('Authentication required to access this blog');
        }
        const blog = await this.blogModel.findById(id);
        if (!blog) {
            throw new common_1.NotFoundException(`Blog with ID ${id} not found`);
        }
        let updateBlog = await this.blogModel.findByIdAndUpdate(id, dto, { new: true });
        return updateBlog;
    }
    async deleteBlog(id, user) {
        if (!user) {
            throw new common_1.UnauthorizedException('Authentication required to access this blog');
        }
        const blog = await this.blogModel.findById(id);
        if (!blog) {
            throw new common_1.NotFoundException(`Blog with ID ${id} not found`);
        }
        return await this.blogModel.findByIdAndDelete(id);
    }
};
exports.BlogService = BlogService;
exports.BlogService = BlogService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(blog_schemas_1.Blog.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], BlogService);
//# sourceMappingURL=blog.service.js.map