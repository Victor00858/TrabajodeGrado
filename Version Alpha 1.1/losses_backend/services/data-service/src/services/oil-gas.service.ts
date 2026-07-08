import { sequelize } from "../database/config";
import LossesOilGas from "../models/losses-oil-gas";

import { Op } from "sequelize";

export class OilGasService{

    public static async getOilGasService(tankId:number,start_date:string, end_date:string)
    {
        try {
            
            const data = await LossesOilGas.findAll(
                {
                    where:{
                        '$date$':{
                            [Op.between]:[start_date, end_date]
                        },
                        '$tanks_id$':tankId
                    },
                    attributes:['id', 
                                [sequelize.literal("DATE_FORMAT(date, '%d-%m-%Y %H:%i:%s')"), 'date'], 
                                'lt_oil_gas', 'tla_oil_gas', 'tb_oil_gas', 'hl_oil_gas',
                    'pva_oil_gas', 'taa_oil_gas','tanks_id']
                }
            );

            return data;

        } catch (error) {
            throw('Error en la consulta');
        }
    }
}