/* ── Centralized Environment Variables ───────────────────────────── */

require('dotenv/config');

function requireInProduction(name, value) {
  const v = value?.trim();

  if (v) return v;

  if (process.env.NODE_ENV === 'production') {
    throw new Error(`Missing environment variable: ${name}`);
  }

  return '';
}

const env = {
  PORT: Number(process.env.PORT) || 5000,
  NODE_ENV: process.env.NODE_ENV ?? 'development',
  WOO_CLIENT_ID: process.env.WOO_CLIENT_ID ?? '',
  WOO_BASE_URI: process.env.WOO_BASE_URI ?? '',
  WOO_SECRET_KEY: process.env.WOO_SECRET_KEY ?? '',
  WOO_CONSUMER_SECRET: process.env.WOO_CONSUMER_SECRET ?? '',
  DB_HOST: process.env.DB_HOST ?? '127.0.0.1',
  DB_PORT: Number(process.env.DB_PORT) || 3306,
  DB_NAME: process.env.DB_NAME ?? 'marketplace',
  DB_USER: process.env.DB_USER ?? 'root',
  DB_PASSWORD: process.env.DB_PASSWORD ?? '',
  DATABASE_URL:
    process.env.DATABASE_URL ??
    `mysql://${process.env.DB_USER ?? 'root'}:${
      process.env.DB_PASSWORD ?? ''
    }@${process.env.DB_HOST ?? '127.0.0.1'}:${
      process.env.DB_PORT ?? 3306
    }/${process.env.DB_NAME ?? 'marketplace'}`,

  JWT_SECRET:
    requireInProduction('JWT_SECRET', process.env.JWT_SECRET) ||
    'dev-jwt-secret',

  JWT_EXPIRES_IN: process.env.JWT_EXPIRES_IN ?? '15h',

  REFRESH_TOKEN_SECRET:
    requireInProduction(
      'REFRESH_TOKEN_SECRET',
      process.env.REFRESH_TOKEN_SECRET,
    ) || 'dev-refresh-secret',

  REFRESH_TOKEN_EXPIRES_IN: process.env.REFRESH_TOKEN_EXPIRES_IN ?? '7d',

  SESYNC_URL: process.env.SESYNC_URL ?? '',

  FRONTEND_URL: (process.env.FRONTEND_URL ?? 'http://localhost:5173')
    .split(',')
    .map((url) => url.trim())
    .filter(Boolean),

  BACKEND_URL: process.env.BACKEND_URL ?? 'http://localhost:5000',
};

module.exports = { env };