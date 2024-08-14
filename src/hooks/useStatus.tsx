'use client';

import { useCallback, useMemo } from 'react';

import { StatusType } from '@/types';

export const useStatus = (status: StatusType) => {
  const statusLists = useMemo(
    () => ['not paid', 'preparing', 'on the way', 'delivered'],
    []
  );

  const statusIndex = useMemo(() => {
    return statusLists.findIndex((item) => item === status);
  }, [status]);

  const statusClass = useCallback(
    (index: number) => {
      if (index - statusIndex < 1) return 'done';
      if (index - statusIndex === 1) return 'inProgress';
      if (index - statusIndex > 1) return 'undone';
    },
    [statusIndex]
  );

  return {
    statusClass,
    statusLists,
  };
};
