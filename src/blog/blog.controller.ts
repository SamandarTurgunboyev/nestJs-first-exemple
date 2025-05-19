import { Body, Controller, Delete, Get, HttpCode, Param, Patch, Post, Req, UseGuards, UsePipes, ValidationPipe } from '@nestjs/common';
import { BlogService } from './blog.service';
import { BlogDto, CreateBlogDto } from './dto/blog.dto';
import { ApiBody, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { Roles } from 'src/roles.decorator';
import { Role } from 'src/role.enum';
import { RolesGuard } from 'src/roles/roles.guard';

@UseGuards(RolesGuard)
@Controller('blog')
export class BlogController {
    constructor(private readonly blogService: BlogService) { }

    @HttpCode(200)
    @Get()
    @ApiResponse({
        status: 201,
        schema: {
            example: [
                {
                    title: "Vue.js",
                    excerpt: "Vue.js courses",
                    description: "Vue.js description",
                    authorId: {
                        _id: "682aef235174a2985cccd5c0",
                        email: "Nest@gmail.com",
                        password: "$2b$10$WUpIa7lij5cbSn4DoalL4O1EkK/HfD3W06er2k47h5Quf0FkadAVW",
                        name: "Nestjs",
                    },
                    _id: "682aff8c5a549abc16962234",
                }
            ]
        }
    })
    async getAllBlogs() {
        return this.blogService.getAllBlogs()
    }

    @Roles(Role.Admin)
    @UseGuards(RolesGuard)
    @Post("create")
    @UsePipes(ValidationPipe)
    @ApiOperation({ summary: 'Create blog logged-in user' })
    @ApiBody({ type: BlogDto })
    @ApiResponse({
        status: 201,
        schema: {
            example: {
                title: "Vue.js",
                excerpt: "Vue.js courses",
                description: "Vue.js description",
                authorId: "682af800e53024afb0c98cd3",
                _id: "682aff8c5a549abc16962234",
            }
        }
    })
    async createBlog(@Body() dto: BlogDto, @Req() req: any) {
        return this.blogService.createBlog(dto, req.user)
    }

    @HttpCode(200)
    @Get(":id")
    @ApiOperation({ summary: 'Get blog one logged-in user' })
    @ApiResponse({
        status: 201,
        schema: {
            example:
            {
                title: "Vue.js",
                excerpt: "Vue.js courses",
                description: "Vue.js description",
                authorId: {
                    _id: "682aef235174a2985cccd5c0",
                    email: "Nest@gmail.com",
                    password: "$2b$10$WUpIa7lij5cbSn4DoalL4O1EkK/HfD3W06er2k47h5Quf0FkadAVW",
                    name: "Nestjs",
                },
                _id: "682aff8c5a549abc16962234",
            }

        }
    })
    async getBlogId(@Param("id") id: string, @Req() req: any) {
        return this.blogService.getBlogId(id, req?.user)
    }

    @HttpCode(201)
    @Patch(":id")
    @ApiOperation({ summary: 'update blog logged-in user' })
    @ApiBody({ type: BlogDto })
    @ApiResponse({
        status: 201,
        schema: {
            example:
            {
                title: "Vue.js",
                excerpt: "Vue.js courses",
                description: "Vue.js description",
                authorId: {
                    _id: "682aef235174a2985cccd5c0",
                    email: "Nest@gmail.com",
                    password: "$2b$10$WUpIa7lij5cbSn4DoalL4O1EkK/HfD3W06er2k47h5Quf0FkadAVW",
                    name: "Nestjs",
                },
                _id: "682aff8c5a549abc16962234",
            }

        }
    })
    async getUpdateBlog(@Param("id") id: string, @Body() dto: CreateBlogDto, @Req() req) {
        return this.blogService.updateBlog(id, dto, req?.user)
    }

    @HttpCode(200)
    @ApiOperation({ summary: 'delete blog logged-in user' })
    @Delete(":id")
    async deleteBlog(@Param("id") id: string, @Req() req) {
        return this.blogService.deleteBlog(id, req?.user)
    }
}
