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
exports.DataService = void 0;
const measurements_1 = require("../models/measurements");
/**
 * Servicio encargado de traer los datos
 */
class DataService {
    /**
     * Método encargado de suministrar la información por minuto de los dato
     */
    static getMeasurementsPerMinute() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const measurements = yield measurements_1.Measurement.findAll();
                return measurements;
            }
            catch (error) {
                throw new Error('No es posible tomar los datos');
            }
        });
    }
}
exports.DataService = DataService;
