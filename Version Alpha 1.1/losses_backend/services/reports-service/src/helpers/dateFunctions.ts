import moment from 'moment'; // Importar Moment.js


export class DateFunction{

    public static generateDateNow()
    {
        const fechaActual = moment();

        // Formatear la fecha y hora en string con el formato AAAA-MM-DD HH:MM:SS
        const fechaFormateada = fechaActual.format('YYYY-MM-DD-HH-mm-ss').toString();
        
        return fechaFormateada
   
    }

}