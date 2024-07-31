import { Post } from 'src/modules/post/entities/post.entity';
export declare class User {
    id: number;
    Name?: string;
    Email: string;
    Password: string;
    accessToken?: string;
    posts?: Post[];
    createdAt: Date;
    updatedAt: Date;
    hashPassword(): Promise<void>;
}
