import { CanActivate, ExecutionContext } from '@nestjs/common';
import { JwtService } from 'src/JwtService';
export declare class UserAuthGuard implements CanActivate {
    private jwtService;
    constructor(jwtService: JwtService);
    canActivate(context: ExecutionContext): boolean;
}
