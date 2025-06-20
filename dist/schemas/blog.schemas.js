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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlogSchema = exports.Blog = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = __importDefault(require("mongoose"));
const user_schema_1 = require("./user.schema");
let Blog = class Blog {
    title;
    excerpt;
    description;
    authorId;
};
exports.Blog = Blog;
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], Blog.prototype, "title", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], Blog.prototype, "excerpt", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], Blog.prototype, "description", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: mongoose_2.default.Schema.Types.ObjectId, ref: "User", required: true }),
    __metadata("design:type", user_schema_1.User)
], Blog.prototype, "authorId", void 0);
exports.Blog = Blog = __decorate([
    (0, mongoose_1.Schema)()
], Blog);
exports.BlogSchema = mongoose_1.SchemaFactory.createForClass(Blog);
//# sourceMappingURL=blog.schemas.js.map