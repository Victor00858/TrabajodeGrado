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
exports.MeasurementService = void 0;
const config_1 = require("../database/config");
const measurement_data_1 = __importDefault(require("../models/measurement_data"));
const measurements_1 = __importDefault(require("../models/measurements"));
const substances_1 = __importDefault(require("../models/substances"));
const unit_model_1 = __importDefault(require("../models/unit.model"));
const value_types_model_1 = __importDefault(require("../models/value-types.model"));
class MeasurementService {
    static getMeasurementsPerMinute() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const data = yield measurements_1.default.findAll({
                    attributes: ['id',
                        [config_1.sequelize.literal("DATE_FORMAT(date, '%d-%m-%Y %H:%i:%s')"), 'date']],
                    include: [
                        {
                            model: measurement_data_1.default,
                            attributes: ['value'],
                            include: [
                                {
                                    model: unit_model_1.default,
                                    attributes: ['name', 'symbol']
                                },
                                {
                                    model: value_types_model_1.default,
                                    attributes: ['name']
                                }
                            ]
                        },
                        {
                            model: substances_1.default,
                            attributes: ['name', 'pmLiquid', 'pmVapor', 'a', 'b', 'kc']
                        }
                    ]
                });
                return data;
            }
            catch (error) {
                throw new Error('Error en la consulta');
            }
        });
    }
    static getMeasurementsPerMinuteByTank(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const data = yield measurements_1.default.findAll({
                    attributes: ['id',
                        [config_1.sequelize.literal("DATE_FORMAT(date, '%d-%m-%Y %H:%i:%s')"), 'date']],
                    where: {
                        'tanksId': id
                    },
                    include: [
                        {
                            model: measurement_data_1.default,
                            attributes: ['value'],
                            include: [
                                {
                                    model: unit_model_1.default,
                                    attributes: ['name', 'symbol']
                                },
                                {
                                    model: value_types_model_1.default,
                                    attributes: ['name']
                                }
                            ]
                        },
                        {
                            model: substances_1.default,
                            attributes: ['name', 'pmLiquid', 'pmVapor', 'a', 'b', 'kc']
                        }
                    ]
                });
                return data;
            }
            catch (error) {
                throw new Error('Error en la consulta');
            }
        });
    }
}
exports.MeasurementService = MeasurementService;
