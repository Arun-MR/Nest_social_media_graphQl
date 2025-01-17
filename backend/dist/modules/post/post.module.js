"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostModule = void 0;
const common_1 = require("@nestjs/common");
const post_service_1 = require("./post.service");
const post_resolver_1 = require("./post.resolver");
const typeorm_1 = require("@nestjs/typeorm");
const post_entity_1 = require("./entities/post.entity");
const user_guard_1 = require("../../guards/user.guard");
const JwtService_1 = require("../../JwtService");
const passport_1 = require("@nestjs/passport");
const jwt_1 = require("@nestjs/jwt");
let PostModule = class PostModule {
};
exports.PostModule = PostModule;
exports.PostModule = PostModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([post_entity_1.Post]),
            passport_1.PassportModule.register({
                defaultStrategy: 'jwt',
            }),
            jwt_1.JwtModule.registerAsync({
                useFactory: () => ({
                    secret: 'mySecret',
                    signOptions: {
                        expiresIn: '24h',
                    },
                }),
            }),
        ],
        providers: [post_resolver_1.PostResolver, post_service_1.PostService, user_guard_1.UserAuthGuard, JwtService_1.JwtService],
        exports: [jwt_1.JwtModule, JwtService_1.JwtService],
    })
], PostModule);
//# sourceMappingURL=post.module.js.map