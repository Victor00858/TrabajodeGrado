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
exports.JSONLocalStorageService = void 0;
const node_localstorage_1 = require("node-localstorage");
const fs_1 = require("fs");
/**
 * Clase encargada de cachear los servicios de IA en local
 */
class JSONLocalStorageService {
    constructor() {
        /**Instancia de localStorage. */
        this.localStorage = new node_localstorage_1.JSONStorage('./dist/database/reports');
    }
    /**
     * Método encargado de guardar un objeto clave valor
     * @param data objeto JSON requerido para almacenar
     * @param fileName nombre del archivo generado
     */
    saveObject(fileName, data) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                /**escritura del archivo json */
                this.localStorage.setItem(`${fileName}.json`, data);
            }
            catch (error) {
                throw new Error('No se pudo guardar');
            }
        });
    }
    /**
     * Método encargado de cargar un objeto clave valor
     * @param fileName nombre del archivo a cargar
     */
    getObject(fileName) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const file = (0, fs_1.readFileSync)(`./dist/database/reports/${fileName}.json`).toString();
                const resp = JSON.parse(file);
                return resp;
            }
            catch (error) {
                throw new Error('No se pudo guardar');
            }
        });
    }
}
exports.JSONLocalStorageService = JSONLocalStorageService;
const localDB = new JSONLocalStorageService();
exports.default = localDB;
