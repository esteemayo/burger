import { NextRequest, NextResponse } from 'next/server';

import { prisma } from '@/utils/connect';
import { getAuthSession } from '@/utils/auth';

interface IParams {
  params: {
    intentId: string;
  };
}

export const GET = async (req: NextRequest, { params }: IParams) => {
  const { intentId } = params;

  try {
    const order = await prisma.order.findUnique({
      where: {
        intent_id: intentId,
      },
    });

    if (!order) {
      return new NextResponse(
        JSON.stringify({
          message: `No order found with the given IntentID → ${intentId}`,
        }),
        { status: 404 }
      );
    }

    return new NextResponse(JSON.stringify(order), { status: 200 });
  } catch (err: unknown) {
    return new NextResponse(
      JSON.stringify({ message: 'Something went wrong' }),
      { status: 500 }
    );
  }
};
