import { NextRequest, NextResponse } from 'next/server';

import { prisma } from '@/utils/connect';

export const POST = async (req: NextRequest) => {
  const { searchParams } = new URL(req.url);
  const searchQuery = searchParams.get('q');

  if (typeof searchQuery !== 'string') {
    throw new Error('Invalid request');
  }

  try {
    const products = await prisma.product.findMany({
      where: {
        OR: [
          {
            name: {
              contains: searchQuery,
              mode: 'insensitive',
            },
          },
          {
            desc: {
              contains: searchQuery,
              mode: 'insensitive',
            },
          },
        ],
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
