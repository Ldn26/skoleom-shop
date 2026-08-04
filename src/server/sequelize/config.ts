// import { Sequelize } from 'sequelize';
// import pg from 'pg';
// import dotenv from 'dotenv';

// dotenv.config({ quiet: true });

// if (!process.env.DATABASE_URL) {
//   throw new Error('DATABASE_URL is missing in .env');
// }

// const isProduction = process.env.NODE_ENV === 'production';

// export const sequelize = new Sequelize(process.env.DATABASE_URL, {
//   dialect: 'postgres',
//   dialectModule: pg,
//   logging: false,
//   dialectOptions: isProduction
//     ? {
//         ssl: {
//           require: true,
//           rejectUnauthorized: false,
//         },
//       }
//     : {},
// });

// export default sequelize;

import { Sequelize } from 'sequelize';
import pg from 'pg';

if (!process.env.DATABASE_URL) {
  throw new Error('DATABASE_URL is missing in .env');
}

const isProduction = process.env.NODE_ENV === 'production';

// Singleton pour éviter les fuites de pool de connexions avec Next.js HMR
const globalForSequelize = global as unknown as { sequelize: Sequelize };

export const sequelize =
  globalForSequelize.sequelize ||
  new Sequelize(process.env.DATABASE_URL, {
    dialect: 'postgres',
    dialectModule: pg,
    logging: false,
    dialectOptions: isProduction
      ? {
          ssl: {
            require: true,
            rejectUnauthorized: false,
          },
        }
      : {},
  });

if (process.env.NODE_ENV !== 'production') {
  globalForSequelize.sequelize = sequelize;
}

export default sequelize;