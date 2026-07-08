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
exports.LoginService = void 0;
const jwt_generator_1 = require("../helpers/jwt-generator");
const login_validators_1 = require("../helpers/login.validators");
const users_model_1 = require("../models/users.model");
/**
 * Clase encargada de gestionar los servicios de Login
 */
class LoginService {
    /**
     * Método encargado de realizar la autenticación por
     * @param userName Nombre de usuario digitado por el usuario
     * @param password Contraseña digitada por el usuario
     */
    static getLoginWithUserName(userName, password) {
        return __awaiter(this, void 0, void 0, function* () {
            /**Busca en base de datos el objeto */
            const user = yield users_model_1.User.findOne({ where: { userName: userName } });
            /**Pregunta si la contraseña es válida */
            const isValidPassword = login_validators_1.LoginValidators.isValidPassword(password, user.password);
            /**Verifica si la contraseña es correcta para generar el token */
            if (isValidPassword) {
                const token = yield jwt_generator_1.JWTGenerator.GenerateJWT(user);
                return {
                    user,
                    token
                };
            }
            return;
        });
    }
}
exports.LoginService = LoginService;
