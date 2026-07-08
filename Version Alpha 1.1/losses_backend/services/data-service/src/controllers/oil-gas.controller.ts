import { Request, Response } from "express";
import { OilGasService } from "../services/oil-gas.service";

export class OilGasController{


    public async getOilGas(req:Request, res:Response){
        try {
            
            const {id} = req.params;
            const {start_date='2023-02-26', end_date='2023-03-30'} = req.body;
            
            const data = await OilGasService.getOilGasService(Number(id),start_date, end_date);

            return res.status(200).json({
                ok:true,
                message:'Consulta exitosa',
                data
            })
            
        } catch (error) {
            return res.status(500).json({
                ok:false,
                message:'Error de conexión al servidor'
            })        
        }
    }
}