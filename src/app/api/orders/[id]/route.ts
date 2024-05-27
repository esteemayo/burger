import { NextRequest, NextResponse } from 'next/server';

import { prisma } from '@/utils/connect';
import { getAuthSession } from '@/utils/auth';

interface IParams {
  params: {
    id: string;
  };
}

export const GET = async (req: NextRequest, { params }: IParams) => {
  const { id: orderId } = params;
  const session = await getAuthSession();

  if (session) {
    try {
      if (session.user.isAdmin) {
        const order = await prisma.order.findUnique({
          where: {
            id: orderId,
          },
        });

        return new NextResponse(JSON.stringify(order), { status: 200 });
      }

      const order = await prisma.order.findUnique({
        where: {
          id: orderId,
          userId: session.user.id,
        },
      });

      return new NextResponse(JSON.stringify(order), { status: 200 });
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
