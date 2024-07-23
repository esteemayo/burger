import { NextRequest, NextResponse } from 'next/server';

import { prisma } from '@/utils/connect';
import { getAuthSession } from '@/utils/auth';

interface IParams {
  params: {
    intentId: string;
  };
}

export const PATCH = async (req: NextRequest, { params }: IParams) => {
  const { intentId } = params;
  const session = await getAuthSession();

  console.log(intentId);

  if (session) {
    try {
      const order = await prisma.order.update({
        where: {
          intent_id: intentId,
        },
        data: {
          status: 'preparing',
        },
      });

      console.log(order);

      return new NextResponse(JSON.stringify(order), { status: 200 });
    } catch (err: unknown) {
      console.log(err);
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
