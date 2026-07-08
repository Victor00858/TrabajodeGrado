import { Request, Response } from "express";
import localDB from "../database/config";
import { DateFunction } from "../helpers/dateFunctions";

export class MeasurementsController{

    constructor(){}

    public async postMeasurementsPerMinute(req:Request, res:Response)
    {
        try {
            
            const data = req.body;

            console.log(data)
            
            await localDB.saveObject(`measurementsPerMinute`, data);

            return res.status(201).json({
                ok:true,
                status:201,
                message:'Almacenado correctamente'
            })
            
        } catch (error) {
            return res.status(500).json({
                ok:false,
                message:'Error de conexión al servidor'
            })
        }
    }

    public async postTbMeasurement(req:Request, res:Response)
    {
        try {
            
            const data = req.body;
            const tankId = data[0]["tanks_id"]

            console.log(data)
            
            await localDB.saveObject(`tb-measurements-${tankId}`, data);

            return res.status(201).json({
                ok:true,
                status:201,
                message:'Almacenado correctamente'
            })
            
        } catch (error) {
            return res.status(500).json({
                ok:false,
                message:'Error de conexión al servidor'
            })
        }
    }

    public async postTaaMeasurement(req:Request, res:Response)
    {
        try {
            
            const data = req.body;
            const tankId = data[0]["tanks_id"]

            console.log(data)
            
            await localDB.saveObject(`taa-measurements-${tankId}`, data);

            return res.status(201).json({
                ok:true,
                status:201,
                message:'Almacenado correctamente'
            })
            
        } catch (error) {
            return res.status(500).json({
                ok:false,
                message:'Error de conexión al servidor'
            })
        }
    }

    public async postPvaMeasurement(req:Request, res:Response)
    {
        try {
            
            const data = req.body;
            const tankId = data[0]["tanks_id"]

            console.log(data)
            
            await localDB.saveObject(`pva-measurements-${tankId}`, data);

            return res.status(201).json({
                ok:true,
                status:201,
                message:'Almacenado correctamente'
            })
            
        } catch (error) {
            return res.status(500).json({
                ok:false,
                message:'Error de conexión al servidor'
            })
        }
    }

    public async postLtMeasurement(req:Request, res:Response)
    {
        try {
            
            const data = req.body;
            const tankId = data[0]["tanks_id"]

            console.log(data)
            
            await localDB.saveObject(`lt-measurements-${tankId}`, data);

            return res.status(201).json({
                ok:true,
                status:201,
                message:'Almacenado correctamente'
            })
            
        } catch (error) {

            console.log(error);

            return res.status(500).json({
                ok:false,
                message:'Error de conexión al servidor'
            })
        }
    }

    public async postHlMeasurement(req:Request, res:Response)
    {
        try {
            
            const data = req.body;

            const tankId = data[0]["tanks_id"]
            
            await localDB.saveObject(`hl-measurements-${tankId}`, data);

            return res.status(201).json({
                ok:true,
                status:201,
                message:'Almacenado correctamente'
            })
            
        } catch (error) {
            return res.status(500).json({
                ok:false,
                message:'Error de conexión al servidor'
            })
        }
    }

    public async postTlaMeasurement(req:Request, res:Response)
    {
        try {
            
            const data = req.body;
            const tankId = data[0]["tanks_id"]

            await localDB.saveObject(`tla-measurements-${tankId}`, data);

            return res.status(201).json({
                ok:true,
                status:201,
                message:'Almacenado correctamente'
            })
            
        } catch (error) {
            return res.status(500).json({
                ok:false,
                message:'Error de conexión al servidor'
            })
        }
    }
}