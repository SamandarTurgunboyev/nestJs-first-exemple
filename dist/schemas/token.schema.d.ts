import { Document, Types } from 'mongoose';
export declare class Token {
    user: Types.ObjectId;
    refreshToken: string;
}
export type TokenDocument = Token & Document;
export declare const TokenSchema: import("mongoose").Schema<Token, import("mongoose").Model<Token, any, any, any, Document<unknown, any, Token, any> & Token & {
    _id: Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Token, Document<unknown, {}, import("mongoose").FlatRecord<Token>, {}> & import("mongoose").FlatRecord<Token> & {
    _id: Types.ObjectId;
} & {
    __v: number;
}>;
