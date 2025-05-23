import knex from 'knex';
import config from './knexfile';

// Disable ESLint no-var rule for declare global
/* eslint-disable no-var */
declare global {
  var knexInstance: ReturnType<typeof knex> | undefined;
}
/* eslint-enable no-var */

const db = global.knexInstance ?? knex(config);

if (!global.knexInstance) {
  global.knexInstance = db;
}

export default db;
