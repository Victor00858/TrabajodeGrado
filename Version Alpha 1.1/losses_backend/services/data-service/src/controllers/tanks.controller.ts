import { Request, Response } from "express"
import { TankService } from "../services/tanks.service"
/**
 * Clase encargada de entregar controladores de la entidad Tanque
 */
export class TankController{

    public async getTanks(req:Request, res:Response)
    {
        try {
            
            const data = await TankService.getTanks();

            return res.status(200).json(
                {
                    ok:true,
                    message:'Consulta exitosa',
                    data
                }
            );

        } catch (error) {
            
            return res.status(500).json({
                ok:false,
                message:'Error de conexión al servidor'
            })
        }
    }
}