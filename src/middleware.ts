import { i18nRouter } from 'next-i18n-router';
import { NextFetchEvent, NextRequest } from 'next/server';
import { NextRequestWithAuth, withAuth } from 'next-auth/middleware';

import i18nConfig, { locales } from '../i18nConfig';

const publicPages = ['/', '/admin'];

const authMiddleware = withAuth((req) => i18nRouter(req, i18nConfig), {
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    authorized: async ({ token }) => !!token,
  },
  pages: {
    signIn: '/admin',
  },
});

export async function middleware(req: NextRequest, event: NextFetchEvent) {
  const publicPathnameRegex = RegExp(
    `^(/(${locales.join('|')}))?(${publicPages
      .flatMap((p) => (p === '/' ? ['', '/'] : p))
      .join('|')})/?$`,
    'i',
  );

  const isPublicPage = publicPathnameRegex.test(req.nextUrl.pathname);

  if (isPublicPage) {
    return i18nRouter(req, i18nConfig);
  } else {
    return authMiddleware(req as NextRequestWithAuth, event);
  }
}

// only applies this middleware to files in the app directory
export const config = {
  matcher: ['/((?!api|static|.*\\..*|_next).*)'],
};
