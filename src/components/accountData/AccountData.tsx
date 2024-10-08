'use client';

import { useSession } from 'next-auth/react';
import { toast } from 'react-toastify';
import { useCallback, useState } from 'react';

import AccountAvatar from '../accountAvatar/AccountAvatar';
import AccountDataForm from '../accountDataForm/AccountDataForm';

import { useForm } from '@/hooks/useForm';
import { useAvatar } from '@/hooks/useAvatar';

import { upload } from '@/utils/upload';
import { validateAccountData } from '@/validations/accountData';

import { updateUserData } from '@/services/userService';
import { formatPhone } from '@/utils/formatPhone';
import { CurrentUserType, UserData, UserDataErrors } from '@/types';

interface AccountDataProps {
  currentUser: CurrentUserType | undefined;
}

const initialState: UserData = {
  name: '',
  email: '',
  phone: '',
  address: '',
};

const initialErrors: UserDataErrors = {
  name: '',
  email: '',
  phone: '',
  address: '',
};

const AccountData = ({ currentUser }: AccountDataProps) => {
  const { update } = useSession();
  const { avatar } = useAvatar(currentUser);

  const [file, setFile] = useState<File>();
  const [isLoading, setIsLoading] = useState(false);

  const handleFile = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const target = e.target as HTMLInputElement;
    const file = (target.files as FileList)[0];
    setFile(file);
  }, []);

  const onSubmitHandler = async () => {
    setIsLoading(true);

    if (data.phone.startsWith('1')) {
      data.phone = '';

      toast.error('Phone number cannot start with 1');
      setIsLoading(false);
      return;
    }

    const userData = {
      ...data,
      phone: formattedPhone,
    };

    try {
      if (file) {
        const url = await upload(file);
        userData.image = url;
      }

      const userId = currentUser?.id;

      const res = await updateUserData(userId!, { ...userData });

      const updatedData = {
        name: res.data.name,
        email: res.data.email,
        phone: res.data.phone,
        address: res.data.address,
      };

      update({ ...updatedData });
      toast.success('Account updated!');
    } catch (err: unknown) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  };

  const { data, errors, handleChange, handleSubmit } = useForm(
    onSubmitHandler,
    initialState,
    initialErrors,
    validateAccountData
  );

  const { name, email, phone, address } = data;

  const { formattedPhone, formattedValue } = formatPhone(phone);

  return (
    <div className='acccountData'>
      <AccountAvatar file={file} avatar={avatar} onChange={handleFile} />
      <AccountDataForm
        name={name}
        email={email}
        phone={formattedValue}
        address={address}
        errors={errors}
        loading={isLoading}
        currentUser={currentUser}
        onChange={handleChange}
        onSubmit={handleSubmit}
      />
    </div>
  );
};

export default AccountData;
