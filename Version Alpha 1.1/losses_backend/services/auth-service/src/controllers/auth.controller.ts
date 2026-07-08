import {Request,Response} from "express";
import { LoginService } from "../services/login.services";


/**Controlador encargado de gestionar los controladores de autenticación */
export class AuthController
{

    /**
     * Método encargado de realizar la autenticación
     * @param req 
     * @param res 
     */
    public async login(req:Request, res:Response){
        try {
        
        /**Realiza la desestructuración de los datos */
        const {userName, password, ...data} = req.body;
        
        const dataResponse = await LoginService.getLoginWithUserName(userName, password);

        return res.status(201).json({
            ok:true,
            dataResponse
        })

        } catch (error) {
            
            return res.status(500).json({
                ok:false,
                message:'Error de conxión al servidor'
            })
        }
    }
}