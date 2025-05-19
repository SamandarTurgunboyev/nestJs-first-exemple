import { BlogService } from './blog.service';
import { BlogDto, CreateBlogDto } from './dto/blog.dto';
export declare class BlogController {
    private readonly blogService;
    constructor(blogService: BlogService);
    getAllBlogs(): Promise<(import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, import("../schemas/blog.schemas").Blog, {}> & import("../schemas/blog.schemas").Blog & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, {}> & import("mongoose").Document<unknown, {}, import("../schemas/blog.schemas").Blog, {}> & import("../schemas/blog.schemas").Blog & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & Required<{
        _id: import("mongoose").Types.ObjectId;
    }>)[]>;
    createBlog(dto: BlogDto, req: any): Promise<import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, import("../schemas/blog.schemas").Blog, {}> & import("../schemas/blog.schemas").Blog & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, {}> & import("mongoose").Document<unknown, {}, import("../schemas/blog.schemas").Blog, {}> & import("../schemas/blog.schemas").Blog & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & Required<{
        _id: import("mongoose").Types.ObjectId;
    }>>;
    getBlogId(id: string, req: any): Promise<import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, import("../schemas/blog.schemas").Blog, {}> & import("../schemas/blog.schemas").Blog & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, {}> & import("mongoose").Document<unknown, {}, import("../schemas/blog.schemas").Blog, {}> & import("../schemas/blog.schemas").Blog & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & Required<{
        _id: import("mongoose").Types.ObjectId;
    }>>;
    getUpdateBlog(id: string, dto: CreateBlogDto, req: any): Promise<(import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, import("../schemas/blog.schemas").Blog, {}> & import("../schemas/blog.schemas").Blog & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, {}> & import("mongoose").Document<unknown, {}, import("../schemas/blog.schemas").Blog, {}> & import("../schemas/blog.schemas").Blog & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & Required<{
        _id: import("mongoose").Types.ObjectId;
    }>) | null>;
    deleteBlog(id: string, req: any): Promise<(import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, import("../schemas/blog.schemas").Blog, {}> & import("../schemas/blog.schemas").Blog & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, {}> & import("mongoose").Document<unknown, {}, import("../schemas/blog.schemas").Blog, {}> & import("../schemas/blog.schemas").Blog & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & Required<{
        _id: import("mongoose").Types.ObjectId;
    }>) | null>;
}
