import { NextRequest, NextResponse } from 'next/server';

import { prisma } from '@/utils/connect';
import { getAuthSession } from '@/utils/auth';

interface IParams {
  params: {
    id: string;
  };
}

export const GET = async (req: NextRequest, { params }: IParams) => {
  const { id: reviewId } = params;
  const session = await getAuthSession();

  if (session) {
    try {
      const review = await prisma.review.findUnique({
        where: {
          id: reviewId,
        },
      });

      if (!review) {
        return new NextResponse(
          JSON.stringify({
            message: `No review found with the given ID → ${reviewId}`,
          }),
          { status: 400 }
        );
      }

      return new NextResponse(JSON.stringify(review), { status: 200 });
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
