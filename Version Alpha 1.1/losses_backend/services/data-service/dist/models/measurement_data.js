"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MeasurementData = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const measurements_1 = require("./measurements");
const unit_model_1 = require("./unit.model");
const value_types_model_1 = require("./value-types.model");
let MeasurementData = class MeasurementData extends sequelize_typescript_1.Model {
};
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    })
], MeasurementData.prototype, "id", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
        allowNull: true,
    })
], MeasurementData.prototype, "value", void 0);
__decorate([
    sequelize_typescript_1.CreatedAt,
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.DATE,
    })
], MeasurementData.prototype, "createdAt", void 0);
__decorate([
    sequelize_typescript_1.UpdatedAt,
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.DATE,
    })
], MeasurementData.prototype, "updatedAt", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => value_types_model_1.ValueType),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
        allowNull: true,
    })
], MeasurementData.prototype, "valueTypesId", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => measurements_1.Measurement),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
        allowNull: true,
    })
], MeasurementData.prototype, "measurementsId", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => unit_model_1.Unit),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
        allowNull: true,
    })
], MeasurementData.prototype, "unitsId", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => unit_model_1.Unit)
], MeasurementData.prototype, "unit", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => value_types_model_1.ValueType)
], MeasurementData.prototype, "valueType", void 0);
MeasurementData = __decorate([
    (0, sequelize_typescript_1.Table)({
        tableName: 'measurement_data',
        modelName: 'MeasurementData',
        underscored: true, // Indica que el nombre de la tabla y atributos deben convertirse a snakeCase:'MeasurementData'
    })
], MeasurementData);
exports.MeasurementData = MeasurementData;
exports.default = MeasurementData;
