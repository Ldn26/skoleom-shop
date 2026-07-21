const { DataTypes } = require("sequelize");
const sequelize = require("../config");
const User = require("./user");

const Buyer = sequelize.define(
  "Buyer",
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
    tableName: "buyers",
    timestamps: true,
  }
);

User.hasOne(Buyer, { foreignKey: "userId", as: "buyer" });
Buyer.belongsTo(User, { foreignKey: "userId", as: "user" });

module.exports = Buyer;