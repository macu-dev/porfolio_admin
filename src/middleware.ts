import { i18nRouter } from 'next-i18n-router';
import { NextRequest } from 'next/server';
// import { NextRequestWithAuth } from 'next-auth/middleware';

import i18nConfig from '../i18nConfig';

// const publicPages = ['/'];

// const authMiddleware = withAuth((req) => i18nRouter(req, i18nConfig), {
//   secret: process.env.NEXTAUTH_SECRET,
//   callbacks: {
//     authorized: async ({ token }) => !!token,
//   },
//   pages: {
//     signIn: '/admin',
//   },
// });

export async function middleware(req: NextRequest) {
  // const publicPathnameRegex = RegExp(
  //   `^(/(${locales.join('|')}))?(${publicPages
  //     .flatMap((p) => (p === '/' ? ['', '/'] : p))
  //     .join('|')})/?$`,
  //   'i',
  // );

  // const isPublicPage = publicPathnameRegex.test(req.nextUrl.pathname);

  return i18nRouter(req, i18nConfig);
  // if (isPublicPage) {
  //   return i18nRouter(req, i18nConfig);
  // } else {
  //   return authMiddleware(req as NextRequestWithAuth, event);
  // }
}

// only applies this middleware to files in the app directory
export const config = {
  matcher: ['/((?!api|static|.*\\..*|_next).*)'],
};
