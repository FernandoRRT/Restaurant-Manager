import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  await knex.raw('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"');
  await knex.schema.createTable("ingredients", (table) => {
    table.uuid('id').primary().defaultTo(knex.raw('uuid_generate_v4()'));
    table.string("component").notNullable();
    table.decimal("purchase_price", 10, 2).notNullable().defaultTo(0);
    table
      .decimal("waste_percentage", 5, 2)
      .notNullable()
      .defaultTo(0)
      .comment("Waste percentage after preparation (0 to 100)");
    table
      .decimal("purchase_quantity", 10, 3)
      .notNullable()
      .defaultTo(1)
      .comment("Minimum purchase quantity (e.g., 10)");

    table
      .uuid("measurement_unit_id")
      .references("id")
      .inTable("measurement_units")
      .onDelete("SET NULL") // If the unit is deleted, set null to avoid constraint errors
      .comment("Unit of measurement reference (e.g., kg, g)");
    table.comment(
      "Table of registered ingredients containing the values ​​and minimum purchase quantities, as well as their prices."
    );
  });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTableIfExists("ingredients");
}
