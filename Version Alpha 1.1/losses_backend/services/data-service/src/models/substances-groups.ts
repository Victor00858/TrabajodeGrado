import { 
  Column, 
  Table, 
  Model, 
  CreatedAt, 
  UpdatedAt, 
  DataType } from 'sequelize-typescript';

@Table
export class SubstanceGroup extends Model<SubstanceGroup> {

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
  createdAt!: Date;

  @UpdatedAt
  updatedAt!: Date;

}

export default SubstanceGroup;