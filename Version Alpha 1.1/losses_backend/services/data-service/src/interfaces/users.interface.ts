export interface IUser
{

    /**Identificador del usuario */
    id:number;

    /**Nombre de usuario */
    userName?:string;

    /**Contraseña del usuario */
    password?:string;

    /**Fecha de creación del usuario */
    createdAt?:Date;

    /**Fecha de actualización del usuario */
    updatedAt?:Date;

}