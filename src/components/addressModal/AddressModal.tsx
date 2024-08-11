'use client';

import { useSession } from 'next-auth/react';
import { toast } from 'react-toastify';
import { useCallback, useState } from 'react';
import { useRouter } from 'next/navigation';

import Modal from '../modal/Modal';
import AddressInputs from '../addressInputs/AddressInputs';

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
  const { data: session, update } = useSession();
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
      onClose();
      return;
    }

    const errors = validateAddressInputs(data);
    if (Object.keys(errors).length > 0) return setErrors(errors);
    setErrors(initialErrors);

    setIsLoading(true);

    try {
      const res = await updateUserData(userId!, { ...data });

      const updatedData = {
        state: res.data.state,
        city: res.data.city,
        street: res.data.street,
      };

      update({ ...updatedData });
      setData(initialState);
      onClose();

      toast.success('Address updated');
    } catch (err: unknown) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  }, [data, onClose, router, session, update, userId]);

  const { state, city, street } = data;

  let bodyContent: JSX.Element | undefined;

  bodyContent = (
    <AddressInputs
      city={city}
      state={state}
      street={street}
      errors={errors}
      onChange={handleChange}
    />
  );

  return (
    <Modal
      isOpen={isOpen}
      title='Add Address'
      size='full'
      disabled={isLoading}
      actionLabel='Use this address'
      body={bodyContent}
      onClose={onClose}
      onSubmit={onSubmit}
    />
  );
};

export default AddressModal;
