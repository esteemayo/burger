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

export const PATCH = async (req: NextRequest, { params }: IParams) => {
  const { id: reviewId } = params;
  const session = await getAuthSession();

  if (session) {
    try {
      const body = await req.json();

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

      if (session.user.isAdmin || session.user.id === review.userId) {
        const updatedReview = await prisma.review.update({
          where: {
            id: reviewId,
          },
          data: { ...body },
        });

        return new NextResponse(JSON.stringify(updatedReview), { status: 200 });
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
  const { id: reviewId } = params;
  const session = await getAuthSession();

  if (session) {
    try {
      let review = await prisma.review.findUnique({
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

      if (session.user.isAdmin || session.user.id === review.userId) {
        review = await prisma.review.delete({
          where: {
            id: reviewId,
          },
        });

        return new NextResponse(JSON.stringify(review), { status: 204 });
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
