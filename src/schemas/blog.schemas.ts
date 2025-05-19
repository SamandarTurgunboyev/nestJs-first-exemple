import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose, { HydratedDocument } from "mongoose";
import { User } from "./user.schema";

export type BlogDocument = HydratedDocument<Blog>

@Schema()
export class Blog {
    @Prop({ required: true })
    title: string

    @Prop({ required: true })
    excerpt: string

    @Prop({ required: true })
    description: string

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: "User", required: true })
    authorId: User;
}

export const BlogSchema = SchemaFactory.createForClass(Blog)