import { Column, Model, Table, CreatedAt, UpdatedAt, ForeignKey, DataType, BelongsTo } from 'sequelize-typescript';
import { IMeasurementData } from '../interfaces/measurements-data.interface';
import { Measurement } from './measurements';
import { Unit } from './unit.model';
import { ValueType } from './value-types.model';

@Table({
  tableName: 'measurement_data',
  modelName:'MeasurementData',
  underscored: true, // Indica que el nombre de la tabla y atributos deben convertirse a snakeCase:'MeasurementData'
})
export class MeasurementData extends Model<IMeasurementData> {
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  id!: number;

  @Column({
    type: DataType.INTEGER,
    allowNull: true,
  })
  value!: number;

  @CreatedAt
  @Column({
    type: DataType.DATE,
  })
  createdAt!: Date;

  @UpdatedAt
  @Column({
    type: DataType.DATE,
  })
  updatedAt!: Date;

  @ForeignKey(() => ValueType)
  @Column({
    type: DataType.INTEGER,
    allowNull: true,
  })
  valueTypesId!: number;

  @ForeignKey(() => Measurement)
  @Column({
    type: DataType.INTEGER,
    allowNull: true,
  })
  measurementsId!: number;

  @ForeignKey(() => Unit)
  @Column({
    type: DataType.INTEGER,
    allowNull: true,
  })
  unitsId!: number;

  @BelongsTo(() => Unit)
  unit!: Unit;


  @BelongsTo(() => ValueType)
  valueType!: ValueType;

}





export default MeasurementData;