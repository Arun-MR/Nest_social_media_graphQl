export declare class CommentDto {
    userId?: number;
    commentText?: string;
}
export declare class ReplyDto {
    userId?: number;
    replyText: string;
}
export declare class CreatePostInput {
    description: string;
    image?: string;
    userId: number;
    video?: string;
    comments?: CommentDto[];
    replies?: ReplyDto[];
    likes?: number[];
    dislikes?: number[];
}
