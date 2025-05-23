import type { Knex } from 'knex';
import dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: '.env.local' });

const config: Knex.Config = {
  client: 'pg',
  connection: process.env.POSTGRES_URL || {
    host: process.env.POSTGRES_HOST,
    port: Number(process.env.POSTGRES_PORT || 5432),
    database: process.env.POSTGRES_DATABASE,
    user: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    ssl: { rejectUnauthorized: false },
  },
  pool: {
    min: 0,
    max: 2,
  },
  migrations: {
    // Use absolute path for migrations directory
    directory: path.join(process.cwd(), 'db', 'migrations'),
  },
  seeds: {
    // Use absolute path for seeds directory
    directory: path.join(process.cwd(), 'db', 'seeds'),
  },
};

export default config;
