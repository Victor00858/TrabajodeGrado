import Meteorology from "../models/meteorologies";


export class MeteorologiesService{

    public static async getMetorologies()
    {
        try {
            const data = await Meteorology.findAll(                {
                attributes:['month','I','tmax','tmin']
            });

            return data;
        } catch (error) {
            throw new Error('Error en la consulta');
        }
    }
}