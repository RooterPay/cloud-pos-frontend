import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

export async function middleware(req: NextRequest) {
  req;
  return NextResponse.next();
}

export const config = {
  matcher:
    '/((?!api|blocked|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)',
};
