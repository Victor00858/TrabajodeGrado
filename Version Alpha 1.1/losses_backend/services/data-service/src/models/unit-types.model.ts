import { Table, Column, Model, CreatedAt, UpdatedAt, DataType } from 'sequelize-typescript';
import { IUnitType } from '../interfaces/unit-types.interface';

@Table({ tableName: 'unit_types' })
export class UnitType extends Model<IUnitType> {
  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  })
  id!: number;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  name!: string;

  @CreatedAt
  @Column({
    type: DataType.DATE,
    field: 'created_at',
  })
  created_at!: Date;

  @UpdatedAt
  @Column({
    type: DataType.DATE,
    field: 'updated_at',
  })
  updated_at!: Date;
}

export default UnitType;