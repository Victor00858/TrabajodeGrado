import { Column, Table, Model, CreatedAt, UpdatedAt, DataType, ForeignKey, HasMany } from 'sequelize-typescript';
import Measurement from './measurements';

@Table({ tableName: 'tanks' })
export class Tank extends Model<Tank> {

  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  })
  id!: number;

  @Column({
    type: DataType.STRING(100),
    allowNull: true,
  })
  name!: string;

  @Column({
    type: DataType.STRING(100),
    allowNull: true,
  })
  cp!: string;

  @Column({
    type: DataType.BOOLEAN,
    allowNull: true,
  })
  isolated!: boolean;

  @Column({
    type: DataType.STRING(100),
    allowNull: true,
  })
  ep!: string;

  @Column({
    type: DataType.DOUBLE,
    allowNull: true,
  })
  sr!: number;

  @Column({
    type: DataType.DOUBLE,
    allowNull: true,
  })
  d!: number;

  @Column({
    type: DataType.BOOLEAN,
    allowNull: false,
    defaultValue: false,
  })
  pr!: boolean;

  @Column({
    type: DataType.BOOLEAN,
    allowNull: true,
  })
  ge!: boolean;

  @Column({
    type: DataType.DECIMAL,
    allowNull: true,
  })
  hnx!: number;

  @Column({
    type: DataType.DECIMAL,
    allowNull: true,
  })
  hnn!: number;

  @Column({
    type: DataType.DECIMAL,
    allowNull: true,
  })
  hs!: number;

  @Column({
    type: DataType.DECIMAL,
    allowNull: true,
  })
  alfa!: number;

  @Column({
    type: DataType.DECIMAL,
    allowNull: true,
  })
  hro!: number;

  @Column({
    type: DataType.BOOLEAN,
    allowNull: false,
    defaultValue: false,
  })
  tc!: boolean;

  @CreatedAt
  created_at!: Date;

  @UpdatedAt
  updated_at!: Date;

  @HasMany(() => Measurement)
  /** Lista de productos asociados a la marca. */
  measurements?: Measurement[];
}

export default Tank;