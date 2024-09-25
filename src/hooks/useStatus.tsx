'use client';

import { useCallback, useMemo } from 'react';

import { StatusType } from '@/types';
import { useStatusLists } from './useStatusLists';

export const useStatus = (status: StatusType) => {
  const { statusLists } = useStatusLists();

  const statusIndex = useMemo(() => {
    return statusLists.findIndex((item) => item === status);
  }, [status, statusLists]);

  const statusClass = useCallback(
    (index: number) => {
      if (index - statusIndex < 1) return 'done';
      if (index - statusIndex === 1) return 'inProgress';
      if (index - statusIndex > 1) return 'undone';
    },
    [statusIndex]
  );

  const statusLabel = useMemo(() => {
    if (status === 'not paid') return 'Order confirmed';
    if (status === 'preparing') return 'Start Production';
    if (status === 'on the way') return 'Dispatched item';
    if (status === 'delivered') return 'Product delivered';
  }, [status]);

  const statusClasses = useMemo(() => {
    if (status === 'not paid') return 'notPaid';
    if (status === 'on the way') return 'onTheWay';
    return status;
  }, [status]);

  const orderStatus = useMemo(() => {
    if (status === 'not paid') return 'has received';
    if (status === 'preparing') return 'is preparing';
    if (status === 'on the way') return 'has sent';
    if (status === 'delivered') return 'has delivered';
  }, [status]);

  return {
    statusClass,
    statusClasses,
    statusLabel,
    orderStatus,
  };
};
