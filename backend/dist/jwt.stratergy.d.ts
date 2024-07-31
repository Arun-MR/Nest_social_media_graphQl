import { Repository } from 'typeorm';
import { User } from './modules/user/entities/user.entity';
export interface JwtPayload {
    email: string;
}
declare const JwtStrategy_base: new (...args: any[]) => InstanceType<any>;
export declare class JwtStrategy extends JwtStrategy_base {
    private usersRepository;
    constructor(usersRepository: Repository<User>);
    validate(payload: any): Promise<User>;
}
export {};
