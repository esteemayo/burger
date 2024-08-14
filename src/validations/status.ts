import { useMemo } from 'react';

const statusLists = useMemo(
  () => ['not paid', 'preparing', 'on the way', 'delivered'],
  []
);

export const validateStatusInput = (status: string) => {
  let error: string | undefined;

  if (status.length < 1) {
    error = 'Status must not be empty';
  } else if (!statusLists.includes(status)) {
    error = 'Invalid order status entered';
  }

  return error;
};
