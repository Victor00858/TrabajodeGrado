import dotenv from "dotenv";
import { IEnvironment } from "./environments-interface";

dotenv.config();

const config:IEnvironment = {
    
    ENVIRONMENT:process.env.NODE_ENV,
    SERVER_CONFIG:{
        PORT:process.env.REPORTS_SERVICE_PORT || '8080',
        URL_BASE:"/api/v1/losses-report",
    }
}


export default config;