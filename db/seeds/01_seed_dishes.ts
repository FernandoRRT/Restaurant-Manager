import { Knex } from 'knex';

export async function seed(knex: Knex): Promise<void> {
  // Clear existing data (FK order matters)
  await knex('dish_ingredients').del();
  await knex('dishes').del();

  // Insert dishes (UUIDs will be generated automatically)
  await knex('dishes').insert([
    {
      name: 'Carpaccio Canape',
      value: 6.00,
      cost: 1.50,
    },
    {
      name: 'Pumpkin Risotto',
      value: 14.00,
      cost: 4.25,
    },
  ]);
}
