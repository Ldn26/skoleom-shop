;

import {
  DataTypes,
  Model,
  InferAttributes,
  InferCreationAttributes,
  CreationOptional,
  ForeignKey,
} from 'sequelize';
import sequelize from '../config';
import User from './user';

export interface BuyerModel extends Model<
  InferAttributes<BuyerModel>,
  InferCreationAttributes<BuyerModel>
> {
  id: CreationOptional<number>;
  userId: ForeignKey<number>;
  createdAt?: CreationOptional<Date>;
  updatedAt?: CreationOptional<Date>;
}

export const Buyer = sequelize.define<BuyerModel>(
  'Buyer',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },

    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: true,
      references: {
        model: User,
        key: 'id',
      },
    },
  },
  {
    tableName: 'buyers',
    timestamps: true,
  },
);

User.hasOne(Buyer, { foreignKey: 'userId', as: 'buyer' });
Buyer.belongsTo(User, { foreignKey: 'userId', as: 'user' });

export default Buyer;
