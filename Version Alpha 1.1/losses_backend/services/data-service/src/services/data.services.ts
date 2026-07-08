import { Measurement } from "../models/measurements";

/**
 * Servicio encargado de traer los datos
 */
export class DataService{

    /**
     * Método encargado de suministrar la información por minuto de los dato
     */
    public static async getMeasurementsPerMinute()
    {
        try {
            const measurements = await Measurement.findAll();
            
            return measurements;

        } catch (error) {
            throw new Error('No es posible tomar los datos');
        }
    }
}