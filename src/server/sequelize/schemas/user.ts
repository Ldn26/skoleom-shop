// const { DataTypes } = require("sequelize");
// const sequelize = require("../config");

// const User = sequelize.define(
//   "User",
//   {
//     id: {
//       type: DataTypes.INTEGER,
//       primaryKey: true,
//       autoIncrement: true,
//     },

//     name: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },

//     email: {
//       type: DataTypes.STRING,
//       allowNull: false,
//       unique: true,
//     },

//     password: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },

//     role: {
//       type: DataTypes.ENUM("acheteur", "vendeur", "admin"),
//       allowNull: false,
//       defaultValue: "acheteur",
//     },

//     isVerified: {
//       type: DataTypes.BOOLEAN,
//       defaultValue: false,
//     },

//     isActive: {
//       type: DataTypes.BOOLEAN,
//       defaultValue: true,
//     },

//     lastLogin: {
//       type: DataTypes.DATE,
//       allowNull: true,
//     },
//   },
//   {
//     tableName: "users",
//     timestamps: true,
//   }
// );

// module.exports = User;


import { DataTypes, Model, InferAttributes, InferCreationAttributes, CreationOptional } from "sequelize";
import sequelize from "../config";

export interface UserModel
  extends Model<InferAttributes<UserModel>, InferCreationAttributes<UserModel>> {
  id: CreationOptional<number>;
  name: string;
  email: string;
  password: string;
  role: "acheteur" | "vendeur" | "admin";
  isVerified: CreationOptional<boolean>;
  isActive: CreationOptional<boolean>;
  lastLogin?: Date | null;
  createdAt?: CreationOptional<Date>;
  updatedAt?: CreationOptional<Date>;
}

export const User = sequelize.define<UserModel>(
  "User",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },

    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },

    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    role: {
      type: DataTypes.ENUM("acheteur", "vendeur", "admin"),
      allowNull: false,
      defaultValue: "acheteur",
    },

    isVerified: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },

    isActive: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    },

    lastLogin: {
      type: DataTypes.DATE,
      allowNull: true,
    },
  },
  {
    tableName: "users",
    timestamps: true,
  }
);

export default User;