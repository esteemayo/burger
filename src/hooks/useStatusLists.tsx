'use client';

import { useMemo } from 'react';

import { StatusType } from '@/types';

export const useStatusLists = () => {
  const statusLists: StatusType[] = useMemo(
    () => ['not paid', 'preparing', 'on the way', 'delivered'],
    []
  );
  return {
    statusLists,
  };
};
