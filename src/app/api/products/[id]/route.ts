import { NextRequest, NextResponse } from 'next/server';

import { prisma } from '@/utils/connect';

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
