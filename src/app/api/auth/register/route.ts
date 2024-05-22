import bcrypt from 'bcryptjs';
import { NextRequest, NextResponse } from 'next/server';

import { prisma } from '@/utils/connect';

export const POST = async (req: NextRequest) => {
  const body = await req.json();

  try {
    const hashedPassword = await bcrypt.hash(body.password, 12);

    const newUser = {
      ...body,
      password: hashedPassword,
    };

    const user = await prisma.user.create({
      data: newUser,
    });

    if (user) {
      return new NextResponse(JSON.stringify(user), { status: 201 });
    }
  } catch (err) {
    return new NextResponse(
      JSON.stringify({ message: 'Something went wrong' }),
      { status: 500 }
    );
  }
};
