import { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
  await knex.raw('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"');
  await knex.schema.createTable('measurement_unit_types', (table) => {
    table.uuid('id').primary().defaultTo(knex.raw('uuid_generate_v4()'));
    table.string('name').notNullable().unique().comment('e.g., "mass", "volume"');
  });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTableIfExists('measurement_unit_types');
}
