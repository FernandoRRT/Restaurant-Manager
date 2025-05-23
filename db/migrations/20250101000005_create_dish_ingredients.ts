import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  await knex.raw('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"');

  await knex.schema.createTable("dish_ingredients", (table) => {
    table.uuid("dish_id").notNullable();
    table.uuid("ingredient_id").notNullable();
    table.decimal("amount", 10, 3).notNullable().defaultTo(1); // Amount of ingredient used in this dish
    table
      .uuid("unit_id") // Optional override of measurement unit used in this dish
      .references("id")
      .inTable("measurement_units")
      .onDelete("SET NULL");
    table.primary(["dish_id", "ingredient_id"]);
    table
      .foreign("dish_id")
      .references("id")
      .inTable("dishes")
      .onDelete("CASCADE");
    table
      .foreign("ingredient_id")
      .references("id")
      .inTable("ingredients")
      .onDelete("CASCADE");
  });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTableIfExists("dish_ingredients");
}
