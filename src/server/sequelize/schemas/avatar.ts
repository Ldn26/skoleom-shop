// const { DataTypes } = require("sequelize");
// const sequelize = require("../config");

// const Avatar = sequelize.define(
//   "Avatar",
//   {
//     id_avatar: {
//       type: DataTypes.INTEGER,
//       primaryKey: true,
//       autoIncrement: true,
//     },

//     id_user: {
//       type: DataTypes.INTEGER,
//       allowNull: false,
//       unique: true,
//     },

//     avatar_uuid: {
//       type: DataTypes.STRING,
//       allowNull: false,
//       unique: true,
//     },

//     original_url: {
//       type: DataTypes.TEXT,
//       allowNull: false,
//     },

//     original_public_id: {
//       type: DataTypes.STRING,
//       allowNull: true,
//     },

//     avatar_url: {
//       type: DataTypes.TEXT,
//       allowNull: false,
//     },

//     avatar_public_id: {
//       type: DataTypes.STRING,
//       allowNull: true,
//     },

//     measurements: {
//       type: DataTypes.JSON,
//       allowNull: true,
//     },

//     analysis: {
//       type: DataTypes.JSON,
//       allowNull: true,
//     },

//     usable: {
//       type: DataTypes.BOOLEAN,
//       defaultValue: false,
//     },
//   },
//   {
//     tableName: "avatars",
//     timestamps: true,
//   }
// );

// module.exports = Avatar;

import {
  DataTypes,
  Model,
  InferAttributes,
  InferCreationAttributes,
  CreationOptional,
} from 'sequelize';
import sequelize from '../config';

export interface AvatarModel extends Model<
  InferAttributes<AvatarModel>,
  InferCreationAttributes<AvatarModel>
> {
  id_avatar: CreationOptional<number>;
  id_user: number;
  avatar_uuid: string;
  original_url: string;
  original_public_id?: string | null;
  avatar_url: string;
  avatar_public_id?: string | null;
  measurements?: Record<string, unknown> | null;
  analysis?: Record<string, unknown> | null;
  usable: CreationOptional<boolean>;
  createdAt?: CreationOptional<Date>;
  updatedAt?: CreationOptional<Date>;
}

export const Avatar = sequelize.define<AvatarModel>(
  'Avatar',
  {
    id_avatar: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },

    id_user: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: true,
    },

    avatar_uuid: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },

    original_url: {
      type: DataTypes.TEXT,
      allowNull: false,
    },

    original_public_id: {
      type: DataTypes.STRING,
      allowNull: true,
    },

    avatar_url: {
      type: DataTypes.TEXT,
      allowNull: false,
    },

    avatar_public_id: {
      type: DataTypes.STRING,
      allowNull: true,
    },

    measurements: {
      type: DataTypes.JSON,
      allowNull: true,
    },

    analysis: {
      type: DataTypes.JSON,
      allowNull: true,
    },

    usable: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
  },
  {
    tableName: 'avatars',
    timestamps: true,
  },
);

export default Avatar;
