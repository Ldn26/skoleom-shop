const { DataTypes } = require("sequelize");
const sequelize = require("../config");
const User = require("./user");

const Seller = sequelize.define(
  "Seller",
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

module.exports = Seller;