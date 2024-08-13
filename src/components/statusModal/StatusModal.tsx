'use client';

import { useCallback, useEffect, useMemo, useState } from 'react';
import { toast } from 'react-toastify';
import { useMutation, useQueryClient } from '@tanstack/react-query';

import Input from '../input/Input';
import Modal from '../modal/Modal';

import { updateOrder } from '@/services/orderService';
import { useStatusModal } from '@/hooks/useStatusModal';

const StatusModal = () => {
  const queryClient = useQueryClient();

  const isOpen = useStatusModal((store) => store.isOpen);
  const order = useStatusModal((store) => store.order);
  const onClose = useStatusModal((store) => store.onClose);

  const { mutate } = useMutation({
    mutationFn: async ({
      status,
      orderId,
    }: {
      status: string;
      orderId: string;
    }) => {
      const { data } = await updateOrder(orderId, { status });
      return data;
    },
    onSuccess() {
      queryClient.invalidateQueries({ queryKey: ['orders'] });
    },
  });

  const [status, setStatus] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const statusLists = useMemo(
    () => ['not paid', 'preparing', 'on the way', 'delivered'],
    []
  );

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setStatus(e.target.value);
  }, []);

  const onSubmit = useCallback(async () => {
    const orderId = order?.id as string;

    if (status.length < 1) {
      toast.error('Status must not be empty');
      return;
    }

    if (!statusLists.includes(status)) {
      toast.error('Invalid order status entered');
      setStatus('');
      return;
    }

    setIsLoading(true);

    setTimeout(() => {
      mutate({ status, orderId });
      setStatus('');
      toast.success('Status changed!');

      onClose();
      setIsLoading(false);
    }, 3000);
  }, [onClose, order, status]);

  useEffect(() => {
    setStatus(order?.status || '');
  }, [order?.status]);

  let bodyContent: JSX.Element | undefined;

  bodyContent = (
    <Input
      value={status}
      placeholder={order?.status ?? 'status'}
      onChange={handleChange}
    />
  );

  return (
    <Modal
      isOpen={true}
      title="Edit order's status"
      disabled={isLoading}
      actionLabel='Update'
      body={bodyContent}
      size='full'
      onClose={onClose}
      onSubmit={onSubmit}
    />
  );
};

export default StatusModal;
