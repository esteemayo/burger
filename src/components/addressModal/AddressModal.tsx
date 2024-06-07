'use client';

import { useSession } from 'next-auth/react';
import { toast } from 'react-toastify';
import { useCallback, useState } from 'react';
import { useRouter } from 'next/navigation';

import Input from '../input/Input';
import Modal from '../modal/Modal';

import { useAddressModal } from '@/hooks/useAddressModal';
import { validateAddressInputs } from '@/validations/address';

import { AddressData, AddressErrors } from '@/types';
import { updateUserData } from '@/services/userService';

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
  const router = useRouter();
  const { data: session } = useSession();
  const userId = session?.user.id;

  const isOpen = useAddressModal((store) => store.isOpen);
  const onClose = useAddressModal((store) => store.onClose);

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

    const errors = validateAddressInputs(data);
    if (Object.keys(errors).length > 0) return setErrors(errors);
    setErrors(initialErrors);

    setIsLoading(true);

    try {
      const res = await updateUserData(userId!, { ...data });
      console.log(res);
      setData(initialState);
      onClose();

      toast.success('Address updated');
      router.refresh();
    } catch (err: unknown) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  }, [data, onClose, router, session, userId]);

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
      size='full'
      loading={isLoading}
      actionLabel='Use this address'
      body={bodyContent}
      onClose={onClose}
      onSubmit={onSubmit}
    />
  );
};

export default AddressModal;
