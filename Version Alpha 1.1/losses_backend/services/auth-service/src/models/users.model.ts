import 
{
    Table,
    Model,
    Column,
    DataType,
    Index,
    PrimaryKey

} from "sequelize-typescript";

import { IUser } from "../interfaces/users.interface";


@Table(
    {
        underscored: true,
        tableName:'users'
    }
)
export class User extends Model<IUser>{

    @Index
    @PrimaryKey
    @Column(
        {
            type:DataType.INTEGER,
            allowNull:false,
            autoIncrement:true
        }
    )
    id!: number;
    
    @Index
    @Column(
        {
            type: DataType.STRING,
            allowNull:false,
            unique:true
        }
    )
    public userName!:string;

    @Column(
        {
            type: DataType.STRING,
            allowNull:false,
        }
    )
    public password!:string;


}

