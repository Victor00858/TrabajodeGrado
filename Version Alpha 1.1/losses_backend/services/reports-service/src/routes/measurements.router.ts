import { Router } from "express";
import { MeasurementsController } from "../controllers/measurements.controller";


const measurementsController = new MeasurementsController();

const routerMeasurements = Router();

routerMeasurements.post('/save-measurements-per-hour',measurementsController.postMeasurementsPerMinute )
routerMeasurements.post('/save-lt-measurements',measurementsController.postLtMeasurement )
routerMeasurements.post('/save-tla-measurements',measurementsController.postTlaMeasurement )
routerMeasurements.post('/save-pva-measurements',measurementsController.postPvaMeasurement )
routerMeasurements.post('/save-taa-measurements',measurementsController.postTaaMeasurement )
routerMeasurements.post('/save-hl-measurements',measurementsController.postHlMeasurement )
routerMeasurements.post('/save-tb-measurements',measurementsController.postTbMeasurement )


export default routerMeasurements;