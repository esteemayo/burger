'use client';

import { useCallback, useState } from 'react';

import Input from '../input/Input';
import Modal from '../modal/Modal';

import { useStatusModal } from '@/hooks/useStatusModal';

import './StatusModal.scss';

const StatusModal = () => {
  const isOpen = useStatusModal((store) => store.isOpen);
  const onClose = useStatusModal((store) => store.onClose);

  const [status, setStatus] = useState('');

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setStatus(e.target.value);
  }, []);

  const onSubmit = useCallback(() => {
    console.log(status);
  }, [status]);

  let bodyContent: JSX.Element | undefined;

  bodyContent = (
    <Input value={status} placeholder='status' onChange={handleChange} />
  );

  return (
    <Modal
      isOpen={isOpen}
      title='Edit order status'
      actionLabel='Update'
      body={bodyContent}
      size='full'
      onClose={onClose}
      onSubmit={onSubmit}
    />
  );
};

export default StatusModal;
