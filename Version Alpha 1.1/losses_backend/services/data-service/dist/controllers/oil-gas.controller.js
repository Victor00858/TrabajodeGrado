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
exports.OilGasController = void 0;
const oil_gas_service_1 = require("../services/oil-gas.service");
class OilGasController {
    getOilGas(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                const { start_date = '2023-02-26', end_date = '2023-03-30' } = req.body;
                const data = yield oil_gas_service_1.OilGasService.getOilGasService(Number(id), start_date, end_date);
                return res.status(200).json({
                    ok: true,
                    message: 'Consulta exitosa',
                    data
                });
            }
            catch (error) {
                return res.status(500).json({
                    ok: false,
                    message: 'Error de conexión al servidor'
                });
            }
        });
    }
}
exports.OilGasController = OilGasController;
