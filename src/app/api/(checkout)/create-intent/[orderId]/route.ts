import { NextRequest, NextResponse } from 'next/server';

import { prisma } from '@/utils/connect';
import { getAuthSession } from '@/utils/auth';

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

interface IParams {
  params: {
    orderId: string;
  };
}

export const POST = async (req: NextRequest, { params }: IParams) => {
  const { orderId } = params;
  const session = await getAuthSession();

  if (session) {
    try {
      const order = await prisma.order.findUnique({
        where: {
          id: orderId,
        },
      });

      if (order) {
        const paymentIntent = await stripe.paymentIntents.create({
          amount: (order.price as number) * 100,
          currency: 'usd',
          automatic_payment_methods: {
            enabled: true,
          },
        });

        await prisma.order.update({
          where: {
            id: orderId,
          },
          data: {
            intent_id: paymentIntent.id,
          },
        });

        return new NextResponse(
          JSON.stringify({ clientSecret: paymentIntent.client_secret }),
          { status: 200 }
        );
      }
      return new NextResponse(
        JSON.stringify({ message: `No order found with that ID → ${orderId}` }),
        { status: 404 }
      );
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
