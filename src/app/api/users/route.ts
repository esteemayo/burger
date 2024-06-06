import { NextResponse } from 'next/server';

import { prisma } from '@/utils/connect';
import { getAuthSession } from '@/utils/auth';

export const GET = async () => {
  const session = await getAuthSession();

  if (session) {
    try {
      if (session.user.isAdmin) {
        const users = await prisma.user.findMany();

        return new NextResponse(JSON.stringify(users), { status: 200 });
      }
    } catch (err: unknown) {
      return new NextResponse(
        JSON.stringify({ message: 'Something went wrong' }),
        { status: 500 }
      );
    }
  }
  return new NextResponse(
    JSON.stringify({ message: 'You are not authenticated' }),
    { status: 401 }
  );
};
