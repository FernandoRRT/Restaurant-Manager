import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable("dish_ingredients", (table) => {
    table.string("dish_id", 16).notNullable();
    table.uuid("ingredient_id").notNullable();

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
