'use client';

import { useMutation, useQueryClient } from '@tanstack/react-query';

import { updateOrder } from '@/services/orderService';

export const useUpdateStatus = (orderId: string, status: string) => {
  const queryClient = useQueryClient();

  const { mutate } = useMutation({
    mutationFn: async () => {
      const { data } = await updateOrder(orderId, { status });
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
