

// const { Sequelize } = require("sequelize");
// const dotenv = require("dotenv");

// dotenv.config({ quiet: true });

// if (!process.env.DATABASE_URL) {
//   throw new Error("DATABASE_URL is missing in .env");
// }

// const isProduction = process.env.NODE_ENV === "production";

// const sequelize = new Sequelize(process.env.DATABASE_URL, {
//   dialect: "postgres",
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

// module.exports = sequelize;




const { Sequelize } = require("sequelize");
const pg = require("pg"); // 1. Import pg explicitly
const dotenv = require("dotenv");

dotenv.config({ quiet: true });

if (!process.env.DATABASE_URL) {
  throw new Error("DATABASE_URL is missing in .env");
}

const isProduction = process.env.NODE_ENV === "development";

const sequelize = new Sequelize(process.env.DATABASE_URL, {
  dialect: "postgres",
  dialectModule: pg, // 2. Pass pg here to prevent dynamic lookup errors in Next.js/Turbopack
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

module.exports = sequelize;
