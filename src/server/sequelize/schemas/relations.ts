
import User from './user';
import Avatar from './avatar';
import TryOn from './tryon';
import Subscription from './subscription';


User.hasOne(Avatar, {
  foreignKey: 'id_user',
  sourceKey: 'id',
  as: 'profileAvatar',
});

Avatar.belongsTo(User, {
  foreignKey: 'id_user',
  targetKey: 'id',
  as: 'owner',
});

User.hasMany(TryOn, {
  foreignKey: 'id_user',
  sourceKey: 'id',
  as: 'tryons',
});

TryOn.belongsTo(User, {
  foreignKey: 'id_user',
  targetKey: 'id',
  as: 'user',
});

Avatar.hasMany(TryOn, {
  foreignKey: 'id_avatar',
  sourceKey: 'id_avatar',
  as: 'tryons',
});

TryOn.belongsTo(Avatar, {
  foreignKey: 'id_avatar',
  targetKey: 'id_avatar',
  as: 'avatar',
});









export { User, Avatar, TryOn,  Subscription };

export default {
  User,
  Avatar,
  TryOn,
  Subscription,
};
