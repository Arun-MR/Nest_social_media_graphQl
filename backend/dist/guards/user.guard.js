"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserAuthGuard = void 0;
const common_1 = require("@nestjs/common");
const graphql_1 = require("@nestjs/graphql");
const JwtService_1 = require("../JwtService");
let UserAuthGuard = class UserAuthGuard {
    constructor(jwtService) {
        this.jwtService = jwtService;
    }
    canActivate(context) {
        const ctx = graphql_1.GqlExecutionContext.create(context).getContext();
        const request = ctx.req;
        const authorization = request.headers.authorization;
        this.jwtService.verifyToken(authorization);
        this.jwtService.decodeToken(authorization);
        if (!authorization) {
            throw new Error('Authorization header not found');
        }
        return true;
    }
};
exports.UserAuthGuard = UserAuthGuard;
exports.UserAuthGuard = UserAuthGuard = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [JwtService_1.JwtService])
], UserAuthGuard);
//# sourceMappingURL=user.guard.js.map