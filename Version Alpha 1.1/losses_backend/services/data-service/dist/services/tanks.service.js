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
exports.TankService = void 0;
const tanks_model_1 = __importDefault(require("../models/tanks.model"));
class TankService {
    static getTanks() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const data = yield tanks_model_1.default.findAll({
                    attributes: ['id', 'name', ['isolated', 'isIsolated'], ['d', 'diameter'], ['hro', 'spaceTank'], ['alfa', 'alpha'], ['hs', 'tankHeight'], ['hnx', 'hlx'], ['hnn', 'hln'], 'pr', 'ge', 'tc', 'hro', 'hs']
                });
                return data;
            }
            catch (error) {
                throw new Error('No se encontraron datos');
            }
        });
    }
}
exports.TankService = TankService;
