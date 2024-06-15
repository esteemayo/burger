import bcrypt from 'bcryptjs';
import CredentialsProvider from 'next-auth/providers/credentials';
import GoogleProvider from 'next-auth/providers/google';
import { NextAuthOptions, User, getServerSession } from 'next-auth';
import { PrismaAdapter } from '@next-auth/prisma-adapter';

import { prisma } from './connect';

declare module 'next-auth' {
  interface Session {
    user: User & {
      id: string;
      phone: string;
      city: string;
      state: string;
      street: string;
      address: string;
      isAdmin: Boolean;
    };
  }
}

declare module 'next-auth/jwt' {
  interface JWT {
    id: string;
    phone: string;
    city: string;
    state: string;
    street: string;
    address: string;
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
    CredentialsProvider({
      name: 'Credentials',
      id: 'credentials',
      credentials: {
        username: { label: 'Username', type: 'text', placeholder: 'Username' },
        password: {
          label: 'Password',
          type: 'password',
          placeholder: 'Password',
        },
      },
      async authorize(credentials, req) {
        if (!credentials?.username || !credentials.password) {
          throw new Error('Please provide username and password');
        }

        const user = await prisma.user.findUnique({
          where: {
            username: credentials.username,
          },
        });

        if (!user) {
          throw new Error('Invalid credentials');
        }

        const isMatch = await bcrypt.compare(
          credentials.password,
          user?.password!
        );

        if (!isMatch) {
          throw new Error('Invalid credentials');
        }

        return user;
      },
    }),
  ],
  callbacks: {
    async session({ session, token, trigger, newSession }) {
      if (token) {
        session.user.id = token?.id;
        session.user.isAdmin = token.isAdmin;
        session.user.phone = token.phone;
        session.user.state = token.state;
        session.user.city = token.city;
        session.user.street = token.street;
        session.user.address = token.address;
      }

      if (trigger === 'update') {
        session.user.name = newSession.name;
        session.user.email = newSession.email;
        session.user.phone = newSession.phone;
        session.user.state = newSession.state;
        session.user.city = newSession.city;
        session.user.street = newSession.street;
        session.user.address = newSession.address;
      }

      return session;
    },
    async jwt({ token, trigger, session }) {
      const userInDb = await prisma.user.findUnique({
        where: {
          email: token.email!,
        },
      });

      token.id = userInDb?.id!;
      token.isAdmin = userInDb?.isAdmin!;
      token.phone = userInDb?.phone!;
      token.state = userInDb?.state!;
      token.city = userInDb?.city!;
      token.street = userInDb?.street!;
      token.address = userInDb?.address!;

      if (trigger === 'update') {
        token.name = session.name;
        token.email = session.email;
        token.phone = session.phone;
        token.state = session.state;
        token.city = session.city;
        token.street = session.street;
        token.address = session.address;
      }

      return token;
    },
  },
  pages: {
    error: '/login',
  },
  debug: process.env.NODE_ENV === 'development',
  session: {
    strategy: 'jwt',
  },
  secret: process.env.NEXTAUTH_SECRET,
};

export const getAuthSession = () => getServerSession(authOptions);
