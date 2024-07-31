import { JwtService as NestJwtService } from '@nestjs/jwt';
export declare class JwtService {
    private readonly jwtService;
    constructor(jwtService: NestJwtService);
    verifyToken(token: string): any;
    decodeToken(token: string): any;
}
