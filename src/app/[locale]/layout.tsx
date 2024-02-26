import type { Metadata } from 'next';

import { Inter } from 'next/font/google';
import './globals.css';
import { dir } from 'i18next';

import i18nConfig from '../../../i18nConfig';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export function generateStaticParams() {
  return i18nConfig.locales.map((locale) => ({ locale }));
}

export default function RootLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  return (
    <html className="h-dvh" dir={dir(locale)} lang={locale}>
      <body className={inter.className + ' h-full'}>
        <main className="container mx-auto h-full py-2">{children}</main>
      </body>
    </html>
  );
}