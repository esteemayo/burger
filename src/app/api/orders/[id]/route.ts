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

        if (!order) {
          return new NextResponse(
            JSON.stringify({
              message: `No order found with the given ID → ${orderId}`,
            }),
            { status: 404 }
          );
        }

        return new NextResponse(JSON.stringify(order), { status: 200 });
      }

      const order = await prisma.order.findUnique({
        where: {
          id: orderId,
          userId: session.user.id,
        },
      });

      if (!order) {
        return new NextResponse(
          JSON.stringify({
            message: `No order found with the given ID → ${orderId}`,
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
  }
  return new NextResponse(
    JSON.stringify({ message: 'You are not authenticated' }),
    { status: 401 }
  );
};

export const PATCH = async (req: NextRequest, { params }: IParams) => {
  const { id: orderId } = params;
  const session = await getAuthSession();

  if (session) {
    try {
      const body = await req.json();

      if (session.user.isAdmin) {
        const order = await prisma.order.update({
          where: {
            id: orderId,
          },
          data: { ...body },
        });

        if (!order) {
          return new NextResponse(
            JSON.stringify({
              message: `No order found with the given ID → ${orderId}`,
            }),
            { status: 404 }
          );
        }

        return new NextResponse(JSON.stringify(order), { status: 200 });
      }
      return new NextResponse(
        JSON.stringify({ message: 'You are not authorized' }),
        { status: 403 }
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

export const DELETE = async (req: NextRequest, { params }: IParams) => {
  const { id: orderId } = params;
  const session = await getAuthSession();

  if (session) {
    try {
      if (session.user.isAdmin) {
        const order = await prisma.order.delete({
          where: {
            id: orderId,
          },
        });

        if (!order) {
          return new NextResponse(
            JSON.stringify({
              message: `No order found with the given ID → ${orderId}`,
            }),
            { status: 404 }
          );
        }

        return new NextResponse(JSON.stringify({ message: 'Order deleted!' }), {
          status: 200,
        });
      }
      return new NextResponse(
        JSON.stringify({ message: 'You are not authorized' }),
        { status: 403 }
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
