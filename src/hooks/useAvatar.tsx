'use client';

import { useMemo } from 'react';

import { CurrentUserType, UserType } from '@/types';

export const useAvatar = (user: CurrentUserType | UserType | undefined) => {
  const avatar = useMemo(() => {
    if (user?.image) {
      return user.image;
    } else {
      if (user?.gender === 'MALE') {
        return '/img/male.png';
      } else if (user?.gender === 'FEMALE') {
        return '/img/female.png';
      } else {
        return '/img/default.png';
      }
    }
  }, [user]);

  return {
    avatar,
  };
};
