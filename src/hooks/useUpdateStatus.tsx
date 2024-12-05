'use client';

import { toast } from 'react-toastify';
import { useMutation, useQueryClient } from '@tanstack/react-query';

import { updateOrder } from '@/services/orderService';

const updateOrderStatus = async ({
  actionId,
  status,
}: {
  actionId: string;
  status: string;
}) => {
  const { data } = await updateOrder(actionId, { status });
  return data;
};

export const useUpdateStatus = () => {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: async ({
      actionId,
      status,
    }: {
      actionId: string;
      status: string;
    }) => updateOrderStatus({ actionId, status }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['orders'] });
      toast.success('Status updated!');
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  return {
    mutation,
  };
};
