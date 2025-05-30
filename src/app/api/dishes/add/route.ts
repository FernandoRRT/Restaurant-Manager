import { NextRequest, NextResponse } from 'next/server';
import knex from '@db/knex';

// Set your secret here (in produção, use env variables!)
const SECRET_KEY = 'p9KafjF4Vqv5kdscVfZC5GgW4o8JDk2k6b4ZMxOTnOQ='; // I'll let here for training purposes, but you should use an environment variable in production.

// POST /api/dishes/add
export async function POST(request: NextRequest) {
  try {
    // Read the request body
    const body = await request.json();

    // Destructure the fields
    const { name, value, cost, secret } = body;

    // Validate the secret
    if (secret !== SECRET_KEY) {
      return NextResponse.json(
        { error: 'Unauthorized: invalid secret.' },
        { status: 401 }
      );
    }

    // Basic field validation
    if (!name || typeof value !== 'number' || typeof cost !== 'number') {
      return NextResponse.json(
        { error: 'Missing or invalid fields: name, value, cost are required.' },
        { status: 400 }
      );
    }

    // Insert the new dish
    const [dish] = await knex('dishes')
      .insert({ name, value, cost })
      .returning(['id']);

    // Return the id of the created dish
    return NextResponse.json({ id: dish.id }, { status: 201 });
  } catch (error) {
    console.error('[POST /api/dishes/add] Error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
