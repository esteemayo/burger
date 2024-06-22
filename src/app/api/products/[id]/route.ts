import { NextRequest, NextResponse } from 'next/server';

import { prisma } from '@/utils/connect';
import { getAuthSession } from '@/utils/auth';

interface IParams {
  params: {
    id: string;
  };
}

export const GET = async (req: NextRequest, { params }: IParams) => {
  const { id: productId } = params;

  try {
    const product = await prisma.product.findUnique({
      where: {
        id: productId,
      },
    });

    if (!product) {
      return new NextResponse(
        JSON.stringify({
          message: `No product found with the given ID → ${productId}`,
        }),
        { status: 400 }
      );
    }

    return new NextResponse(JSON.stringify(product), { status: 200 });
  } catch (err: unknown) {
    return new NextResponse(
      JSON.stringify({ message: 'Something went wrong' }),
      { status: 500 }
    );
  }
};

export const PATCH = async (req: NextRequest, { params }: IParams) => {
  const { id: productId } = params;
  const session = await getAuthSession();

  if (session) {
    try {
      const body = await req.json();

      if (session.user.isAdmin) {
        const product = await prisma.product.update({
          where: {
            id: productId,
          },
          data: { ...body },
        });

        if (!product) {
          return new NextResponse(
            JSON.stringify({
              message: `No product found with the given ID → ${productId}`,
            }),
            { status: 400 }
          );
        }

        return new NextResponse(JSON.stringify(product), { status: 200 });
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
  const { id: productId } = params;
  const session = await getAuthSession();

  if (session) {
    try {
      if (session.user.isAdmin) {
        const product = await prisma.product.delete({
          where: {
            id: productId,
          },
        });

        if (!product) {
          return new NextResponse(
            JSON.stringify({
              message: `No product found with the given ID → ${productId}`,
            }),
            { status: 400 }
          );
        }

        return new NextResponse(JSON.stringify(product), { status: 200 });
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
