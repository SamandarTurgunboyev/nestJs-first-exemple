import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";
import { Role } from "src/role.enum";

export type UserDocument = HydratedDocument<User>

@Schema()
export class User {
    @Prop({ required: true, unique: true })
    email: string

    @Prop({ required: true })
    password: string

    @Prop({ required: true })
    name: string

    @Prop({ required: true, default: Role.User })
    roles: Role;
}

export const UserSchema = SchemaFactory.createForClass(User)