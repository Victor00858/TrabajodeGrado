"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginValidators = void 0;
const bcryptjs_1 = __importDefault(require("bcryptjs"));
/**
 * Clase encargada de proporcionar herramientas de validación
 */
class LoginValidators {
    /**
     * Método encargado de verificar la contraseña
     * @param passwordIn
     * @param passwordTruth
     * @returns un boleano con true si la contraseña es correcta, de lo contrario, retorna false
     */
    static isValidPassword(passwordIn, passwordTruth) {
        return bcryptjs_1.default.compareSync(passwordTruth, passwordIn);
    }
}
exports.LoginValidators = LoginValidators;
