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
        PORT: process.env.REPORTS_SERVICE_PORT || '8080',
        URL_BASE: "/api/v1/losses-report",
    }
};
exports.default = config;
