export declare class BlogDto {
    title: string;
    excerpt: string;
    description: string;
}
export type CreateBlogDto = Omit<BlogDto, 'id'>;
