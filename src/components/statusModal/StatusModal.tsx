'use client';

import { toast } from 'react-toastify';
import { useCallback, useEffect, useState } from 'react';

import Input from '../input/Input';
import Modal from '../modal/Modal';

import { useStatusModal } from '@/hooks/useStatusModal';

const StatusModal = () => {
  const isOpen = useStatusModal((store) => store.isOpen);
  const order = useStatusModal((store) => store.order);
  const onClose = useStatusModal((store) => store.onClose);

  const [status, setStatus] = useState('');

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setStatus(e.target.value);
  }, []);

  const onSubmit = useCallback(() => {
    console.log(status);

    setStatus('');
    onClose();

    toast.success('Status changed!');
  }, [onClose, status]);

  useEffect(() => {
    setStatus(order?.status || '');
  }, [order?.status]);

  let bodyContent: JSX.Element | undefined;

  bodyContent = (
    <Input value={status} placeholder='status' onChange={handleChange} />
  );

  return (
    <Modal
      isOpen={isOpen}
      title="Edit order's status"
      actionLabel='Update'
      body={bodyContent}
      size='full'
      onClose={onClose}
      onSubmit={onSubmit}
    />
  );
};

export default StatusModal;
