import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import { JwtService } from '@nestjs/jwt';
export declare class UserService {
    private UserRepo;
    private jwtService;
    constructor(UserRepo: Repository<User>, jwtService: JwtService);
    signup(createUserInput: CreateUserInput): Promise<User>;
    signIn(createUserInput: CreateUserInput): Promise<any>;
    findAll(): Promise<User[]>;
    findOne(id: number): Promise<User[]>;
    update(id: number, updateUserInput: UpdateUserInput): string;
    remove(id: number): string;
}
