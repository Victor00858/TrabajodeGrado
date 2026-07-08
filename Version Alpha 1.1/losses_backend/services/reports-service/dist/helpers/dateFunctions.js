"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DateFunction = void 0;
const moment_1 = __importDefault(require("moment")); // Importar Moment.js
class DateFunction {
    static generateDateNow() {
        const fechaActual = (0, moment_1.default)();
        // Formatear la fecha y hora en string con el formato AAAA-MM-DD HH:MM:SS
        const fechaFormateada = fechaActual.format('YYYY-MM-DD-HH-mm-ss').toString();
        return fechaFormateada;
    }
}
exports.DateFunction = DateFunction;
