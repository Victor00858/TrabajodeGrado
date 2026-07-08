
import {
    Table,
    Column,
    Model,
    DataType,
    CreatedAt,
    UpdatedAt,
} from "sequelize-typescript";
import { IValueType } from "../interfaces/value-types.interface";

@Table({ tableName: "value_types" })
export class ValueType extends Model<ValueType> implements IValueType {
    @Column({ type: DataType.INTEGER, allowNull: false, primaryKey: true })
    id!: number;

    @Column({ type: DataType.STRING, allowNull: true })
    name?: string;

    @CreatedAt
    @Column({ type: DataType.DATE, allowNull: false, field: "created_at" })
    created_at!: Date;

    @UpdatedAt
    @Column({ type: DataType.DATE, allowNull: true, field: "updated_at" })
    updated_at?: Date;
}

export default ValueType;