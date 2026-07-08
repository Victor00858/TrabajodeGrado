"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.JWTGenerator = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const environments_1 = __importDefault(require("../environments/environments"));
/**
 * Clase encargada de generar un JWT
 */
class JWTGenerator {
    /**
     * Método encargado de generar un token de JWT
     * @param payload Objeto de datos que se desea encapsular
     * @returns retorna un token
     */
    static GenerateJWT(payload) {
        return new Promise((resolver, reject) => {
            jsonwebtoken_1.default.sign(payload, environments_1.default.SERVER_CONFIG.SECRET_KEY, {
                expiresIn: '2h',
            }, (err, token) => {
                if (err) {
                    reject('No se pudo generar el token');
                }
                else {
                    resolver(token);
                }
            });
        });
    }
}
exports.JWTGenerator = JWTGenerator;
