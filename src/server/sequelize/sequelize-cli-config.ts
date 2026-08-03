// require("dotenv").config();

// module.exports = {
//   development: {
//     url: process.env.DATABASE_URL,
//     dialect: "postgres",
//   },

//   production: {
//     url: process.env.DATABASE_URL,
//     dialect: "postgres",
//   },
// };

import dotenv from 'dotenv';

dotenv.config();

export interface SequelizeCliConfig {
  url: string | undefined;
  dialect: 'postgres';
}

export interface SequelizeCliEnvironment {
  development: SequelizeCliConfig;
  production: SequelizeCliConfig;
}

export const config: SequelizeCliEnvironment = {
  development: {
    url: process.env.DATABASE_URL,
    dialect: 'postgres',
  },
  production: {
    url: process.env.DATABASE_URL,
    dialect: 'postgres',
  },
};

export default config;
