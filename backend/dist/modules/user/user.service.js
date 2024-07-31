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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const user_entity_1 = require("./entities/user.entity");
const typeorm_2 = require("typeorm");
const jwt_1 = require("@nestjs/jwt");
const bcrypt = require("bcrypt");
let UserService = class UserService {
    constructor(UserRepo, jwtService) {
        this.UserRepo = UserRepo;
        this.jwtService = jwtService;
    }
    async signup(createUserInput) {
        const { Email } = createUserInput;
        const userExist = await this.UserRepo.findBy({ Email: Email });
        console.log(userExist, Email);
        if (userExist.length) {
            throw new Error('Already Exist email');
        }
        const user = this.UserRepo.create(createUserInput);
        const userDetail = await this.UserRepo.save(user);
        return userDetail;
    }
    async signIn(createUserInput) {
        const { Email, Password } = createUserInput;
        const user = await this.UserRepo.findOne({ where: { Email } });
        console.log(user, "login");
        if (user && (await bcrypt.compare(Password, user.Password))) {
            const payload = { Email };
            const accessToken = this.jwtService.sign(payload);
            return { accessToken, ...user };
        }
        else {
            throw new common_1.UnauthorizedException('Please check your login credentials');
        }
    }
    findAll() {
        return this.UserRepo.find();
    }
    findOne(id) {
        return this.UserRepo.findBy({ id: id });
    }
    update(id, updateUserInput) {
        return `This action updates a #${id} user`;
    }
    remove(id) {
        return `This action removes a #${id} user`;
    }
};
exports.UserService = UserService;
exports.UserService = UserService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(user_entity_1.User)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        jwt_1.JwtService])
], UserService);
//# sourceMappingURL=user.service.js.map