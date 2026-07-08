"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Server = void 0;
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
/**
 * Clase encargada de abstraer la capa del servidor REST API
 */
class Server {
    constructor() {
        /**Definición del puerto de ejecución del servidor REST API */
        this.port = '' || '8080';
        /**Instancia de express */
        this.app = (0, express_1.default)();
        /**Inicialización de los middlewares del servidor */
        this.middlewares();
    }
    /**
     * Método encargado de inicializar los middlewares
     */
    middlewares() {
        this.app.use(express_1.default.json());
        this.app.use((0, morgan_1.default)('dev'));
        this.app.use((0, cors_1.default)());
    }
    /**
     * Método encargado de inicializar el servidor
     */
    listen() {
        this.app.listen(this.port, () => {
            console.log();
        });
    }
}
exports.Server = Server;
