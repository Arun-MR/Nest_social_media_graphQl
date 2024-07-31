export declare class ConstantService {
    readonly ENUMS: {
        ORDER: {
            ASC: string;
            DESC: string;
        };
        HASH_TYPES: {
            CREATE_NEW_ACCT: string;
            RESET_PASSWORD: string;
            UPDATE_EMAIL: string;
            INVITE_EMAIL: string;
        };
        FILE_FORMAT: {
            PNG: string;
            SVG: string;
            PDF: string;
            GIF: string;
            WEBP: string;
        };
        LOGIN_TYPE: {
            GOOGLE: string;
            FACEBOOK: string;
            CUSTOM: string;
        };
        MIME_TYPE: {
            IMAGE: {
                SVG: string;
                PNG: string;
                PDF: string;
                GIF: string;
                WEBP: string;
            };
        };
        ACL_TYPE: {
            PUBLIC: string;
            PRIVATE: string;
        };
        HASH_EXPIRES_IN: {
            DEFAULT_EXPIRY: number;
            INVITE_EXPIRY: number;
        };
        USER_STATUS: {
            INVITED: string;
            NONE: any;
        };
    };
    readonly RESP_ERR_CODES: {
        ERR_400: number;
        ERR_401: number;
        ERR_422: number;
        ERR_500: number;
        ERR_403: number;
        ERR_404: number;
        ERR_405: number;
        ERR_409: number;
        ERR_410: number;
        ERR_412: number;
    };
    readonly ERROR_MESSAGES: {
        NOT_AUTHORISED: string;
        USER_NOT_FOUND: string;
        USER_ALREAD_EXISTS: string;
        INVALID_PASSWORD: string;
        EMAIL_NOT_VERIFIED: string;
        RECORD_NOT_FOUND: string;
        PASSWORD_NOT_MATCHED: string;
        SAME_OLD_PASSWORD: string;
        HASH_EXPIRED: string;
        HASH_NOT_FOUND: string;
        ADDRS_NOT_FOUND: string;
        TYPE_NOT_FOUND: string;
        FORGOT_PASSWORD_REQUEST: string;
        VERIFICATION_CODE_INVALID: string;
        VERIFICATION_CODE_EXPIRED: string;
        USER_ALREADY_EXIST: string;
        USERNAME_NOT_AVAILABLE: string;
        NO_NOTIFICATION_FOUND: string;
    };
    readonly SUCCESS_MESSAGES: {
        EMAIL_SEND: string;
        OK: string;
        REGISTERED: string;
        PASSWORD_CHANGED: string;
        PASSWORD_SET: string;
        PASSWORD_RESET: string;
        BUCKET_DELETED: string;
        BUCET_UPDATED: string;
        EMAIL_UPDATED: string;
        PROFILE_UPDATE: string;
        SUCCESS: string;
    };
    readonly INS_EXCLUDE_COLS: string[];
    readonly AWS_BUCKET_NAME: string;
    readonly ASSET_FOLDER_PATH_S3: {
        CHAT_IMAGES: string;
    };
    readonly NODEMAILER: {
        SENDER_NAME: string;
        SENDER_EMAIL: string;
        MAIL_SUBJECT: {
            PASSWARD_CHANGE: string;
        };
        MAIL_TEMPLATE: {
            CHANGE_PASSWORD: string;
        };
    };
    readonly EMAIL_PATH = "src/views/email-templates";
    readonly DEEPLINK_PATH: {
        SIGUP: string;
        LOGIN: string;
        RESET_PASSWORD: string;
    };
    readonly NOTIFICATION_TITILES: {
        WELCOME_BACK: string;
    };
    readonly NOTIFICATION_TYPES: {
        PASSWORD_CHAGED: string;
    };
    readonly USER_SELECION_TYPES: {
        RANDOM: string;
        EMAIL: string;
        USERNAME: string;
    };
    readonly LEADER_BOARD_FILTER: {
        friends: string;
        country: string;
        global: string;
    };
}
