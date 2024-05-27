import { NextRequest, NextResponse } from 'next/server';

import { prisma } from '@/utils/connect';

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
  try {
    const body = await req.json();

    const product = await prisma.product.create({
      data: { ...body },
    });

    return new NextResponse(JSON.stringify(product), { status: 201 });
  } catch (err: unknown) {
    return new NextResponse(
      JSON.stringify({ message: 'Something went wrong' }),
      { status: 500 }
    );
  }
};
