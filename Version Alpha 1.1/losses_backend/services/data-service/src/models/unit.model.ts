import { Table, Column, Model, CreatedAt, UpdatedAt, ForeignKey, DataType, HasMany } from 'sequelize-typescript';
import { IUnit } from '../interfaces/unit-interface';
import MeasurementData from './measurement_data';
import { UnitType } from './unit-types.model';

@Table({ tableName: 'units' })
export class Unit extends Model<IUnit> {
  
  @Column(
    { 
      type:DataType.INTEGER,
      primaryKey: true, 
      autoIncrement: true ,
      allowNull:false
  })
  id!: number;

  @Column({ 
    type:DataType.STRING,
    allowNull: false 
  })
  name!: string;

  @Column({ 
    type:DataType.STRING,
    allowNull: false 
  })
  symbol!: string;

  @CreatedAt
  created_at!: Date;

  @UpdatedAt
  updated_at!: Date;

  @ForeignKey(() => UnitType)
  @Column(DataType.INTEGER)
  unit_types_id!: number;


  @HasMany(() =>  MeasurementData)
  /** Lista de productos asociados a la marca. */
  measurementData?: MeasurementData[];

}

export default Unit;