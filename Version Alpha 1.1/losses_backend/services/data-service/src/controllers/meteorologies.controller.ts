import { Request, Response } from "express";

import { MeteorologiesService } from "../services/meteorologies.service";

export class MeteorologiesController{

    public async getMeteorologies(req:Request, res:Response)
    {
        try {
            const data = await MeteorologiesService.getMetorologies();

            return res.status(200).json({
                ok:true,
                message:"Consulta exitosa",
                data
            })

        } catch (error) {
            return res.status(500).json({
                ok:false,
                message:'Ha ocurrido un error'
            })
        }
    }

}