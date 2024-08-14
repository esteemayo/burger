'use client';

import { useCallback, useMemo } from 'react';

import { StatusType } from '@/types';
import { useStatusLists } from './useStatusLists';

export const useStatus = (status: StatusType) => {
  const { statusLists } = useStatusLists();

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
  };
};
