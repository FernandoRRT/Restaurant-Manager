import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  // Só queremos adicionar CORS para rotas de API
  if (request.nextUrl.pathname.startsWith('/api/')) {
    const response = NextResponse.next();

    response.headers.set('Access-Control-Allow-Origin', '*');
    response.headers.set('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    response.headers.set('Access-Control-Allow-Headers', 'Content-Type, Authorization');

    // Para OPTIONS (preflight)
    if (request.method === 'OPTIONS') {
      return new NextResponse(null, {
        status: 204,
        headers: response.headers,
      });
    }

    return response;
  }

  // Para rotas que não são API, segue fluxo normal
  return NextResponse.next();
}
