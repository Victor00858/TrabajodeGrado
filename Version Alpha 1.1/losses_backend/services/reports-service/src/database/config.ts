import {JSONStorage} from "node-localstorage"
import {readFileSync} from "fs";


/**
 * Clase encargada de cachear los servicios de IA en local
 */
export class JSONLocalStorageService{
    
    /**atributo encargado de instanciar un almacenador local de objetos clave valor */
    private localStorage:JSONStorage;

    constructor(){

        /**Instancia de localStorage. */
        this.localStorage = new JSONStorage('./dist/database/reports')
    }

    /**
     * Método encargado de guardar un objeto clave valor
     * @param data objeto JSON requerido para almacenar
     * @param fileName nombre del archivo generado
     */
    public async saveObject(fileName:string, data:any):Promise<void>{
        try {

            /**escritura del archivo json */
            this.localStorage.setItem(`${fileName}.json`, data)
            
        } catch (error) {

            throw new Error('No se pudo guardar')
        }
    }

    /**
     * Método encargado de cargar un objeto clave valor
     * @param fileName nombre del archivo a cargar
     */
    public async getObject(fileName:string):Promise<any>{
        try {
            
            const file = readFileSync(`./dist/database/reports/${fileName}.json`).toString();
            const resp = JSON.parse(file);
            
            return resp;

        } catch (error) {
            
            throw new Error('No se pudo guardar')        }
    }


}


const localDB = new JSONLocalStorageService();

export default localDB;