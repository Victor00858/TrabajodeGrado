"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const losses_controller_1 = require("../controllers/losses.controller");
const lossesCOntroller = new losses_controller_1.LossesController();
const routerLosses = (0, express_1.Router)();
routerLosses.post('/save-losses-percent-error', lossesCOntroller.saveLossesPercentError);
exports.default = routerLosses;
