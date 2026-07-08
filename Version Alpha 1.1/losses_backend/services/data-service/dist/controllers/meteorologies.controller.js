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
exports.MeteorologiesController = void 0;
const meteorologies_service_1 = require("../services/meteorologies.service");
class MeteorologiesController {
    getMeteorologies(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const data = yield meteorologies_service_1.MeteorologiesService.getMetorologies();
                return res.status(200).json({
                    ok: true,
                    message: "Consulta exitosa",
                    data
                });
            }
            catch (error) {
                return res.status(500).json({
                    ok: false,
                    message: 'Ha ocurrido un error'
                });
            }
        });
    }
}
exports.MeteorologiesController = MeteorologiesController;
