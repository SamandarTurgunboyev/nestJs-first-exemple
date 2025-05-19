import { Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { CreateBlogDto } from './dto/blog.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Blog, BlogDocument } from 'src/schemas/blog.schemas';
import { Model } from 'mongoose';

@Injectable()
export class BlogService {
    constructor(@InjectModel(Blog.name) private blogModel: Model<BlogDocument>) { }

    async getAllBlogs() {
        return await this.blogModel.find().populate("authorId").populate("authorId")
    }

    async createBlog(dto: Omit<Blog, "authorId">, user: any) {
        if (!user) {
            throw new UnauthorizedException('Authentication required to access this blog');
        }
        return await this.blogModel.create({ title: dto.title, authorId: user.id, excerpt: dto.excerpt, description: dto.description })
    }

    async getBlogId(id: string, user: any) {
        if (!user) {
            throw new UnauthorizedException('Authentication required to access this blog');
        }
        const blog = await this.blogModel.findById(id).populate("authorId");
        if (!blog) {
            throw new NotFoundException(`Blog with ID ${id} not found`);
        }
        return blog;
    }

    async updateBlog(id: string, dto: CreateBlogDto, user: any) {
        if (!user) {
            throw new UnauthorizedException('Authentication required to access this blog');
        }
        const blog = await this.blogModel.findById(id);

        if (!blog) {
            throw new NotFoundException(`Blog with ID ${id} not found`);
        }

        let updateBlog = await this.blogModel.findByIdAndUpdate(id, dto, { new: true })
        return updateBlog
    }

    async deleteBlog(id: string, user: any) {
        if (!user) {
            throw new UnauthorizedException('Authentication required to access this blog');
        }
        const blog = await this.blogModel.findById(id);
        if (!blog) {
            throw new NotFoundException(`Blog with ID ${id} not found`);
        }
        return await this.blogModel.findByIdAndDelete(id)
    }
}
