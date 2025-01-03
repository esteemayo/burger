import _ from 'lodash';
import { NextRequest, NextResponse } from 'next/server';

import { prisma } from '@/utils/connect';
import { getAuthSession } from '@/utils/auth';

interface IParams {
  params: {
    id: string;
  };
}

export const GET = async (req: NextRequest, { params }: IParams) => {
  const { id: userId } = params;

  try {
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
        { status: 404 }
      );
    }

    const userObj = {
      ...user,
      password: undefined,
    };

    return new NextResponse(JSON.stringify(userObj), { status: 200 });
  } catch (err: unknown) {
    return new NextResponse(
      JSON.stringify({ message: 'Something went wrong' }),
      { status: 500 }
    );
  }
};

export const PATCH = async (req: NextRequest, { params }: IParams) => {
  const { id: userId } = params;
  const session = await getAuthSession();

  if (session) {
    try {
      const body = await req.json();

      if (body.password || body.confirmPassword) {
        return new NextResponse(
          JSON.stringify({ message: 'This route is not for password updates' })
        );
      }

      if (session.user.isAdmin || session.user.id === userId) {
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
            { status: 404 }
          );
        }

        const filterBody = _.pick(body, [
          'name',
          'username',
          'email',
          'phone',
          'state',
          'city',
          'street',
          'address',
          'image',
        ]);

        const updatedUser = await prisma.user.update({
          where: {
            id: userId,
          },
          data: { ...filterBody },
        });

        const userObj = {
          ...updatedUser,
          password: undefined,
        };

        return new NextResponse(JSON.stringify(userObj), { status: 200 });
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

export const DELETE = async (req: NextRequest, { params }: IParams) => {
  const { id: userId } = params;
  const session = await getAuthSession();

  if (session) {
    try {
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
          { status: 404 }
        );
      }

      if (session.user.isAdmin || session.user.id === userId) {
        await prisma.user.delete({
          where: {
            id: userId,
          },
        });

        return new NextResponse(JSON.stringify({ messgae: 'User deleted!' }), {
          status: 200,
        });
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
