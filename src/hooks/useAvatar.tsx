'use client';

import { useMemo } from 'react';
import { useSession } from 'next-auth/react';

export const useAvatar = () => {
  const { data: session } = useSession();

  const currentUser = session?.user;

  const avatar = useMemo(() => {
    if (currentUser?.image) {
      return currentUser.image;
    } else {
      if (currentUser?.gender === 'MALE') {
        return '/img/male.png';
      } else if (currentUser?.gender === 'FEMALE') {
        return '/img/female.png';
      } else {
        return '/img/default.png';
      }
    }
  }, [currentUser]);

  return {
    avatar,
  };
};
