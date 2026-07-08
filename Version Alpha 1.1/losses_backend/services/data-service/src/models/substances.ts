import { Model, Table, Column, ForeignKey, HasMany, PrimaryKey, DataType, CreatedAt, UpdatedAt, BelongsTo } from 'sequelize-typescript';
import { ISubstance } from '../interfaces/substances.interface';
import Measurement from './measurements';
import SubstanceGroup from './substances-groups';
import Unit from './unit.model';

@Table({ 
  tableName: 'substances', 
  underscored:true,
  modelName:'Substance'
 })
export class Substance extends Model<ISubstance> {
  // Spread operator for id field
  @Column(
    { primaryKey: true, 
      autoIncrement: true , 
      allowNull:false, 
      type:DataType.INTEGER
    })
  id!: number;

  // Spread operator for name field
  @Column({ 
    field:'name', 
    type:DataType.STRING
  })
  name!: string;

  // Spread operator for A field
  @Column({ 
    type:DataType.FLOAT,
    allowNull:false
  })
  A!: number;

  // Spread operator for B field
  @Column({ 
    type:DataType.FLOAT,
    allowNull:false
  })
  B!: number;

  // Spread operator for pm_vapor field
  @Column({ 
    type:DataType.FLOAT,
    allowNull:false
  })
  pmVapor!: number;

  // Spread operator for pm_liquid field
  @Column({ 
    type:DataType.FLOAT 
  })
  pmLiquid!: number;

  // Spread operator for Kc field
  @Column({ 
    type:DataType.FLOAT
  })
  Kc!: number;

  // Spread operator for created_at field
  @CreatedAt
  @Column({ 
    type:DataType.DATE 
  })
  createdAt!: Date;

  // Spread operator for updated_at field
  @UpdatedAt
  @Column({ 
    type:DataType.DATE 
  })
  updatedAt!: Date;

  // Spread operator for substance_groups_id field
  @ForeignKey(() => SubstanceGroup)
  @Column({ type:DataType.INTEGER })
  substanceGroupsId!: number;

  @HasMany(() => Measurement)
  measurements!: Measurement[];
}
export default Substance;