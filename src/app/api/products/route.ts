import { NextRequest, NextResponse } from 'next/server';

import { prisma } from '@/utils/connect';
import { getAuthSession } from '@/utils/auth';

export const GET = async (req: NextRequest) => {
  const { searchParams } = new URL(req.url);
  const isFeatured = searchParams.get('featured');

  try {
    const products = await prisma.product.findMany({
      where: {
        ...(isFeatured ? { isFeatured: true } : {}),
      },
    });

    return new NextResponse(JSON.stringify(products), { status: 200 });
  } catch (err: unknown) {
    return new NextResponse(
      JSON.stringify({ message: 'Something went wrong' }),
      { status: 500 }
    );
  }
};

export const POST = async (req: NextRequest) => {
  const session = await getAuthSession();

  if (session) {
    try {
      if (session.user.isAdmin) {
        const body = await req.json();

        const product = await prisma.product.create({
          data: { ...body },
        });

        return new NextResponse(JSON.stringify(product), { status: 201 });
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
