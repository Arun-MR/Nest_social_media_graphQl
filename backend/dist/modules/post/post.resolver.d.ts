import { PostService } from './post.service';
import { Post } from './entities/post.entity';
import { CreatePostInput } from './dto/create-post.input';
import { UpdatePostInput } from './dto/update-post.input';
export declare class PostResolver {
    private readonly postService;
    constructor(postService: PostService);
    createPost(createPostInput: CreatePostInput): Promise<Post>;
    findAllPost(): Promise<Post[]>;
    findOnePost(id: number): Promise<Post[]>;
    updatePost(updatePostInput: UpdatePostInput): Promise<Post>;
    removePost(id: number): Promise<import("typeorm").DeleteResult>;
}
