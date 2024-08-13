'use client';

import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';
import { useCallback, useEffect, useMemo, useState } from 'react';

import Input from '../input/Input';
import Modal from '../modal/Modal';

import { updateOrder } from '@/services/orderService';
import { useStatusModal } from '@/hooks/useStatusModal';

const StatusModal = () => {
  const router = useRouter();

  const isOpen = useStatusModal((store) => store.isOpen);
  const order = useStatusModal((store) => store.order);
  const onClose = useStatusModal((store) => store.onClose);

  const [status, setStatus] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const statusLists = useMemo(
    () => ['not paid', 'preparing', 'on the way', 'delivered'],
    []
  );

  const validateInput = useCallback(() => {
    if (status.length < 1) {
      toast.error('Status must not be empty');
      return;
    }

    if (!statusLists.includes(status)) {
      toast.error('Invalid order status entered');
      setStatus('');
      return;
    }
  }, [status]);

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setStatus(e.target.value);
  }, []);

  const onSubmit = useCallback(async () => {
    const orderId = order?.id;

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

    try {
      await updateOrder(orderId!, { status });

      setStatus('');
      router.refresh();
      toast.success('Status changed!');

      onClose();
    } catch (err: unknown) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  }, [onClose, order, router, status]);

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
