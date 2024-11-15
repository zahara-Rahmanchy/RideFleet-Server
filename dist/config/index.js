"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const path_1 = __importDefault(require("path"));
const envPath = process.env.NODE_ENV === "production"
    ? path_1.default.join(process.cwd(), ".env.prod")
    : path_1.default.join(process.cwd(), ".env");
dotenv_1.default.config({ path: envPath });
exports.default = {
    env: process.env.NODE_ENV,
    port: process.env.PORT,
    database_url: process.env.DATABASE_URL,
    jwt: {
        secret: process.env.JWT_SECRET,
        expires_in: process.env.JWT_EXPIRES_IN,
        refresh_secret: process.env.REFRESH_SECRET,
        refresh_expires_in: process.env.REFRESH_EXPIRES_IN,
        // passwordResetTokenExpirationTime: process.env.PASS_RESET_EXPIRATION_TIME,
    },
};
