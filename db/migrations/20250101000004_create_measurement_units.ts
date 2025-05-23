import { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable('measurement_units', (table) => {
    table.uuid('id').primary().defaultTo(knex.raw('uuid_generate_v4()'));
    table.string('name').notNullable().comment('e.g., "kilogram');
    table.string('abbreviation').notNullable().comment('e.g., "kg"');
    table
      .uuid('type_id')
      .references('id')
      .inTable('measurement_unit_types')
      .onDelete('RESTRICT')
      .comment('mass, volume, etc.');
  });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTableIfExists('measurement_units');
}
