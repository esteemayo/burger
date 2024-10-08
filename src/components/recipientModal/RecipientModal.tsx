'use client';

import { useSession } from 'next-auth/react';
import { toast } from 'react-toastify';
import { useCallback, useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

import Modal from '../modal/Modal';
import RecipientInputs from '../recipientInputs/RecipientInputs';

import { useRecipient } from '@/hooks/useRecipientModal';
import { validateRecipientInputs } from '@/validations/recipient';

import { updateUserData } from '@/services/userService';
import { formatPhone } from '@/utils/formatPhone';
import { RecipientData, RecipientErrors } from '@/types';

import './RecipientModal.scss';

const initialState: RecipientData = {
  name: '',
  email: '',
  phone: '',
};

const RecipientModal = () => {
  const router = useRouter();
  const { data: session, update } = useSession();

  const isOpen = useRecipient((store) => store.isOpen);
  const onClose = useRecipient((store) => store.onClose);

  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState(initialState);
  const [errors, setErrors] = useState<RecipientErrors>({});

  const userId = session?.user.id;
  const { formattedPhone, formattedValue } = formatPhone(data.phone);

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

    const errors = validateRecipientInputs(data);
    if (Object.keys(errors).length > 0) return setErrors(errors);
    setErrors({});

    setIsLoading(true);

    if (data.phone.startsWith('1')) {
      data.phone = '';

      toast.error('Phone number cannot start with 1');
      setIsLoading(false);
      return;
    }

    try {
      const newData = {
        ...data,
        phone: formattedPhone,
      };

      const res = await updateUserData(userId!, { ...newData });

      const updatedData = {
        name: res.data.name,
        email: res.data.email,
        phone: res.data.phone,
      };

      update({ ...updatedData });
      setData(initialState);
      onClose();

      toast.success('Data updated');
    } catch (err: unknown) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  }, [data, formattedPhone, onClose, router, session, update, userId]);

  useEffect(() => {
    setTimeout(() => {
      if (Object.keys(errors).length > 0) {
        setErrors({});
      }
    }, 5000);
  }, [errors]);

  const { name, email } = data;

  let bodyContent: JSX.Element | undefined;

  bodyContent = (
    <RecipientInputs
      name={name}
      email={email}
      phone={formattedValue}
      errors={errors}
      onChange={handleChange}
    />
  );

  return (
    <Modal
      isOpen={isOpen}
      title='Update Recipient'
      size='full'
      disabled={isLoading}
      actionLabel='Submit'
      body={bodyContent}
      onClose={onClose}
      onSubmit={onSubmit}
    />
  );
};

export default RecipientModal;
