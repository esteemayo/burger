import { NextRequest, NextResponse } from 'next/server';

import { prisma } from '@/utils/connect';
import { getAuthSession } from '@/utils/auth';

interface IParams {
  params: {
    id: string;
  };
}

export const PATCH = async (req: NextRequest, { params }: IParams) => {
  const { id: productId } = params;
  const session = await getAuthSession();

  if (session) {
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

      const likeIndex = product.likes.findIndex(
        (userId) => userId === session.user.id
      );

      if (likeIndex === -1) {
        product.likes.push(session.user.id);
      } else {
        product.likes = product.likes.filter(
          (userId) => userId !== session.user.id
        );
      }

      const updatedProduct = await prisma.product.update({
        where: {
          id: productId,
        },
        data: { ...product },
      });

      return new NextResponse(JSON.stringify(updatedProduct), { status: 200 });
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
