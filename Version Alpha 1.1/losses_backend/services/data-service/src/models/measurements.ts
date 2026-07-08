import {
    Model,
    Column,
    Table,
    CreatedAt,
    UpdatedAt,
    DataType,
    ForeignKey,
    HasMany,
    BelongsTo,
} from "sequelize-typescript";
import { IMeasurements } from "../interfaces/measurements.interface";
import MeasurementData from "./measurement_data";
import { Tank } from "./tanks.model";
import Substance from './substances';
import moment from "moment-timezone";


@Table({
    tableName: "measurements",
    modelName: "Measurement",
    underscored:true
})
export class Measurement extends Model<IMeasurements> {
    @Column({
        type: DataType.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    })
    id!: number;

    @Column({
        type: DataType.DATE,
        allowNull: false,
        // get(this){
        //     return moment.tz(this.getDataValue('date'),'America/Bogota').format('DD-MM-YYYY HH:mm:ss');
        // }  ,
    })
    date!: Date;

    @CreatedAt
    @Column({
        type: DataType.DATE,
        allowNull: false,
    })
    createdAt!: Date;

    
    @UpdatedAt
    @Column({
        type: DataType.DATE,
        allowNull: false,
    })
    updatedAt!: Date;

    @ForeignKey(() => Substance)
    @Column({
        type: DataType.INTEGER,
        allowNull: false,
    })
    substancesId!: number;


    @ForeignKey(() => Tank)
    @Column({
        type: DataType.INTEGER,
        allowNull: false,
    })
    tanksId!: number;

    @BelongsTo(() => Substance)
    substance!: Substance;

    @HasMany(() => MeasurementData)
    measurementData?: MeasurementData[];

    @BelongsTo(() => Tank)
    tank!: Tank;
}


export default Measurement;