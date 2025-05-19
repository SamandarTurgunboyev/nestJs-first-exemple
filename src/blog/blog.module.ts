import { Module } from '@nestjs/common';
import { BlogController } from './blog.controller';
import { BlogService } from './blog.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Blog, BlogSchema } from 'src/schemas/blog.schemas';

@Module({
  imports: [MongooseModule.forFeature(
    [
      { name: Blog.name, schema: BlogSchema }
    ]
  )
  ],
  controllers: [BlogController],
  providers: [BlogService]
})
export class BlogModule { }
