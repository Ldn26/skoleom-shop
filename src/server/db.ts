import sequelize from './sequelize/index';
import User from './sequelize/schemas/user';
import Buyer from './sequelize/schemas/buyers';
import Seller from './sequelize/schemas/seller';
import Avatar from './sequelize/schemas/avatar';
import TryOn from './sequelize/schemas/tryon';

const globalForDb = globalThis as unknown as { __skoleomDbReady?: boolean };

if (!globalForDb.__skoleomDbReady) {
  globalForDb.__skoleomDbReady = true;
}

export { sequelize, User, Buyer, Seller, Avatar, TryOn };
