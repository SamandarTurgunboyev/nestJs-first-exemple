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
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlogDto = void 0;
const class_validator_1 = require("class-validator");
const swagger_1 = require("@nestjs/swagger");
class BlogDto {
    title;
    excerpt;
    description;
}
exports.BlogDto = BlogDto;
__decorate([
    (0, swagger_1.ApiProperty)({ example: "Vue.js", description: "title" }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], BlogDto.prototype, "title", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiProperty)({ example: "Vue.js courses", description: "excerpt" }),
    __metadata("design:type", String)
], BlogDto.prototype, "excerpt", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiProperty)({ example: "Vue.js description", description: "description" }),
    __metadata("design:type", String)
], BlogDto.prototype, "description", void 0);
//# sourceMappingURL=blog.dto.js.map