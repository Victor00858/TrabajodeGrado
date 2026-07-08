"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_typescript_1 = require("sequelize-typescript");
const tanks_model_1 = __importDefault(require("./tanks.model"));
let LossesOilGas = class LossesOilGas extends sequelize_typescript_1.Model {
};
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    })
], LossesOilGas.prototype, "id", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.DATE,
        allowNull: false,
    })
], LossesOilGas.prototype, "date", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.DECIMAL(10, 6),
        allowNull: false,
    })
], LossesOilGas.prototype, "lt_oil_gas", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.DECIMAL(10, 6),
        allowNull: false,
    })
], LossesOilGas.prototype, "tla_oil_gas", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.DECIMAL(10, 6),
        allowNull: false,
    })
], LossesOilGas.prototype, "tb_oil_gas", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.DECIMAL(10, 6),
        allowNull: false,
    })
], LossesOilGas.prototype, "hl_oil_gas", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.DECIMAL(10, 6),
        allowNull: false,
    })
], LossesOilGas.prototype, "pva_oil_gas", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.DECIMAL(10, 6),
        allowNull: false,
    })
], LossesOilGas.prototype, "taa_oil_gas", void 0);
__decorate([
    sequelize_typescript_1.CreatedAt,
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.DATE,
        allowNull: false,
    })
], LossesOilGas.prototype, "created_at", void 0);
__decorate([
    sequelize_typescript_1.UpdatedAt,
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.DATE,
        allowNull: true,
    })
], LossesOilGas.prototype, "updated_at", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => tanks_model_1.default),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
        allowNull: false,
    })
], LossesOilGas.prototype, "tanks_id", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => tanks_model_1.default)
], LossesOilGas.prototype, "tank", void 0);
LossesOilGas = __decorate([
    (0, sequelize_typescript_1.Table)({
        tableName: 'losses_oil_gas',
        modelName: 'LossesOilGas',
        timestamps: true,
        underscored: true, // Indicar si los nombres de las columnas en la base de datos deben ser en minúsculas con guiones bajos
    })
], LossesOilGas);
exports.default = LossesOilGas;
