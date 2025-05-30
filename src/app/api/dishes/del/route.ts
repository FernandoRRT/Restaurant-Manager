import { NextRequest, NextResponse } from 'next/server';
import knex from '@db/knex';

// I'll let here for training purposes, but you should use an environment variable in production.
const SECRET_KEY = 'p9KafjF4Vqv5kdscVfZC5GgW4o8JDk2k6b4ZMxOTnOQ=';

// DELETE /api/dishes/del
export async function DELETE(request: NextRequest) {
  try {
    // Read and parse the request body
    const body = await request.json();
    const { id, secret } = body;

    // Validate secret
    if (secret !== SECRET_KEY) {
      return NextResponse.json(
        { error: 'Unauthorized: invalid secret.' },
        { status: 401 }
      );
    }

    // Validate id
    if (!id || typeof id !== 'string') {
      return NextResponse.json(
        { error: 'Missing or invalid field: id is required.' },
        { status: 400 }
      );
    }

    // Attempt to delete the dish
    const deleted = await knex('dishes').where({ id }).del();

    if (deleted === 0) {
      // No rows deleted, dish not found
      return NextResponse.json(
        { error: 'Dish not found or already deleted.' },
        { status: 404 }
      );
    }

    // Success response
    return NextResponse.json(
      { message: 'Dish deleted successfully.', id },
      { status: 200 }
    );
  } catch (error) {
    console.error('[DELETE /api/dishes/del] Error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
