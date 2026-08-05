
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
   SERP_API_KEY: string;
  GOOGLE_SEARCH_API_KEY: string;
  GOOGLE_SEARCH_ENGINE_ID: string;
  AMAZON_ASSOCIATE_TAG: string;
  BACKEND_API_BASE_URL?: string;
  ALLOW_SYNTHETIC_SHOP_FALLBACK?: string | boolean;
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
  FRONTEND_URL: (process.env.FRONTEND_URL ?? 'http://localhost:3039')
    .split(',')
    .map((url) => url.trim())
    .filter(Boolean),
  BACKEND_URL: process.env.BACKEND_URL ?? 'http://localhost:3039',






//  SERP_API_KEY: requireInProduction('SERP_API_KEY', process.env.SERP_API_KEY),
//   GOOGLE_SEARCH_API_KEY: requireInProduction(
//     'GOOGLE_SEARCH_API_KEY',
//     process.env.GOOGLE_SEARCH_API_KEY,
//   ),
//   GOOGLE_SEARCH_ENGINE_ID: requireInProduction(
//     'GOOGLE_SEARCH_ENGINE_ID',
//     process.env.GOOGLE_SEARCH_ENGINE_ID,
//   ),
//   AMAZON_ASSOCIATE_TAG: requireInProduction(
//     'AMAZON_ASSOCIATE_TAG',
//     process.env.AMAZON_ASSOCIATE_TAG,
//   ),
//   BACKEND_API_BASE_URL: process.env.BACKEND_API_BASE_URL?.trim(),
//   ALLOW_SYNTHETIC_SHOP_FALLBACK: process.env.ALLOW_SYNTHETIC_SHOP_FALLBACK?.trim().toLowerCase() === 'true',

  

};

export default env;
