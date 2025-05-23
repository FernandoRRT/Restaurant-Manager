import { NextResponse } from 'next/server';
import knex from '@db/knex'; // ajuste para seu caminho real

export async function GET() {
  try {
    const dishes = await knex('dishes as d')
      .select([
        'd.id',
        'd.name',
        'd.value',
        'd.cost',
        knex.raw(`
          json_agg(
            json_build_object(
              'id', i.id,
              'component', i.component
            )
          ) as ingredients
        `),
      ])
      .join('dish_ingredients as di', 'di.dish_id', 'd.id')
      .join('ingredients as i', 'i.id', 'di.ingredient_id')
      .groupBy('d.id');

    return NextResponse.json(dishes);
  } catch (error: unknown) {
    console.error('[GET /api/dishes] Error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
