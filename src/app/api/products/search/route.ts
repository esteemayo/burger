import { NextRequest, NextResponse } from 'next/server';

import { prisma } from '@/utils/connect';

export const GET = async (req: NextRequest) => {
  const { searchParams } = new URL(req.url);

  const searchQuery = searchParams.get('q');
  const page = searchParams.get('page') || 1;

  const limit = 6;
  const skip = (Number(page) - 1) * limit;

  if (typeof searchQuery !== 'string') {
    throw new Error('Invalid request');
  }

  try {
    const products = await prisma.product.findMany({
      skip,
      take: limit,
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
      orderBy: [
        {
          name: 'asc',
        },
        {
          createdAt: 'desc',
        },
      ],
    });

    const productLists = await prisma.product.findMany({
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

    return new NextResponse(
      JSON.stringify({ products, totalProducts: productLists.length }),
      {
        status: 200,
      }
    );
  } catch (err: unknown) {
    return new NextResponse(
      JSON.stringify({ message: 'Something went wrong' }),
      { status: 500 }
    );
  }
};
