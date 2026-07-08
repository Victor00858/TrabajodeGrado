import { Model, Column, Table, DataType, UpdatedAt,CreatedAt} from 'sequelize-typescript';
import { IMeteorology } from '../interfaces/meteorologies.interface';

@Table({ tableName: 'meteorologies' })
export class Meteorology extends Model<IMeteorology> {
    @Column({ type: DataType.INTEGER, primaryKey: true, autoIncrement: true })
    id!: number;

    @Column({ type: DataType.STRING, allowNull: false })
    month!: string;

    @Column({ type: DataType.DECIMAL, allowNull: false })
    I!: number;

    @Column({ type: DataType.DECIMAL, allowNull: false })
    tmax!: number;

    @Column({ type: DataType.DECIMAL, allowNull: false })
    tmin!: number;

    @CreatedAt
    @Column({ type: DataType.DATE, allowNull: false })
    created_at!: Date;
    
    @UpdatedAt
    @Column({ type: DataType.DATE })
    updated_at?: Date;
}

export default Meteorology;