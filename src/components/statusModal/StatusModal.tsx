'use client';

import { toast } from 'react-toastify';
import { useCallback, useEffect, useState } from 'react';

import Input from '../input/Input';
import Modal from '../modal/Modal';

import { useStatusModal } from '@/hooks/useStatusModal';
import { useStatus } from '@/hooks/useStatus';
import { useUpdateStatus } from '@/hooks/useUpdateStatus';

import { validateStatusInput } from '@/validations/status';

const StatusModal = () => {
  const { statusLists } = useStatus();
  const { mutate } = useUpdateStatus();

  const isOpen = useStatusModal((store) => store.isOpen);
  const order = useStatusModal((store) => store.order);
  const onClose = useStatusModal((store) => store.onClose);

  const [status, setStatus] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setStatus(e.target.value);
  }, []);

  const onSubmit = useCallback(async () => {
    const actionId = order?.id as string;

    const error = validateStatusInput(status, statusLists);
    if (error) {
      setError(error);
      status && setStatus('');
      return;
    }

    setError('');

    setIsLoading(true);

    setTimeout(() => {
      mutate({ status, actionId });
      setStatus('');
      toast.success('Status changed!');

      onClose();
      setIsLoading(false);
    }, 3000);
  }, [onClose, order, status]);

  useEffect(() => {
    setStatus(order?.status || '');
  }, [order?.status]);

  useEffect(() => {
    setTimeout(() => {
      if (error) return setError('');
    }, 5000);
  }, [error]);

  let bodyContent: JSX.Element | undefined;

  bodyContent = (
    <Input
      value={status}
      placeholder={order?.status ?? 'status'}
      onChange={handleChange}
      error={error}
    />
  );

  return (
    <Modal
      isOpen={isOpen}
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
