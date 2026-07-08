import { Sequelize  } from "sequelize-typescript";
import config from "../environments/environments";

console.log(['/app/dist/models']);
/**Instancia de objeto de conexión de sequelize */
export const sequelize = new Sequelize(
    config.DATABASE_CONFIG.DB_NAME!,
    config.DATABASE_CONFIG.DB_USER_ROOT!,
    config.DATABASE_CONFIG.DB_USER_ROOT_PASSOWRD!,
    {
        host:config.DATABASE_CONFIG!.DB_HOST,
        port: Number(config.DATABASE_CONFIG!.DB_PORT),
        dialect:'mysql',
        models: ['/app/dist/models'],
        logging: false,
    }
);
