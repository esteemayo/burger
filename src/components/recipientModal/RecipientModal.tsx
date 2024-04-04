'use client';

import { useCallback } from 'react';

import Input from '../input/Input';
import Modal from '../modal/Modal';

import { useRecipient } from '@/hooks/useRecipientModal';

import './RecipientModal.scss';

const RecipientModal = () => {
  const isOpen = useRecipient((store) => store.isOpen);
  const onClose = useRecipient((store) => store.onClose);

  const onSubmit = useCallback(() => {
    console.log('submit');
  }, []);

  let bodyContent: JSX.Element;

  bodyContent = (
    <>
      <Input
        name='name'
        label='Name'
        placeholder='Name'
        onChange={() => console.log('first')}
      />
      <Input
        name='email'
        type='email'
        label='Email'
        placeholder='Email address'
        onChange={() => console.log('first')}
      />
      <Input
        name='phone'
        type='tel'
        label='Phone Number'
        placeholder='Phone number'
        onChange={() => console.log('first')}
      />
    </>
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
