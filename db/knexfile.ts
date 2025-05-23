import type { Knex } from 'knex';
import dotenv from 'dotenv';

if (process.env.NODE_ENV !== 'production') {
  dotenv.config({ path: '.env.local' });
}

const isProduction = process.env.NODE_ENV === 'production';

const config: Knex.Config = {
  client: 'pg',
  connection: isProduction
    ? process.env.DATABASE_URL
    : {
        host: 'localhost',
        port: 54320,
        database: 'fintech_db',
        user: 'postgres',
        password: 'pswroot',
      },
  pool: {
    min: 0,
    max: 2,
  },
  migrations: {
    directory: './db/migrations',
  },
  seeds: {
    directory: './db/seeds',
  },
};

export default config;
