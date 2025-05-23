import { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable('dishes', (table) => {
    table.string('id', 16).notNullable().primary();
    table.string('name').notNullable();
    table.decimal('value', 10, 2).notNullable(); // Preço de venda
    table.decimal('cost', 10, 2).notNullable();  // Custo de preparo
  });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTableIfExists('dishes');
}
