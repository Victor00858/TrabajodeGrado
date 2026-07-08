import {Request, Response} from "express";
import { Measurement } from "../models/measurements";
import MeasurementData from "../models/measurement_data";
import Unit from "../models/unit.model";
import Substance from '../models/substances';
import Tank from "../models/tanks.model";
import ValueType from "../models/value-types.model";
import { sequelize } from "../database/config";

/**
 * Controlador encagargado de suministrar información de datos
 */
export class DataController
{
    /**
     * Controlador encargado de traer los datoss
     * @param req 
     * @param res 
     */
    public async getMeasurementsPerMinute(req:Request, res:Response)
    {
        try {

           const measurements = await Measurement.findAll({

            attributes:['id',
            [sequelize.literal("DATE_FORMAT(date, '%d-%m-%Y %H:%i:%s')"), 'date']],
            where:{
                'tanksId':2
            },
            include:[
                {
                    model:MeasurementData,
                    attributes:['value'],
                    include:[
                        {
                            model:Unit,
                            attributes:['name','symbol']
                        },
                        {
                            model:ValueType,
                            attributes:['name']
                        }
                    ]
                },
                {
                    model:Substance,
                    attributes:['name','pmLiquid', 'pmVapor','a','b','kc']
                },
                {
                    model:Tank,
                    attributes:['name',['isolated','isIsolated'],['d','diameter'],['hro','spaceTank'],'alfa',['hs','tankHeight'],['hnx','hlx'],['hnn','hln'], 'pr', 'ge','tc','hro','hs']
                }
            ]
           })

            return res.status(200).json(
                {
                    ok:true,
                    message:'consulta exitosa',
                    measurements
                })
            
        } catch (error) {
            return res.status(500).json({
                ok:false,
                message: error
            })
        }
    }
}