'use client';

import { useCallback } from 'react';

import Modal from '../modal/Modal';
import { useAddressModal } from '@/hooks/useAddressModal';

import './AddressModal.scss';

const AddressModal = () => {
  const isOpen = useAddressModal((store) => store.isOpen);
  const onClose = useAddressModal((store) => store.onClose);

  const onSubmit = useCallback(() => {
    console.log('clicked');
  }, []);

  return (
    <Modal
      isOpen={isOpen}
      title='Add Address'
      actionLabel='Use this address'
      onClose={onClose}
      onSubmit={onSubmit}
    />
  );
};

export default AddressModal;
