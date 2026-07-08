"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const config = {
    ENVIRONMENT: process.env.NODE_ENV,
    SERVER_CONFIG: {
        PORT: process.env.DATA_SERVICE_PORT || '8080',
        SECRET_KEY: process.env.SECRET_KEY || 'llavePrueba',
        URL_BASE: "/api/v1/losses-data",
    },
    DATABASE_CONFIG: {
        DB_NAME: process.env.MYSQL_DB_NAME || "",
        DB_HOST: "mysqldb",
        DB_PORT: process.env.MYSQL_DB_PORT || "3306",
        DIALECT_DB: process.env.MYSQL_DIALECT || 'mysql',
        DB_USER_ROOT: process.env.MYSQL_USER_ROOT || "root",
        DB_USER_ROOT_PASSOWRD: process.env.MYSQL_USER_PASSWORD || "1234339827"
    }
};
console.log(config.DATABASE_CONFIG.DB_USER_ROOT_PASSOWRD);
exports.default = config;
