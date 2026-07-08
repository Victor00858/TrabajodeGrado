import { Request, Response } from "express";
import { MeasurementService } from "../services/measurements.service";


export class MeasurementController{

    constructor(){}

    public async getMeasurementsPerMinuteByTank(req:Request, res:Response)
    {
        try {
            const { id } = req.params;
            const data = await MeasurementService.getMeasurementsPerMinuteByTank(Number(id));
            
            return res.status(200).json({
                ok:true,
                message:'consulta exitosa',
                data
            });
        
        } catch (error) {
            
            return res.status(500).json({
                ok:false,
                message:'Error con el servidor'
            })
        }
    }
}