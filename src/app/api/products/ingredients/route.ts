import { prisma } from '@/utils/connect';
import { NextRequest, NextResponse } from 'next/server';

export const GET = async (req: NextRequest) => {
  const { searchParams } = new URL(req.url);
  const params = searchParams.get('ingredients');

  const ingredients = params?.split(',');

  try {
    const products = await prisma.product.findMany({
      where: {
        OR: ingredients?.map((ingredient) => ({
          ingredients: ingredient,
        })),
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
