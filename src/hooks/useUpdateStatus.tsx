'use client';

import { useMutation, useQueryClient } from '@tanstack/react-query';

import { updateOrder } from '@/services/orderService';

export const useUpdateStatus = () => {
  const queryClient = useQueryClient();

  const { mutate } = useMutation({
    mutationFn: async ({
      actionId,
      status,
    }: {
      actionId: string;
      status: string;
    }) => {
      const { data } = await updateOrder(actionId, { status });
      return data;
    },
    onSuccess() {
      queryClient.invalidateQueries({ queryKey: ['orders'] });
    },
  });

  return {
    mutate,
  };
};
