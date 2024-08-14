'use client';

import { useMemo } from 'react';

export const validateStatusInput = (status: string) => {
  const statusLists = useMemo(
    () => ['not paid', 'preparing', 'on the way', 'delivered'],
    []
  );

  let error: string | undefined;

  if (status.length < 1) {
    error = 'Status must not be empty';
  } else if (!statusLists.includes(status)) {
    error = 'Invalid order status entered';
  }

  return error;
};
