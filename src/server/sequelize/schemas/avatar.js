const { DataTypes } = require("sequelize");
const sequelize = require("../config");

const Avatar = sequelize.define(
  "Avatar",
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
    tableName: "avatars",
    timestamps: true,
  }
);

module.exports = Avatar;