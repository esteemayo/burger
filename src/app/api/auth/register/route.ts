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
      confirmPassword: undefined,
    };

    const user = await prisma.user.create({
      data: newUser,
    });

    if (user) {
      const userObj = {
        ...user,
        password: undefined,
      };

      return new NextResponse(JSON.stringify(userObj), { status: 201 });
    }
  } catch (err) {
    return new NextResponse(
      JSON.stringify({ message: 'Something went wrong' }),
      { status: 500 }
    );
  }
};
