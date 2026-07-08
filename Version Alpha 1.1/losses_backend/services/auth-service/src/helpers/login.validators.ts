import bcryptjs from "bcryptjs"

/**
 * Clase encargada de proporcionar herramientas de validación
 */
export class LoginValidators{

    /**
     * Método encargado de verificar la contraseña
     * @param passwordIn 
     * @param passwordTruth 
     * @returns un boleano con true si la contraseña es correcta, de lo contrario, retorna false
     */
    public static isValidPassword(passwordIn:string, passwordTruth:string):Boolean
    {
        return bcryptjs.compareSync(passwordTruth, passwordIn);
    }
}