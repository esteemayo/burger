import { PrismaAdapter } from '@next-auth/prisma-adapter';
import GoogleProvider from 'next-auth/providers/google';
import { NextAuthOptions, User, getServerSession } from 'next-auth';

import { prisma } from './connect';

declare module 'next-auth' {
  interface Session {
    user: User & {
      isAdmin: Boolean;
    };
  }
}

declare module 'next-auth/jwt' {
  interface JWT {
    isAdmin: Boolean;
  }
}

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID as string,
      clientSecret: process.env.GOOGLE_SECRET as string,
    }),
  ],
  callbacks: {
    async session({ session, token }) {
      if (token) {
        session.user.isAdmin = token.isAdmin;
      }
      return session;
    },
    async jwt({ token }) {
      const userInDb = await prisma.user.findUnique({
        where: {
          email: token.email,
        },
      });

      token.isAdmin = userInDb?.isAdmin;
      return token;
    },
  },
  pages: {
    error: '/login',
  },
  session: {
    strategy: 'jwt',
  },
  secret: process.env.NEXTAUTH_SECRET,
};

export const getAuthSession = () => getServerSession(authOptions);
