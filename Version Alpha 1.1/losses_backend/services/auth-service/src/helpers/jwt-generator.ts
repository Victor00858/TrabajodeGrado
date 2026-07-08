import jwt from "jsonwebtoken";
import config from "../environments/environments";

/**
 * Clase encargada de generar un JWT
 */
export class JWTGenerator{

    /**
     * Método encargado de generar un token de JWT
     * @param payload Objeto de datos que se desea encapsular
     * @returns retorna un token
     */
    public static GenerateJWT(payload:any)
    {
        return new Promise((resolver, reject)=>{

            jwt.sign(payload, config.SERVER_CONFIG.SECRET_KEY ,{
                expiresIn:'2h',
            }, (err, token)=>{
                if(err){
                    reject('No se pudo generar el token')
                }else{
                    resolver(token);
                }
            })
        })
    }
}