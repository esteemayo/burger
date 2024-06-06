import { NextRequest, NextResponse } from 'next/server';

import { prisma } from '@/utils/connect';
import { getAuthSession } from '@/utils/auth';

interface IParams {
  params: {
    id: string;
  };
}

export const GET = async (req: NextRequest, { params }: IParams) => {
  const { id: userId } = params;
  const session = await getAuthSession();

  if (session) {
    if (session.user.isAdmin || session.user.id === userId) {
      const user = await prisma.user.findUnique({
        where: {
          id: userId,
        },
      });

      if (!user) {
        return new NextResponse(
          JSON.stringify({
            message: `No user found with the given ID → ${userId}`,
          }),
          { status: 400 }
        );
      }

      return new NextResponse(JSON.stringify(user), { status: 200 });
    }
    return new NextResponse(
      JSON.stringify({ message: 'You are not authorized' }),
      { status: 403 }
    );
  }
  return new NextResponse(
    JSON.stringify({ message: 'You are not authenticated' }),
    { status: 401 }
  );
};
