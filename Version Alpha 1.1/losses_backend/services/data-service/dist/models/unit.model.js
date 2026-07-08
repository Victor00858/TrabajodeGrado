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
exports.Unit = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const measurement_data_1 = __importDefault(require("./measurement_data"));
const unit_types_model_1 = require("./unit-types.model");
let Unit = class Unit extends sequelize_typescript_1.Model {
};
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    })
], Unit.prototype, "id", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING,
        allowNull: false
    })
], Unit.prototype, "name", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING,
        allowNull: false
    })
], Unit.prototype, "symbol", void 0);
__decorate([
    sequelize_typescript_1.CreatedAt
], Unit.prototype, "created_at", void 0);
__decorate([
    sequelize_typescript_1.UpdatedAt
], Unit.prototype, "updated_at", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => unit_types_model_1.UnitType),
    (0, sequelize_typescript_1.Column)(sequelize_typescript_1.DataType.INTEGER)
], Unit.prototype, "unit_types_id", void 0);
__decorate([
    (0, sequelize_typescript_1.HasMany)(() => measurement_data_1.default)
    /** Lista de productos asociados a la marca. */
], Unit.prototype, "measurementData", void 0);
Unit = __decorate([
    (0, sequelize_typescript_1.Table)({ tableName: 'units' })
], Unit);
exports.Unit = Unit;
exports.default = Unit;
