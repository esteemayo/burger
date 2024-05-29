import { NextResponse } from 'next/server';

import { prisma } from '@/utils/connect';
import { getAuthSession } from '@/utils/auth';

export const GET = async () => {
  const session = await getAuthSession();

  if (session) {
    if (session.user.isAdmin) {
      try {
        const reviews = await prisma.review.findMany();

        return new NextResponse(JSON.stringify(reviews), { status: 200 });
      } catch (err: unknown) {
        return new NextResponse(
          JSON.stringify({ message: 'Something went wrong' }),
          { status: 500 }
        );
      }
    }
    return new NextResponse(
      JSON.stringify({
        message: 'You are not authorized to perform this action',
      }),
      { status: 403 }
    );
  }
  return new NextResponse(
    JSON.stringify({ message: 'You are not authenticated' }),
    { status: 401 }
  );
};
