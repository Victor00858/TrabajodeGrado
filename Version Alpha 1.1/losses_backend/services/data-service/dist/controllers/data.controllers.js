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
exports.DataController = void 0;
const measurements_1 = require("../models/measurements");
const measurement_data_1 = __importDefault(require("../models/measurement_data"));
const unit_model_1 = __importDefault(require("../models/unit.model"));
const substances_1 = __importDefault(require("../models/substances"));
const tanks_model_1 = __importDefault(require("../models/tanks.model"));
const value_types_model_1 = __importDefault(require("../models/value-types.model"));
const config_1 = require("../database/config");
/**
 * Controlador encagargado de suministrar información de datos
 */
class DataController {
    /**
     * Controlador encargado de traer los datoss
     * @param req
     * @param res
     */
    getMeasurementsPerMinute(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const measurements = yield measurements_1.Measurement.findAll({
                    attributes: ['id',
                        [config_1.sequelize.literal("DATE_FORMAT(date, '%d-%m-%Y %H:%i:%s')"), 'date']],
                    where: {
                        'tanksId': 2
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
                        },
                        {
                            model: tanks_model_1.default,
                            attributes: ['name', ['isolated', 'isIsolated'], ['d', 'diameter'], ['hro', 'spaceTank'], 'alfa', ['hs', 'tankHeight'], ['hnx', 'hlx'], ['hnn', 'hln'], 'pr', 'ge', 'tc', 'hro', 'hs']
                        }
                    ]
                });
                return res.status(200).json({
                    ok: true,
                    message: 'consulta exitosa',
                    measurements
                });
            }
            catch (error) {
                return res.status(500).json({
                    ok: false,
                    message: error
                });
            }
        });
    }
}
exports.DataController = DataController;
