import { Router } from "express";
import { LossesController } from "../controllers/losses.controller";


const lossesCOntroller = new LossesController();

const routerLosses = Router();

routerLosses .post('/save-losses-percent-error',lossesCOntroller.saveLossesPercentError )


export default routerLosses ;