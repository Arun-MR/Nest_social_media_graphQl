import { Comment } from './comment.entity';
import { Reply } from './reply.entity';
import { User } from 'src/modules/user/entities/user.entity';
export declare class Post {
    id: number;
    description: string;
    userId: number;
    user?: User;
    image?: string;
    video?: string;
    comments?: Comment[];
    replies?: Reply[];
    likes?: number[];
    dislikes?: number[];
}
