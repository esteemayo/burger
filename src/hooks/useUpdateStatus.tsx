'use client';

import { useMutation, useQueryClient } from '@tanstack/react-query';

import { updateOrder } from '@/services/orderService';

export const useUpdateStatus = ({ orderId, status }) => {
  const queryClient = useQueryClient();

  const { mutate } = useMutation({
    mutationFn: async ({
      orderId,
      status,
    }: {
      orderId: string;
      status: string;
    }) => {
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
