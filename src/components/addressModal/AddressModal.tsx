'use client';

import { useCallback, useState } from 'react';

import Input from '../input/Input';
import Modal from '../modal/Modal';

import { useAddressModal } from '@/hooks/useAddressModal';
import { validateAddressInputs } from '@/validations/address';

import { AddressData, AddressErrors } from '@/types';

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
    const errors = validateAddressInputs(data);
    if (Object.keys(errors).length > 0) return setErrors(errors);

    setErrors(initialErrors);

    console.log({ ...data });
    setData(initialState);
  }, [data]);

  const { state, city, street } = data;

  let bodyContent: JSX.Element;

  bodyContent = (
    <>
      <Input
        name='state'
        label='State'
        value={state}
        placeholder='State'
        onChange={handleChange}
        error={errors.state}
      />
      <Input
        name='city'
        label='City'
        value={city}
        placeholder='City'
        onChange={handleChange}
        error={errors.city}
      />
      <Input
        name='street'
        label='Street'
        value={street}
        placeholder='Street'
        onChange={handleChange}
        error={errors.street}
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
