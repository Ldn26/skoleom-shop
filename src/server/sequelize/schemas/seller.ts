// const { DataTypes } = require("sequelize");
// const sequelize = require("../config");
// const User = require("./user");

// const Seller = sequelize.define(
//   "Seller",
//   {
//     id: {
//       type: DataTypes.INTEGER,
//       primaryKey: true,
//       autoIncrement: true,
//     },
//    wpUserId: {
//       type: DataTypes.INTEGER,
//       allowNull: true,
//       unique: true,
//     },
//     userId: {
//       type: DataTypes.INTEGER,
//       allowNull: false,
//       unique: true,
//       references: {
//         model: User,
//         key: "id",
//       },
//     },
//   },
//   {
//     tableName: "sellers",
//     timestamps: true,
//   }
// );

// User.hasOne(Seller, { foreignKey: "userId", as: "seller" });
// Seller.belongsTo(User, { foreignKey: "userId", as: "user" });

// module.exports = Seller;

import {
  DataTypes,
  Model,
  InferAttributes,
  InferCreationAttributes,
  CreationOptional,
  ForeignKey,
} from "sequelize";
import sequelize from "../config";
import User from "./user";

export interface SellerModel
  extends Model<InferAttributes<SellerModel>, InferCreationAttributes<SellerModel>> {
  id: CreationOptional<number>;
  wpUserId?: number | null;
  userId: ForeignKey<number>;
  createdAt?: CreationOptional<Date>;
  updatedAt?: CreationOptional<Date>;
}

export const Seller = sequelize.define<SellerModel>(
  "Seller",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    wpUserId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      unique: true,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: true,
      references: {
        model: User,
        key: "id",
      },
    },
  },
  {
    tableName: "sellers",
    timestamps: true,
  }
);

User.hasOne(Seller, { foreignKey: "userId", as: "seller" });
Seller.belongsTo(User, { foreignKey: "userId", as: "user" });

export default Seller;