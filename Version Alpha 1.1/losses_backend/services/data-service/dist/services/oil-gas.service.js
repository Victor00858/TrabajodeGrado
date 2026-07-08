"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OilGasService = void 0;
const config_1 = require("../database/config");
const losses_oil_gas_1 = __importDefault(require("../models/losses-oil-gas"));
const sequelize_1 = require("sequelize");
class OilGasService {
    static getOilGasService(tankId, start_date, end_date) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const data = yield losses_oil_gas_1.default.findAll({
                    where: {
                        '$date$': {
                            [sequelize_1.Op.between]: [start_date, end_date]
                        },
                        '$tanks_id$': tankId
                    },
                    attributes: ['id',
                        [config_1.sequelize.literal("DATE_FORMAT(date, '%d-%m-%Y %H:%i:%s')"), 'date'],
                        'lt_oil_gas', 'tla_oil_gas', 'tb_oil_gas', 'hl_oil_gas',
                        'pva_oil_gas', 'taa_oil_gas', 'tanks_id']
                });
                return data;
            }
            catch (error) {
                throw ('Error en la consulta');
            }
        });
    }
}
exports.OilGasService = OilGasService;
