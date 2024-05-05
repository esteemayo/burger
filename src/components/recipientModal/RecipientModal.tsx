'use client';

import { useCallback, useState } from 'react';

import Input from '../input/Input';
import Modal from '../modal/Modal';
import PhoneInput from '../phoneInput/PhoneInput';

import { useRecipient } from '@/hooks/useRecipientModal';
import { validateRecipientInputs } from '@/validations/recipient';

import { RecipientData, RecipientErrors } from '@/types';

import './RecipientModal.scss';

const initialState: RecipientData = {
  name: '',
  email: '',
  phone: '',
};

const initialErrors: RecipientErrors = {
  name: '',
  email: '',
  phone: '',
};

const RecipientModal = () => {
  const isOpen = useRecipient((store) => store.isOpen);
  const onClose = useRecipient((store) => store.onClose);

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
    const errors = validateRecipientInputs(data);
    if (Object.keys(errors).length > 0) return setErrors(errors);
    setErrors(initialErrors);

    console.log(data);
    setData(initialState);
  }, [data]);

  const { name, email, phone } = data;

  let bodyContent: JSX.Element;

  bodyContent = (
    <>
      <Input
        name='name'
        label='Name'
        value={name}
        placeholder='Name'
        onChange={handleChange}
        error={errors.name}
      />
      <Input
        name='email'
        type='email'
        label='Email address'
        value={email}
        placeholder='Email address'
        onChange={handleChange}
        error={errors.email}
        dimension='large'
      />
      <PhoneInput
        name='phone'
        type='number'
        label='Phone Number'
        value={phone}
        placeholder='818 000 0000'
        onChange={handleChange}
        error={errors.phone}
      />
    </>
  );

  return (
    <Modal
      isOpen={isOpen}
      title='Update Recipient'
      size='full'
      actionLabel='Submit'
      body={bodyContent}
      onClose={onClose}
      onSubmit={onSubmit}
    />
  );
};

export default RecipientModal;
