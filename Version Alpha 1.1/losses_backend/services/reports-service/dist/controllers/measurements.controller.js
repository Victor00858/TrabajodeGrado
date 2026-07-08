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
exports.MeasurementsController = void 0;
const config_1 = __importDefault(require("../database/config"));
class MeasurementsController {
    constructor() { }
    postMeasurementsPerMinute(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const data = req.body;
                console.log(data);
                yield config_1.default.saveObject(`measurementsPerMinute`, data);
                return res.status(201).json({
                    ok: true,
                    status: 201,
                    message: 'Almacenado correctamente'
                });
            }
            catch (error) {
                return res.status(500).json({
                    ok: false,
                    message: 'Error de conexión al servidor'
                });
            }
        });
    }
    postTbMeasurement(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const data = req.body;
                const tankId = data[0]["tanks_id"];
                console.log(data);
                yield config_1.default.saveObject(`tb-measurements-${tankId}`, data);
                return res.status(201).json({
                    ok: true,
                    status: 201,
                    message: 'Almacenado correctamente'
                });
            }
            catch (error) {
                return res.status(500).json({
                    ok: false,
                    message: 'Error de conexión al servidor'
                });
            }
        });
    }
    postTaaMeasurement(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const data = req.body;
                const tankId = data[0]["tanks_id"];
                console.log(data);
                yield config_1.default.saveObject(`taa-measurements-${tankId}`, data);
                return res.status(201).json({
                    ok: true,
                    status: 201,
                    message: 'Almacenado correctamente'
                });
            }
            catch (error) {
                return res.status(500).json({
                    ok: false,
                    message: 'Error de conexión al servidor'
                });
            }
        });
    }
    postPvaMeasurement(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const data = req.body;
                const tankId = data[0]["tanks_id"];
                console.log(data);
                yield config_1.default.saveObject(`pva-measurements-${tankId}`, data);
                return res.status(201).json({
                    ok: true,
                    status: 201,
                    message: 'Almacenado correctamente'
                });
            }
            catch (error) {
                return res.status(500).json({
                    ok: false,
                    message: 'Error de conexión al servidor'
                });
            }
        });
    }
    postLtMeasurement(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const data = req.body;
                const tankId = data[0]["tanks_id"];
                console.log(data);
                yield config_1.default.saveObject(`lt-measurements-${tankId}`, data);
                return res.status(201).json({
                    ok: true,
                    status: 201,
                    message: 'Almacenado correctamente'
                });
            }
            catch (error) {
                console.log(error);
                return res.status(500).json({
                    ok: false,
                    message: 'Error de conexión al servidor'
                });
            }
        });
    }
    postHlMeasurement(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const data = req.body;
                const tankId = data[0]["tanks_id"];
                yield config_1.default.saveObject(`hl-measurements-${tankId}`, data);
                return res.status(201).json({
                    ok: true,
                    status: 201,
                    message: 'Almacenado correctamente'
                });
            }
            catch (error) {
                return res.status(500).json({
                    ok: false,
                    message: 'Error de conexión al servidor'
                });
            }
        });
    }
    postTlaMeasurement(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const data = req.body;
                const tankId = data[0]["tanks_id"];
                yield config_1.default.saveObject(`tla-measurements-${tankId}`, data);
                return res.status(201).json({
                    ok: true,
                    status: 201,
                    message: 'Almacenado correctamente'
                });
            }
            catch (error) {
                return res.status(500).json({
                    ok: false,
                    message: 'Error de conexión al servidor'
                });
            }
        });
    }
}
exports.MeasurementsController = MeasurementsController;
