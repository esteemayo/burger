'use client';

import { useCallback } from 'react';

import Modal from '../modal/Modal';
import { useRecipient } from '@/hooks/useRecipientModal';

import './RecipientModal.scss';

const RecipientModal = () => {
  const isOpen = useRecipient((store) => store.isOpen);
  const onClose = useRecipient((store) => store.onClose);

  const onSubmit = useCallback(() => {
    console.log('submit');
  }, []);

  return (
    <Modal
      title='Update Recipient'
      actionLabel='Submit'
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={onSubmit}
    />
  );
};

export default RecipientModal;
