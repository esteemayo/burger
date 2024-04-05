'use client';

import { useCallback } from 'react';

import Input from '../input/Input';
import Modal from '../modal/Modal';

import { useAddressModal } from '@/hooks/useAddressModal';

import './AddressModal.scss';

const AddressModal = () => {
  const isOpen = useAddressModal((store) => store.isOpen);
  const onClose = useAddressModal((store) => store.onClose);

  const onSubmit = useCallback(() => {
    console.log('clicked');
  }, []);

  let bodyContent: JSX.Element;

  bodyContent = (
    <>
      <Input
        name='state'
        label='State'
        placeholder='State'
        onChange={() => console.log('first')}
      />

      <Input
        name='city'
        label='City'
        placeholder='City'
        onChange={() => console.log('first')}
      />

      <Input
        name='address'
        label='Address'
        placeholder='Address'
        onChange={() => console.log('first')}
      />
    </>
  );

  return (
    <Modal
      isOpen={isOpen}
      title='Add Address'
      actionLabel='Use this address'
      body={bodyContent}
      onClose={onClose}
      onSubmit={onSubmit}
    />
  );
};

export default AddressModal;
