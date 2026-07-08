import { Model, Column, DataType, Table, ForeignKey, BelongsTo, CreatedAt, UpdatedAt, HasMany } from 'sequelize-typescript';
import Tank from './tanks.model';

@Table({
  tableName: 'losses_oil_gas', // Nombre de la tabla en la base de datos
  modelName: 'LossesOilGas', // Nombre del modelo en Sequelize
  timestamps: true, // Indicar si se deben incluir timestamps en el modelo
  underscored: true, // Indicar si los nombres de las columnas en la base de datos deben ser en minúsculas con guiones bajos
})
class LossesOilGas extends Model<ILossesOilGas> {
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  })
  public id!: number;

  @Column({
    type: DataType.DATE,
    allowNull: false,
  })
  public date!: Date;

  @Column({
    type: DataType.DECIMAL(10, 6),
    allowNull: false,
  })
  public lt_oil_gas!: number;

  @Column({
    type: DataType.DECIMAL(10, 6),
    allowNull: false,
  })
  public tla_oil_gas!: number;

  @Column({
    type: DataType.DECIMAL(10, 6),
    allowNull: false,
  })
  public tb_oil_gas!: number;

  @Column({
    type: DataType.DECIMAL(10, 6),
    allowNull: false,
  })
  public hl_oil_gas!: number;

  @Column({
    type: DataType.DECIMAL(10, 6),
    allowNull: false,
  })
  public pva_oil_gas!: number;

  @Column({
    type: DataType.DECIMAL(10, 6),
    allowNull: false,
  })
  public taa_oil_gas!: number;

  @CreatedAt
  @Column({
    type: DataType.DATE,
    allowNull: false,
  })
  public created_at!: Date;

  @UpdatedAt
  @Column({
    type: DataType.DATE,
    allowNull: true,
  })
  public updated_at?: Date;

  @ForeignKey(() => Tank)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  public tanks_id!: number;

  @BelongsTo(() => Tank)
  public tank!: Tank;
  // Configurar las relaciones con otros modelos si es necesario
}

export default LossesOilGas;