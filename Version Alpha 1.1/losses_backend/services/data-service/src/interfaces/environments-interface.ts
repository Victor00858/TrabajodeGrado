
/**
 * Interfaz encargada de gestionar las variables de entorno
 */
export interface IEnvironment
{
    /**Variable de entorno que indica qué ambiente de ejecución se ejecuta */
    ENVIRONMENT?:string

    /**Objeto que contiene la lista de valores de conexión de REST API */
    SERVER_CONFIG:IServerConfig,

    /**Objeto que contiene la lista de valores de conexión a base de datos */
    DATABASE_CONFIG:IDataBaseConfig
}

/**Interfaz encargada de abstraer los miembros de un objeto literal de configuración de ambientes */
export interface IServerConfig
{
    /**Llave secreta para desencriptar un objeto JWT */
    SECRET_KEY:string;
    
    /**Puerto de ejecución de la REST API */
    AUTH_SERVICE_PORT?:string;

    /**Puerto de ejecución del servidor REST API */
    PORT:string

    /**URL */
    URL_BASE:string
}

/**Cuerpo de variables de configuración de credenciales de base de datos */
export interface IDataBaseConfig
{
    /**Credencial de nombre de usuario de administrador de base de datos */
    DB_USER_ROOT:string

    /**Credencial de contraseña del usuario adminsitrador de base de datos */
    DB_USER_ROOT_PASSOWRD:string

    /**TIpo de gestor de bae de datos */
    DIALECT_DB:string

    /**Dirección IP de conección al servidor de base de datos */
    DB_HOST:string;

    /**Puerto de ejecución del servidor de base de datos */
    DB_PORT:string;

    /**Nombre de la base de datos */
    DB_NAME:string
}