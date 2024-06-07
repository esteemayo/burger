'use client';

import { useSession } from 'next-auth/react';
import { toast } from 'react-toastify';
import { useCallback, useState } from 'react';
import { useRouter } from 'next/navigation';

import Input from '../input/Input';
import Modal from '../modal/Modal';
import PhoneInput from '../phoneInput/PhoneInput';

import { useRecipient } from '@/hooks/useRecipientModal';
import { validateRecipientInputs } from '@/validations/recipient';

import { updateUserData } from '@/services/userService';
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
  const router = useRouter();
  const { data: session } = useSession();
  const userId = session?.user.id;

  const isOpen = useRecipient((store) => store.isOpen);
  const onClose = useRecipient((store) => store.onClose);

  const [isLoading, setIsLoading] = useState(false);
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

  const onSubmit = useCallback(async () => {
    if (!session) {
      router.push('/login');
      return;
    }

    const errors = validateRecipientInputs(data);
    if (Object.keys(errors).length > 0) return setErrors(errors);
    setErrors(initialErrors);

    setIsLoading(true);

    try {
      const res = await updateUserData(userId!, { ...data });
      console.log(res.data);
      setData(initialState);
      toast.success('Information updated');
      router.refresh();
      onClose();
    } catch (err: unknown) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  }, [data, onClose, router, session, userId]);

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
      loading={isLoading}
      actionLabel='Submit'
      body={bodyContent}
      onClose={onClose}
      onSubmit={onSubmit}
    />
  );
};

export default RecipientModal;
