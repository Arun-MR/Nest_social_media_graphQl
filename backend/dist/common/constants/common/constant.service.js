"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConstantService = void 0;
const common_1 = require("@nestjs/common");
let ConstantService = class ConstantService {
    constructor() {
        this.ENUMS = {
            ORDER: {
                ASC: 'asc',
                DESC: 'desc',
            },
            HASH_TYPES: {
                CREATE_NEW_ACCT: 'CREATE_NEW_ACCT',
                RESET_PASSWORD: 'RESET_PASSWORD',
                UPDATE_EMAIL: 'UPDATE_EMAIL',
                INVITE_EMAIL: 'INVITE_EMAIL',
            },
            FILE_FORMAT: {
                PNG: '.png',
                SVG: '.svg',
                PDF: '.pdf',
                GIF: '.gif',
                WEBP: '.webp',
            },
            LOGIN_TYPE: {
                GOOGLE: 'GOOGLE',
                FACEBOOK: 'FACEBOOK',
                CUSTOM: 'CUSTOM',
            },
            MIME_TYPE: {
                IMAGE: {
                    SVG: 'image/svg+xml',
                    PNG: 'image/png',
                    PDF: 'application/pdf',
                    GIF: 'image/gif',
                    WEBP: 'image/webp',
                },
            },
            ACL_TYPE: {
                PUBLIC: 'public-read',
                PRIVATE: 'private',
            },
            HASH_EXPIRES_IN: {
                DEFAULT_EXPIRY: 10,
                INVITE_EXPIRY: 1440,
            },
            USER_STATUS: {
                INVITED: 'invited',
                NONE: null,
            },
        };
        this.RESP_ERR_CODES = {
            ERR_400: 400,
            ERR_401: 401,
            ERR_422: 422,
            ERR_500: 500,
            ERR_403: 403,
            ERR_404: 404,
            ERR_405: 405,
            ERR_409: 409,
            ERR_410: 410,
            ERR_412: 412,
        };
        this.ERROR_MESSAGES = {
            NOT_AUTHORISED: 'You are not authorized',
            USER_NOT_FOUND: 'User not found.',
            USER_ALREAD_EXISTS: 'User already exists',
            INVALID_PASSWORD: 'Invalid Password',
            EMAIL_NOT_VERIFIED: 'Email not verified',
            RECORD_NOT_FOUND: 'Record not found.',
            PASSWORD_NOT_MATCHED: 'Old Password does not match',
            SAME_OLD_PASSWORD: 'New Password is Same as old',
            HASH_EXPIRED: 'Hash expired',
            HASH_NOT_FOUND: 'Link Expired ',
            ADDRS_NOT_FOUND: 'User billing address not found.',
            TYPE_NOT_FOUND: 'Type not Found!',
            FORGOT_PASSWORD_REQUEST: `The account currently has no password set. We recommend requesting a 'Forgot Password'.`,
            VERIFICATION_CODE_INVALID: 'Invalid verification code',
            VERIFICATION_CODE_EXPIRED: 'The verification code has been expired.',
            USER_ALREADY_EXIST: 'The provided credentials already exit please sign in ',
            USERNAME_NOT_AVAILABLE: 'The Username is not available .',
            NO_NOTIFICATION_FOUND: 'No notifications found',
        };
        this.SUCCESS_MESSAGES = {
            EMAIL_SEND: 'Email send successfully',
            OK: 'OK',
            REGISTERED: 'Registered',
            PASSWORD_CHANGED: 'Password changed',
            PASSWORD_SET: 'Password set successfully',
            PASSWORD_RESET: 'Password reset successfully',
            BUCKET_DELETED: 'Bucket deleted successfully.',
            BUCET_UPDATED: 'Bucket updated successfully.',
            EMAIL_UPDATED: 'Email updated successfully',
            PROFILE_UPDATE: 'Profile Details Update Successfully',
            SUCCESS: "Requested record created successfully",
        };
        this.INS_EXCLUDE_COLS = ['created_at', 'updated_at', 'deleted_at'];
        this.AWS_BUCKET_NAME = process.env.AWS_BUCKET_NAME || 'projectMedia';
        this.ASSET_FOLDER_PATH_S3 = {
            CHAT_IMAGES: 'user/Image',
        };
        this.NODEMAILER = {
            SENDER_NAME: 'projectName',
            SENDER_EMAIL: `no-reply@${process.env.COMPANY_DOMAIN}`,
            MAIL_SUBJECT: {
                PASSWARD_CHANGE: 'Password Change Requested !',
            },
            MAIL_TEMPLATE: {
                CHANGE_PASSWORD: 'changePassword',
            },
        };
        this.EMAIL_PATH = 'src/views/email-templates';
        this.DEEPLINK_PATH = {
            SIGUP: 'signup',
            LOGIN: 'login',
            RESET_PASSWORD: 'resetPassword',
        };
        this.NOTIFICATION_TITILES = {
            WELCOME_BACK: 'Welcome back',
        };
        this.NOTIFICATION_TYPES = {
            PASSWORD_CHAGED: 'GAME_STARTED',
        };
        this.USER_SELECION_TYPES = {
            RANDOM: 'random',
            EMAIL: 'email',
            USERNAME: 'username',
        };
        this.LEADER_BOARD_FILTER = {
            friends: 'Friends',
            country: 'Country',
            global: 'Global',
        };
    }
};
exports.ConstantService = ConstantService;
exports.ConstantService = ConstantService = __decorate([
    (0, common_1.Injectable)()
], ConstantService);
//# sourceMappingURL=constant.service.js.map