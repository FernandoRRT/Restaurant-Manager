import { Knex } from 'knex';

export async function seed(knex: Knex): Promise<void> {
  // Clear related data in correct order
  await knex('dish_ingredients').del();
  await knex('ingredients').del();

  // Get measurement units to link by abbreviation
  const units = await knex('measurement_units').select('id', 'abbreviation');
  const unitMap = Object.fromEntries(units.map((u) => [u.abbreviation, u.id]));

  // Insert ingredients with measurement unit IDs
  const ingredients = [
    {
      component: 'Capers',
      purchase_price: 1.20,
      waste_percentage: 5,
      purchase_quantity: 1,
      measurement_unit_id: unitMap['g'], // grams
    },
    {
      component: 'Dijon mustard',
      purchase_price: 2.50,
      waste_percentage: 10,
      purchase_quantity: 0.5,
      measurement_unit_id: unitMap['ml'], // milliliters
    },
    {
      component: 'Pumpkin',
      purchase_price: 3.00,
      waste_percentage: 15,
      purchase_quantity: 2,
      measurement_unit_id: unitMap['kg'], // kilograms
    },
    {
      component: 'Parmesan cheese',
      purchase_price: 5.00,
      waste_percentage: 2,
      purchase_quantity: 1,
      measurement_unit_id: unitMap['g'], // grams
    },
    {
      component: 'Arborio rice',
      purchase_price: 4.50,
      waste_percentage: 1,
      purchase_quantity: 1,
      measurement_unit_id: unitMap['g'], // grams
    },
  ];

  const insertedIngredients = await knex('ingredients')
    .insert(ingredients)
    .returning(['id', 'component']);

  // Get inserted dishes
  const dishes = await knex('dishes').select('id', 'name');
  const carpaccioId = dishes.find(d => d.name === 'Carpaccio Canape')?.id;
  const risottoId = dishes.find(d => d.name === 'Pumpkin Risotto')?.id;

  if (!carpaccioId || !risottoId) {
    throw new Error('One or more dishes not found.');
  }

  // Associate ingredients to dishes
  const dishIngredients = [];

  for (const ingredient of insertedIngredients) {
    if (ingredient.component === 'Capers' || ingredient.component === 'Dijon mustard') {
      dishIngredients.push({
        dish_id: carpaccioId,
        ingredient_id: ingredient.id,
        amount: 50, // e.g., 50g or 50ml
        unit_id: ingredient.component === 'Capers'
          ? unitMap['g']
          : unitMap['ml'],
      });
    }

    if (
      ['Pumpkin', 'Parmesan cheese', 'Arborio rice'].includes(ingredient.component)
    ) {
      const unit = unitMap['g'];
      dishIngredients.push({
        dish_id: risottoId,
        ingredient_id: ingredient.id,
        amount: ingredient.component === 'Pumpkin' ? 200 : 100,
        unit_id: ingredient.component === 'Pumpkin' ? unitMap['g'] : unit,
      });
    }
  }

  await knex('dish_ingredients').insert(dishIngredients);
}
