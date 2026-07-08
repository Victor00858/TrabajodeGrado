
import { Request, Response } from "express";

export class LossesController{

    
    public async saveMeasurementsPerHour(req:Request, res:Response){
        try {

            const data = req.body;

            return res.status(201).json({
                ok:true,
                status:201,
                data
            })
            
        } catch (error) {
            return res.status(500).json({
                ok:false,
                message:'Error de conexión al servidor'
            })        
        }
    }


    public async saveLossesPercentError(req:Request, res:Response){
        try {
            
            const data = req.body;
            
            return res.status(201).json({
                ok:true,
                status:201
            })
        } catch (error) {
            return res.status(500).json({
                ok:false,
                message:'Error de conexión al servidor'
            })                
        }
    }

}