import { NextRequest, NextResponse } from 'next/server';

import { prisma } from '@/utils/connect';
import { getAuthSession } from '@/utils/auth';

interface IParams {
  params: {
    id: string;
  };
}

export const POST = async (req: NextRequest, { params }: IParams) => {
  const { id: productId } = params;
  const session = await getAuthSession();

  if (session) {
    try {
      const body = await req.json();

      if (!session.user.isAdmin) {
        // if (!body.name) body.name = session.user.name;
        // if (!body.email) body.email = session.user.email;
        if (!body.userId) body.userId = session.user.id;
        if (!body.productId) body.productId = productId;

        console.log(body);

        const review = await prisma.review.create({
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
