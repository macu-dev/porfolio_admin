import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import bcrypt from 'bcrypt';

import db from '@/libs/db';

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'text' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        const userFound = await db.user.findUnique({
          where: {
            email: credentials?.email,
          },
        });

        if (!userFound) throw new Error('No user found');

        // eslint-disable-next-line no-console
        console.log(userFound);

        const matchPassword = await bcrypt.compare(
          credentials?.password || '',
          userFound.password,
        );

        if (!matchPassword) throw new Error('Wrong password');

        return {
          id: userFound.id,
          name: userFound.username,
          email: userFound.email,
        };
      },
    }),
  ],
  session: {
    maxAge: 30 * 24 * 60 * 60, // Duración de la sesión en segundos
  },
  pages: {
    signIn: '/auth/login',
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
