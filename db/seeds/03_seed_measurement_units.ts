import { Knex } from 'knex';
import { randomUUID } from 'crypto';

export async function seed(knex: Knex): Promise<void> {
  // Clear existing data
  await knex('measurement_units').del();
  await knex('measurement_unit_types').del();

  // Step 1: Insert measurement unit types
  const types = [
    { id: randomUUID(), name: 'mass' },
    { id: randomUUID(), name: 'volume' },
    { id: randomUUID(), name: 'unit' },
  ];

  await knex('measurement_unit_types').insert(types);

  const typeMap = Object.fromEntries(types.map((t) => [t.name, t.id]));

  // Step 2: Insert measurement units
  const units = [
    { id: randomUUID(), name: 'kilogram', abbreviation: 'kg', type_id: typeMap.mass },
    { id: randomUUID(), name: 'gram', abbreviation: 'g', type_id: typeMap.mass },
    { id: randomUUID(), name: 'liter', abbreviation: 'l', type_id: typeMap.volume },
    { id: randomUUID(), name: 'milliliter', abbreviation: 'ml', type_id: typeMap.volume },
    { id: randomUUID(), name: 'unit', abbreviation: 'un', type_id: typeMap.unit },
  ];

  await knex('measurement_units').insert(units);
}
