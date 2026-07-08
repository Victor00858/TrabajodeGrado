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
exports.Substance = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const measurements_1 = __importDefault(require("./measurements"));
const substances_groups_1 = __importDefault(require("./substances-groups"));
let Substance = class Substance extends sequelize_typescript_1.Model {
};
__decorate([
    (0, sequelize_typescript_1.Column)({ primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        type: sequelize_typescript_1.DataType.INTEGER
    })
], Substance.prototype, "id", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        field: 'name',
        type: sequelize_typescript_1.DataType.STRING
    })
], Substance.prototype, "name", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.FLOAT,
        allowNull: false
    })
], Substance.prototype, "A", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.FLOAT,
        allowNull: false
    })
], Substance.prototype, "B", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.FLOAT,
        allowNull: false
    })
], Substance.prototype, "pmVapor", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.FLOAT
    })
], Substance.prototype, "pmLiquid", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.FLOAT
    })
], Substance.prototype, "Kc", void 0);
__decorate([
    sequelize_typescript_1.CreatedAt,
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.DATE
    })
], Substance.prototype, "createdAt", void 0);
__decorate([
    sequelize_typescript_1.UpdatedAt,
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.DATE
    })
], Substance.prototype, "updatedAt", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => substances_groups_1.default),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.INTEGER })
], Substance.prototype, "substanceGroupsId", void 0);
__decorate([
    (0, sequelize_typescript_1.HasMany)(() => measurements_1.default)
], Substance.prototype, "measurements", void 0);
Substance = __decorate([
    (0, sequelize_typescript_1.Table)({
        tableName: 'substances',
        underscored: true,
        modelName: 'Substance'
    })
], Substance);
exports.Substance = Substance;
exports.default = Substance;
