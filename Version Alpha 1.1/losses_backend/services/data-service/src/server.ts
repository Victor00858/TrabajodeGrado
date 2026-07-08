
import express,{Application} from "express";
import morgan from "morgan";
import cors from "cors";
import config from "./environments/environments";
import { sequelize } from "./database/config";
import router from "./routers/data.routers";

/**
 * Clase encargada de abstraer la capa del servidor REST API
 */
export class Server 
{

    /**Atributo encargado de almacenar el puerto de ejecución de la REST API */
    private readonly _port!:string;

    /**Atributo encargado de definir la ruta principal de la API */
    private readonly _baseUrl:string = config.SERVER_CONFIG!.URL_BASE;

    /**Aplicación de express */
    private _app!:Application;

    constructor()
    {
        /**Definición del puerto de ejecución del servidor REST API */
        this._port = config.SERVER_CONFIG.PORT;
        
        /**Instancia de express */
        this._app = express();

        /**Realiza la conexión a la base de datos */
        this.dbConnection();

        /**Inicialización de los middlewares del servidor */
        this.middlewares();

        /**Inicialización de las rutas */
        this.routes();

    }

    /**
     * Método encargado de inicializar los middlewares
     */
    private middlewares():void
    {
        /**Implementación de paso de objetos JSON */
        this._app.use( express.json() );
        
        /**Implementación de  morgan*/
        this._app.use( morgan('dev') );
        
        /**Implementación de Cors */
        this._app.use( cors() );

    }


    /**
     * Método encargado de inicializar el servidor
     */
    public listen():void
    {
        this._app.listen(this._port, ()=>
        {
            if(config.ENVIRONMENT == "local")
            {
                console.log(`Server online in http://localhost:${this._port}/${this._baseUrl}, environment: ${config.ENVIRONMENT}`)
            }

        })
    }

    private routes()
    {
        console.log('Cargue de las rutas');
        this._app.use(this._baseUrl, router);
    }

    /**Método encargado de realizar la conexión a la base de datos */
    private async dbConnection()
    {
        try {
            await sequelize.authenticate();
            console.log(`\nConnected to Database: ${sequelize.getDatabaseName()}. dialect: ${sequelize.getDialect()}`);
        } catch (error) {
            console.error(`Unable to connect to the database ${error}`);
        }
    }
}