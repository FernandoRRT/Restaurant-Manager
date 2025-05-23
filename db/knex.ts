import knex from 'knex';
import config from './knexfile';

declare global {
  var knexInstance: ReturnType<typeof knex> | undefined;
}

const db = global.knexInstance || knex(config);

if (!global.knexInstance) {
  global.knexInstance = db;
}

export default db;
