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
      throw new Error(`No product found with the given ID → ${productId}`);
    }

    return new NextResponse(JSON.stringify(product), { status: 200 });
  } catch (err) {
    console.log(err);
    return new NextResponse(
      JSON.stringify({ message: 'Something went wrong' }),
      { status: 500 }
    );
  }
};
