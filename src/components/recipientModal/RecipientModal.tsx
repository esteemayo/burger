'use client';

import { useCallback, useState } from 'react';

import Input from '../input/Input';
import Modal from '../modal/Modal';

import { useRecipient } from '@/hooks/useRecipientModal';

import './RecipientModal.scss';

const initialState = {
  name: '',
  email: '',
  phone: '',
};

const initialErrors = {
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
    console.log('submit');
  }, []);

  let bodyContent: JSX.Element;

  bodyContent = (
    <div className='recipientModal'>
      <Input
        name='name'
        label='Name'
        placeholder='Name'
        onChange={handleChange}
      />
      <Input
        name='email'
        type='email'
        label='Email address'
        placeholder='Email address'
        onChange={handleChange}
      />
      <Input
        name='phone'
        type='tel'
        label='Phone Number'
        placeholder='Phone number'
        onChange={handleChange}
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
