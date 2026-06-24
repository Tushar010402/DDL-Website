import { NextResponse } from 'next/server';

export function middleware(request) {
  const host = request.headers.get('host');

  // Redirect non-www to www
  if (host === 'drdangslab.com') {
    return NextResponse.redirect(`https://www.drdangslab.com${request.nextUrl.pathname}${request.nextUrl.search}`, 301);
  }

  return NextResponse.next();
}

export const config = {
  matcher: '/:path*',
};
