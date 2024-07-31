import { CreatePostInput } from './dto/create-post.input';
import { UpdatePostInput } from './dto/update-post.input';
import { Post } from './entities/post.entity';
import { Repository } from 'typeorm';
export declare class PostService {
    private postRepo;
    constructor(postRepo: Repository<Post>);
    createPost(createPostInput: CreatePostInput): Promise<Post>;
    findAllPost(): Promise<Post[]>;
    findOnePost(id: number): Promise<Post[]>;
    update(id: number, updatePostInput: UpdatePostInput): Promise<Post>;
    remove(id: number): Promise<import("typeorm").DeleteResult>;
}
