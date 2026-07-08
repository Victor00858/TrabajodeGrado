"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sequelize = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const environments_1 = __importDefault(require("../environments/environments"));
console.log(['/app/dist/models']);
/**Instancia de objeto de conexión de sequelize */
exports.sequelize = new sequelize_typescript_1.Sequelize(environments_1.default.DATABASE_CONFIG.DB_NAME, environments_1.default.DATABASE_CONFIG.DB_USER_ROOT, environments_1.default.DATABASE_CONFIG.DB_USER_ROOT_PASSOWRD, {
    host: environments_1.default.DATABASE_CONFIG.DB_HOST,
    port: Number(environments_1.default.DATABASE_CONFIG.DB_PORT),
    dialect: 'mysql',
    models: ['/app/dist/models'],
    logging: false,
});
