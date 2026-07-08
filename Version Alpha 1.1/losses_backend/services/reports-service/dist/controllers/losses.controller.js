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
exports.LossesController = void 0;
class LossesController {
    saveMeasurementsPerHour(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const data = req.body;
                return res.status(201).json({
                    ok: true,
                    status: 201,
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
    saveLossesPercentError(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const data = req.body;
                return res.status(201).json({
                    ok: true,
                    status: 201
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
exports.LossesController = LossesController;
