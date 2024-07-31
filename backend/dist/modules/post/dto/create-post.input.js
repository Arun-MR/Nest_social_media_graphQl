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
exports.CreatePostInput = exports.ReplyDto = exports.CommentDto = void 0;
const graphql_1 = require("@nestjs/graphql");
const class_validator_1 = require("class-validator");
let CommentDto = class CommentDto {
};
exports.CommentDto = CommentDto;
__decorate([
    (0, graphql_1.Field)(() => Number, { nullable: true }),
    (0, class_validator_1.IsInt)(),
    __metadata("design:type", Number)
], CommentDto.prototype, "userId", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CommentDto.prototype, "commentText", void 0);
exports.CommentDto = CommentDto = __decorate([
    (0, graphql_1.InputType)()
], CommentDto);
let ReplyDto = class ReplyDto {
};
exports.ReplyDto = ReplyDto;
__decorate([
    (0, graphql_1.Field)(() => Number, { nullable: true }),
    (0, class_validator_1.IsInt)(),
    __metadata("design:type", Number)
], ReplyDto.prototype, "userId", void 0);
__decorate([
    (0, graphql_1.Field)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ReplyDto.prototype, "replyText", void 0);
exports.ReplyDto = ReplyDto = __decorate([
    (0, graphql_1.InputType)()
], ReplyDto);
let CreatePostInput = class CreatePostInput {
};
exports.CreatePostInput = CreatePostInput;
__decorate([
    (0, graphql_1.Field)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreatePostInput.prototype, "description", void 0);
__decorate([
    (0, graphql_1.Field)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreatePostInput.prototype, "image", void 0);
__decorate([
    (0, graphql_1.Field)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsInt)(),
    __metadata("design:type", Number)
], CreatePostInput.prototype, "userId", void 0);
__decorate([
    (0, graphql_1.Field)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreatePostInput.prototype, "video", void 0);
__decorate([
    (0, graphql_1.Field)(() => CommentDto, { nullable: true }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsArray)(),
    __metadata("design:type", Array)
], CreatePostInput.prototype, "comments", void 0);
__decorate([
    (0, graphql_1.Field)(() => ReplyDto, { nullable: true }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsArray)(),
    __metadata("design:type", Array)
], CreatePostInput.prototype, "replies", void 0);
__decorate([
    (0, graphql_1.Field)(() => [Number], { nullable: true }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsArray)(),
    __metadata("design:type", Array)
], CreatePostInput.prototype, "likes", void 0);
__decorate([
    (0, graphql_1.Field)(() => [Number], { nullable: true }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsArray)(),
    __metadata("design:type", Array)
], CreatePostInput.prototype, "dislikes", void 0);
exports.CreatePostInput = CreatePostInput = __decorate([
    (0, graphql_1.InputType)()
], CreatePostInput);
//# sourceMappingURL=create-post.input.js.map