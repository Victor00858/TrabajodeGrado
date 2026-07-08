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
exports.Server = void 0;
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
const environments_1 = __importDefault(require("../environments/environments"));
const config_1 = require("../database/config");
/**
 * Clase encargada de abstraer la capa del servidor REST API
 */
class Server {
    constructor() {
        /**Atributo encargado de definir la ruta principal de la API */
        this._baseUrl = environments_1.default.SERVER_CONFIG.URL_BASE;
        /**Definición del puerto de ejecución del servidor REST API */
        this._port = environments_1.default.SERVER_CONFIG.PORT;
        /**Instancia de express */
        this._app = (0, express_1.default)();
        /**Realiza la conexión a la base de datos */
        this.dbConnection();
        /**Inicialización de los middlewares del servidor */
        this.middlewares();
    }
    /**
     * Método encargado de inicializar los middlewares
     */
    middlewares() {
        /**Implementación de paso de objetos JSON */
        this._app.use(express_1.default.json());
        /**Implementación de  morgan*/
        this._app.use((0, morgan_1.default)('dev'));
        /**Implementación de Cors */
        this._app.use((0, cors_1.default)());
    }
    /**
     * Método encargado de inicializar el servidor
     */
    listen() {
        this._app.listen(this._port, () => {
            if (environments_1.default.ENVIRONMENT == "local") {
                console.log(`Server online in http://localhost:${this._port}/${this._baseUrl}, environment: ${environments_1.default.ENVIRONMENT}`);
            }
        });
    }
    routes() {
        return "";
    }
    /**Método encargado de realizar la conexión a la base de datos */
    dbConnection() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield config_1.sequelize.authenticate();
                console.log(`\nConnected to Database: ${config_1.sequelize.getDatabaseName()}. dialect: ${config_1.sequelize.getDialect()}`);
            }
            catch (error) {
                console.error(`Unable to connect to the database ${error}`);
            }
        });
    }
}
exports.Server = Server;
