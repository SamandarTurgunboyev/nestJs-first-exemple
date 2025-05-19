import { IsNotEmpty } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class BlogDto {
    @ApiProperty({ example: "Vue.js", description: "title" })
    @IsNotEmpty()
    title: string;

    @IsNotEmpty()
    @ApiProperty({ example: "Vue.js courses", description: "excerpt" })
    excerpt: string;

    @IsNotEmpty()
    @ApiProperty({example: "Vue.js description", description: "description"})
    description: string;
}

export type CreateBlogDto = Omit<BlogDto, 'id'>