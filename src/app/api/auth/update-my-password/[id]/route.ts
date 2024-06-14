import bcrypt from 'bcryptjs';
import _ from 'lodash';
import { NextRequest, NextResponse } from 'next/server';

import { prisma } from '@/utils/connect';
import { getAuthSession } from '@/utils/auth';

interface IParams {
  params: {
    id: string;
  };
}

export const PATCH = async (req: NextRequest, { params }: IParams) => {
  const { id: userId } = params;
  const session = await getAuthSession();

  if (session) {
    try {
      const body = await req.json();

      const user = await prisma.user.findUnique({
        where: {
          id: userId,
        },
      });

      if (!user) {
        return new NextResponse(
          JSON.stringify({
            message: `No user found with the given ID → ${userId}`,
          }),
          { status: 400 }
        );
      }

      const updPassword = _.pick(body, ['password', 'confirmPassword']);
      const comparePassword = await bcrypt.compare(
        updPassword.password,
        user?.password!
      );

      if (!comparePassword) {
        return new NextResponse(
          JSON.stringify({
            message: 'Your password is wrong',
          }),
          { status: 401 }
        );
      }

      if (session.user.isAdmin || session.user.id === userId) {
        let updatedUser = await prisma.user.update({
          where: {
            id: userId,
          },
          data: { ...updPassword },
        });

        updatedUser = {
          ...updatedUser,
          password: undefined,
        };

        return new NextResponse(JSON.stringify(updatedUser), { status: 200 });
      }
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
