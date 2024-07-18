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
    const reviews = await prisma.review.findMany({
      where: {
        productId,
      },
      orderBy: {
        createdAt: 'desc',
      },
    });

    return new NextResponse(JSON.stringify(reviews), { status: 200 });
  } catch (err: unknown) {
    return new NextResponse(
      JSON.stringify({ message: 'Something went wrong' }),
      { status: 500 }
    );
  }
};

export const POST = async (req: NextRequest, { params }: IParams) => {
  const { id: productId } = params;
  const session = await getAuthSession();

  if (session) {
    try {
      const body = await req.json();

      let review = await prisma.review.findUnique({
        where: {
          productId,
          userId: session.user.id,
        },
      });

      console.log(review);

      if (review) {
        return new NextResponse(
          JSON.stringify({
            message: 'You have already created a review for this product',
          }),
          { status: 403 }
        );
      }

      if (!session.user.isAdmin) {
        if (!body.userId) body.userId = session.user.id;
        if (!body.productId) body.productId = productId;

        review = await prisma.review.create({
          data: {
            ...body,
          },
        });

        await prisma.product.update({
          where: {
            id: productId,
          },
          data: {
            ratingsAverage: {
              increment: body.rating,
            },
            ratingsQuantity: {
              increment: 1,
            },
          },
        });

        return new NextResponse(JSON.stringify(review), { status: 201 });
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
