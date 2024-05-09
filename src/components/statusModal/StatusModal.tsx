'use client';

import { useCallback } from 'react';

import Modal from '../modal/Modal';
import { useStatusModal } from '@/hooks/useStatusModal';

import './StatusModal.scss';

const StatusModal = () => {
  const isOpen = useStatusModal((store) => store.isOpen);
  const onClose = useStatusModal((store) => store.onClose);

  const onSubmit = useCallback(() => {
    console.log('status');
  }, []);

  return <Modal isOpen={isOpen} onClose={onClose} onSubmit={onSubmit} />;
};

export default StatusModal;
