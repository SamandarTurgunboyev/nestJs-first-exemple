import { CreateBlogDto } from './dto/blog.dto';
import { Blog, BlogDocument } from 'src/schemas/blog.schemas';
import { Model } from 'mongoose';
export declare class BlogService {
    private blogModel;
    constructor(blogModel: Model<BlogDocument>);
    getAllBlogs(): Promise<(import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, Blog, {}> & Blog & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, {}> & import("mongoose").Document<unknown, {}, Blog, {}> & Blog & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & Required<{
        _id: import("mongoose").Types.ObjectId;
    }>)[]>;
    createBlog(dto: Omit<Blog, "authorId">, user: any): Promise<import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, Blog, {}> & Blog & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, {}> & import("mongoose").Document<unknown, {}, Blog, {}> & Blog & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & Required<{
        _id: import("mongoose").Types.ObjectId;
    }>>;
    getBlogId(id: string, user: any): Promise<import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, Blog, {}> & Blog & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, {}> & import("mongoose").Document<unknown, {}, Blog, {}> & Blog & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & Required<{
        _id: import("mongoose").Types.ObjectId;
    }>>;
    updateBlog(id: string, dto: CreateBlogDto, user: any): Promise<(import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, Blog, {}> & Blog & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, {}> & import("mongoose").Document<unknown, {}, Blog, {}> & Blog & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & Required<{
        _id: import("mongoose").Types.ObjectId;
    }>) | null>;
    deleteBlog(id: string, user: any): Promise<(import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, Blog, {}> & Blog & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, {}> & import("mongoose").Document<unknown, {}, Blog, {}> & Blog & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & Required<{
        _id: import("mongoose").Types.ObjectId;
    }>) | null>;
}
