import mongoose, { HydratedDocument } from "mongoose";
import { User } from "./user.schema";
export type BlogDocument = HydratedDocument<Blog>;
export declare class Blog {
    title: string;
    excerpt: string;
    description: string;
    authorId: User;
}
export declare const BlogSchema: mongoose.Schema<Blog, mongoose.Model<Blog, any, any, any, mongoose.Document<unknown, any, Blog, any> & Blog & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, Blog, mongoose.Document<unknown, {}, mongoose.FlatRecord<Blog>, {}> & mongoose.FlatRecord<Blog> & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>;
