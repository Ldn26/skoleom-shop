const User = require("./user");
const Avatar = require("./avatar");
const TryOn = require("./tryon");

User.hasOne(Avatar, {
  foreignKey: "id_user",
  sourceKey: "id",
  as: "profileAvatar",
});

Avatar.belongsTo(User, {
  foreignKey: "id_user",
  targetKey: "id",
  as: "owner",
});

User.hasMany(TryOn, {
  foreignKey: "id_user",
  sourceKey: "id",
  as: "tryons",
});

TryOn.belongsTo(User, {
  foreignKey: "id_user",
  targetKey: "id",
  as: "user",
});

Avatar.hasMany(TryOn, {
  foreignKey: "id_avatar",
  sourceKey: "id_avatar",
  as: "tryons",
});

TryOn.belongsTo(Avatar, {
  foreignKey: "id_avatar",
  targetKey: "id_avatar",
  as: "avatar",
});

module.exports = {
  User,
  Avatar,
  TryOn,
};