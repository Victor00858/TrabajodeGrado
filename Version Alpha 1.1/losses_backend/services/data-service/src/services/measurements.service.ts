import { sequelize } from '../database/config';
import MeasurementData from '../models/measurement_data';
import Measurement from '../models/measurements';
import Substance from '../models/substances';
import Unit from '../models/unit.model';
import ValueType from '../models/value-types.model';


export class MeasurementService{

    public static async getMeasurementsPerMinute(){
        
        try {
            const data = await Measurement.findAll({

                attributes:['id',
                [sequelize.literal("DATE_FORMAT(date, '%d-%m-%Y %H:%i:%s')"), 'date']],
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
                    }
                ]
            })

            return data;
            
        } catch (error) {
            
            throw new Error('Error en la consulta');
        }
    }

    public static async getMeasurementsPerMinuteByTank(id:number){
        try {
            const data = await Measurement.findAll({
                attributes:['id',
                [sequelize.literal("DATE_FORMAT(date, '%d-%m-%Y %H:%i:%s')"), 'date']],
                where:{
                    'tanksId':id
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
                    }
                ]
            })
            return data;

        } catch (error) {
            throw new Error('Error en la consulta');
        }
    }
}