// // require('dotenv/config');
// import dotenv from 'dotenv';

// dotenv.config();
// function requireInProduction(name, value) {
//   const v = value?.trim();

//   if (v) return v;

//   if (process.env.NODE_ENV === 'production') {
//     throw new Error(`Missing environment variable: ${name}`);
//   }

//   return '';
// }

// const env = {
//   PORT: Number(process.env.PORT) || 5000,
//   NODE_ENV: process.env.NODE_ENV ?? 'development',
//   WOO_CLIENT_ID: process.env.WOO_CLIENT_ID ?? '',
//   WOO_BASE_URI: process.env.WOO_BASE_URI ?? '',
//   WOO_SECRET_KEY: process.env.WOO_SECRET_KEY ?? '',
//   WOO_CONSUMER_SECRET: process.env.WOO_CONSUMER_SECRET ?? '',
//   DB_HOST: process.env.DB_HOST ?? '127.0.0.1',
//   DB_PORT: Number(process.env.DB_PORT) || 3306,
//   DB_NAME: process.env.DB_NAME ?? 'marketplace',
//   DB_USER: process.env.DB_USER ?? 'root',
//   DB_PASSWORD: process.env.DB_PASSWORD ?? '',
//   DATABASE_URL: process.env.DATABASE_URL ??
//     `mysql://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`,
//   JWT_SECRET:
//     requireInProduction('JWT_SECRET', process.env.JWT_SECRET) ||
//     'dev-jwt-secret',
//   JWT_EXPIRES_IN: process.env.JWT_EXPIRES_IN ?? '15h',
//   REFRESH_TOKEN_SECRET:
//     requireInProduction(
//       'REFRESH_TOKEN_SECRET',
//       process.env.REFRESH_TOKEN_SECRET,
//     ) || 'dev-refresh-secret',

//   REFRESH_TOKEN_EXPIRES_IN: process.env.REFRESH_TOKEN_EXPIRES_IN ?? '7d',
//   SESYNC_URL: process.env.SESYNC_URL ?? '',
//   FRONTEND_URL: (process.env.FRONTEND_URL ?? 'http://localhost:5173')
//     .split(',')
//     .map((url) => url.trim())
//     .filter(Boolean),

//   BACKEND_URL: process.env.BACKEND_URL ?? 'http://localhost:5000',
// };

// module.exports = { env };

import 'dotenv/config';

function requireInProduction(name: string, value?: string): string {
  const v = value?.trim();

  if (v) return v;

  if (process.env.NODE_ENV === 'production') {
    throw new Error(`Missing environment variable: ${name}`);
  }

  return '';
}

export interface EnvConfig {
  PORT: number;
  NODE_ENV: string;
  WOO_CLIENT_ID: string;
  WOO_BASE_URI: string;
  WOO_SECRET_KEY: string;
  WOO_CONSUMER_SECRET: string;
  DB_HOST: string;
  DB_PORT: number;
  DB_NAME: string;
  DB_USER: string;
  DB_PASSWORD: string;
  DATABASE_URL: string;
  JWT_SECRET: string;
  JWT_EXPIRES_IN: string;
  REFRESH_TOKEN_SECRET: string;
  REFRESH_TOKEN_EXPIRES_IN: string;
  SESYNC_URL: string;
  FRONTEND_URL: string[];
  BACKEND_URL: string;
}

const dbUser = process.env.DB_USER ?? 'root';
const dbPassword = process.env.DB_PASSWORD ?? '';
const dbHost = process.env.DB_HOST ?? '127.0.0.1';
const dbPort = Number(process.env.DB_PORT) || 3306;
const dbName = process.env.DB_NAME ?? 'marketplace';

export const env: EnvConfig = {
  PORT: Number(process.env.PORT) || 5000,
  NODE_ENV: process.env.NODE_ENV ?? 'development',
  WOO_CLIENT_ID: process.env.WOO_CLIENT_ID ?? '',
  WOO_BASE_URI: process.env.WOO_BASE_URI ?? '',
  WOO_SECRET_KEY: process.env.WOO_SECRET_KEY ?? '',
  WOO_CONSUMER_SECRET: process.env.WOO_CONSUMER_SECRET ?? '',
  DB_HOST: dbHost,
  DB_PORT: dbPort,
  DB_NAME: dbName,
  DB_USER: dbUser,
  DB_PASSWORD: dbPassword,
  DATABASE_URL:
    process.env.DATABASE_URL ?? `mysql://${dbUser}:${dbPassword}@${dbHost}:${dbPort}/${dbName}`,
  JWT_SECRET: requireInProduction('JWT_SECRET', process.env.JWT_SECRET) || 'dev-jwt-secret',
  JWT_EXPIRES_IN: process.env.JWT_EXPIRES_IN ?? '15h',
  REFRESH_TOKEN_SECRET:
    requireInProduction('REFRESH_TOKEN_SECRET', process.env.REFRESH_TOKEN_SECRET) ||
    'dev-refresh-secret',
  REFRESH_TOKEN_EXPIRES_IN: process.env.REFRESH_TOKEN_EXPIRES_IN ?? '7d',
  SESYNC_URL: process.env.SESYNC_URL ?? '',
  FRONTEND_URL: (process.env.FRONTEND_URL ?? 'http://localhost:5173')
    .split(',')
    .map((url) => url.trim())
    .filter(Boolean),
  BACKEND_URL: process.env.BACKEND_URL ?? 'http://localhost:5000',
};

export default env;
