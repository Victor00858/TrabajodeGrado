"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Server = void 0;
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
const environment_1 = __importDefault(require("./environments/environment"));
const measurements_router_1 = __importDefault(require("./routes/measurements.router"));
const losses_router_1 = __importDefault(require("./routes/losses.router"));
/**
 * Clase encargada de abstraer la capa del servidor REST API
 */
class Server {
    constructor() {
        /**Atributo encargado de definir la ruta principal de la API */
        this._baseUrl = environment_1.default.SERVER_CONFIG.URL_BASE;
        /**Definición del puerto de ejecución del servidor REST API */
        this._port = environment_1.default.SERVER_CONFIG.PORT;
        /**Instancia de express */
        this._app = (0, express_1.default)();
        /**Inicialización de los middlewares del servidor */
        this.middlewares();
        /**Inicialización de las rutas */
        this.routes();
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
            if (environment_1.default.ENVIRONMENT == "local") {
                console.log(`Server online in http://localhost:${this._port}/${this._baseUrl}, environment: ${environment_1.default.ENVIRONMENT}`);
            }
        });
    }
    routes() {
        console.log('Cargue de las rutas');
        this._app.use(environment_1.default.SERVER_CONFIG.URL_BASE, measurements_router_1.default);
        this._app.use(environment_1.default.SERVER_CONFIG.URL_BASE, losses_router_1.default);
    }
}
exports.Server = Server;
