'use client';

import { useCallback, useState } from 'react';

import Input from '../input/Input';
import Modal from '../modal/Modal';

import { useRecipient } from '@/hooks/useRecipientModal';
import { RecipientData, RecipientErrors } from '@/types';

import './RecipientModal.scss';
import { validateRecipientInputs } from '@/validations/recipient';

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
    <div className='recipientModal'>
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
      />
      <Input
        name='phone'
        type='tel'
        label='Phone Number'
        value={phone}
        placeholder='Phone number'
        onChange={handleChange}
        error={errors.phone}
      />
    </div>
  );

  return (
    <Modal
      isOpen={isOpen}
      title='Update Recipient'
      actionLabel='Submit'
      body={bodyContent}
      onClose={onClose}
      onSubmit={onSubmit}
    />
  );
};

export default RecipientModal;
