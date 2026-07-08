import { JWTGenerator } from "../helpers/jwt-generator";
import { LoginValidators } from "../helpers/login.validators";
import { ILoginService } from "../interfaces/login.service.interface";
import { IUser } from "../interfaces/users.interface";
import { User } from "../models/users.model";

/**
 * Clase encargada de gestionar los servicios de Login
 */
export class LoginService implements ILoginService<IUser>{

    /**
     * Método encargado de realizar la autenticación por
     * @param userName Nombre de usuario digitado por el usuario
     * @param password Contraseña digitada por el usuario
     */
    public static async getLoginWithUserName(userName: string, password: string){

        /**Busca en base de datos el objeto */
        const user = await User.findOne({where:{userName:userName}});

        /**Pregunta si la contraseña es válida */
        const isValidPassword = LoginValidators.isValidPassword(password, user!.password);

        /**Verifica si la contraseña es correcta para generar el token */
        if(isValidPassword){

            const token = await JWTGenerator.GenerateJWT(user);

            return {
                user,
                token
            }
        }
        return 
    }
}