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
exports.Measurement = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const measurement_data_1 = __importDefault(require("./measurement_data"));
const tanks_model_1 = require("./tanks.model");
const substances_1 = __importDefault(require("./substances"));
let Measurement = class Measurement extends sequelize_typescript_1.Model {
};
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    })
], Measurement.prototype, "id", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.DATE,
        allowNull: false,
        // get(this){
        //     return moment.tz(this.getDataValue('date'),'America/Bogota').format('DD-MM-YYYY HH:mm:ss');
        // }  ,
    })
], Measurement.prototype, "date", void 0);
__decorate([
    sequelize_typescript_1.CreatedAt,
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.DATE,
        allowNull: false,
    })
], Measurement.prototype, "createdAt", void 0);
__decorate([
    sequelize_typescript_1.UpdatedAt,
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.DATE,
        allowNull: false,
    })
], Measurement.prototype, "updatedAt", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => substances_1.default),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
        allowNull: false,
    })
], Measurement.prototype, "substancesId", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => tanks_model_1.Tank),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
        allowNull: false,
    })
], Measurement.prototype, "tanksId", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => substances_1.default)
], Measurement.prototype, "substance", void 0);
__decorate([
    (0, sequelize_typescript_1.HasMany)(() => measurement_data_1.default)
], Measurement.prototype, "measurementData", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => tanks_model_1.Tank)
], Measurement.prototype, "tank", void 0);
Measurement = __decorate([
    (0, sequelize_typescript_1.Table)({
        tableName: "measurements",
        modelName: "Measurement",
        underscored: true
    })
], Measurement);
exports.Measurement = Measurement;
exports.default = Measurement;
