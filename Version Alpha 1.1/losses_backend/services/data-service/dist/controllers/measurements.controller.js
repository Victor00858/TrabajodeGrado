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
Object.defineProperty(exports, "__esModule", { value: true });
exports.MeasurementController = void 0;
const measurements_service_1 = require("../services/measurements.service");
class MeasurementController {
    constructor() { }
    getMeasurementsPerMinuteByTank(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                const data = yield measurements_service_1.MeasurementService.getMeasurementsPerMinuteByTank(Number(id));
                return res.status(200).json({
                    ok: true,
                    message: 'consulta exitosa',
                    data
                });
            }
            catch (error) {
                return res.status(500).json({
                    ok: false,
                    message: 'Error con el servidor'
                });
            }
        });
    }
}
exports.MeasurementController = MeasurementController;
