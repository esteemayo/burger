import { StatusType } from '@/types';

export const validateStatusInput = (
  status: string,
  statusLists: StatusType
) => {
  let error: string | undefined;

  if (status.length < 1) {
    error = 'Status must not be empty';
  }

  if (!statusLists.includes(status)) {
    error = 'Invalid order status entered';
  }

  return error;
};