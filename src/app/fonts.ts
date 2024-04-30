import { Noto_Sans, Roboto, Nunito_Sans } from 'next/font/google';

export const roboto = Roboto({
  subsets: ['latin'],
  weight: ['100', '300', '400', '500', '700', '900'],
  display: 'swap',
});

export const noto_sans = Noto_Sans({
  subsets: ['latin'],
  display: 'swap',
});

export const nunito_sans = Nunito_Sans({
  subsets: ['latin'],
  display: 'swap',
});
