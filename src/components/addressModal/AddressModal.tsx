'use client';

import { useCallback, useState } from 'react';

import Input from '../input/Input';
import Modal from '../modal/Modal';

import { AddressData, AddressErrors } from '@/types';
import { useAddressModal } from '@/hooks/useAddressModal';

import './AddressModal.scss';

const initialState: AddressData = {
  state: '',
  city: '',
  street: '',
};

const initialErrors: AddressErrors = {
  state: '',
  city: '',
  street: '',
};

const AddressModal = () => {
  const isOpen = useAddressModal((store) => store.isOpen);
  const onClose = useAddressModal((store) => store.onClose);

  const [data, setData] = useState(initialState);
  const [errors, setErrors] = useState(initialErrors);

  const handleChange = useCallback(
    ({ target: input }: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = input;

      setData((prev) => {
        return { ...prev, [name]: value };
      });
    },
    []
  );

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
        onChange={handleChange}
      />

      <Input
        name='city'
        label='City'
        placeholder='City'
        onChange={handleChange}
      />

      <Input
        name='street'
        label='Street'
        placeholder='Street'
        onChange={handleChange}
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
