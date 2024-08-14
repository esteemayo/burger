'use client';

import { useMemo } from 'react';

export const useStatusLists = () => {
  const statusLists = useMemo(
    () => ['not paid', 'preparing', 'on the way', 'delivered'],
    []
  );
  return {
    statusLists,
  };
};
