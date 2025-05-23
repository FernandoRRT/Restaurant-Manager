import type { Knex } from 'knex';
import dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: '.env.local' });

const config: Knex.Config = {
  client: 'pg',
  connection: process.env.DATABASE_URL || {
    host: process.env.PGHOST,
    port: Number(process.env.PGPORT || 5432),
    database: process.env.PGDATABASE,
    user: process.env.PGUSER,
    password: process.env.PGPASSWORD,
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
