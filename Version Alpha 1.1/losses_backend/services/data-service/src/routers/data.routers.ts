import { Router } from "express";
import { DataController } from "../controllers/data.controllers";
import { TankController } from '../controllers/tanks.controller';
import { MeteorologiesController } from '../controllers/meteorologies.controller';
import { OilGasController } from "../controllers/oil-gas.controller";
import { MeasurementController } from "../controllers/measurements.controller";

const router = Router();
const dataController = new DataController();
const tankController = new TankController();
const meteorologiesController = new MeteorologiesController()
const oilGasController = new OilGasController();
const measurementController = new MeasurementController();

router.get('/get-measurements-per-minute-by-tank/:id', measurementController.getMeasurementsPerMinuteByTank)
router.get('/get-measurements-per-minute',dataController.getMeasurementsPerMinute);
router.get('/get-meteorologies', meteorologiesController.getMeteorologies)
router.get('/get-tanks', tankController.getTanks)
router.get('/get-oil-gas/:id', oilGasController.getOilGas)


export default router;