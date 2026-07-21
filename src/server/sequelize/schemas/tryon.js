const { DataTypes } = require("sequelize");
const sequelize = require("../config");

const TryOn = sequelize.define(
  "TryOn",
  {
    id_tryon: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },

    // User
    id_user: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },

    // Avatar used
    id_avatar: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },

    avatar_uuid: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    // Product
    product_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },

    product_name: {
      type: DataTypes.STRING,
      allowNull: true,
    },

    product_brand: {
      type: DataTypes.STRING,
      allowNull: true,
    },

    product_type: {
      type: DataTypes.STRING,
      allowNull: true,
    },

    // Garment image used
    garment_url: {
      type: DataTypes.TEXT,
      allowNull: true,
    },

    garment_public_id: {
      type: DataTypes.STRING,
      allowNull: true,
    },

    // Avatar image used
    avatar_url: {
      type: DataTypes.TEXT,
      allowNull: false,
    },

    // FINAL GENERATED IMAGE
    result_url: {
      type: DataTypes.TEXT,
      allowNull: false,
    },

    result_public_id: {
      type: DataTypes.STRING,
      allowNull: true,
    },

    // Optional mask image
    mask_url: {
      type: DataTypes.TEXT,
      allowNull: true,
    },

    // AI information
    fit_score: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },

    recommended_size: {
      type: DataTypes.STRING,
      allowNull: true,
    },

    comment: {
      type: DataTypes.TEXT,
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

    // Status
    status: {
      type: DataTypes.ENUM(
        "processing",
        "completed",
        "failed"
      ),
      defaultValue: "processing",
    },

    generation_time_ms: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
  },
  {
    tableName: "tryons",
    timestamps: true,

    indexes: [
      {
        fields: ["id_user"],
      },
      {
        fields: ["id_avatar"],
      },
      {
        fields: ["product_id"],
      },
      {
        fields: ["id_user", "createdAt"],
      },
    ],
  }
);

module.exports = TryOn;