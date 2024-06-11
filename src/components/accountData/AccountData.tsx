'use client';

import { useCallback, useState } from 'react';
import Image from 'next/image';
import { useQuery } from '@tanstack/react-query';
import { useSession } from 'next-auth/react';

import Spinner from '../spinner/Spinner';
import Input from '../input/Input';
import PhoneInput from '../phoneInput/PhoneInput';

import { useForm } from '@/hooks/useForm';
import { validateAccountData } from '@/validations/accountData';

import { UserData, UserDataErrors } from '@/types';
import { getUser, updateUserData } from '@/services/userService';

import './AccountData.scss';

interface AccountDataProps {
  userId: string | undefined;
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

const AccountData = ({ userId }: AccountDataProps) => {
  const { update } = useSession();

  const { data: user } = useQuery({
    queryKey: ['user'],
    queryFn: async () => {
      const { data } = await getUser(userId!);
      return data;
    },
    enabled: !!userId,
  });

  const [file, setFile] = useState<File>();
  const [isLoading, setIsLOading] = useState(false);

  const handleFile = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const target = e.target as HTMLInputElement;
    const file = (target.files as FileList)[0];
    setFile(file);
  }, []);

  const onSubmitHandler = async () => {
    setIsLOading(true);

    const userData = {
      ...data,
      phone: `+234${data.phone}`,
    };

    try {
      const res = await updateUserData(userId!, { ...userData });

      const updatedData = {
        name: res.data.name,
        email: res.data.email,
        phone: res.data.phone,
        address: res.data.address,
      };

      update({ ...updatedData });
    } catch (err: unknown) {
      console.log(err);
    } finally {
      setIsLOading(false);
    }
  };

  const { data, errors, handleChange, handleSubmit } = useForm(
    onSubmitHandler,
    initialState,
    initialErrors,
    validateAccountData
  );

  const { name, email, phone, address } = data;

  return (
    <div className='acccountData'>
      <div className='avatarWrap'>
        <div className='dataImg'>
          <Image
            src={
              file
                ? URL.createObjectURL(file as Blob | MediaSource)
                : '/img/avatar.png'
            }
            width={50}
            height={50}
            alt='avatar'
            className='avatar'
          />
          <label htmlFor='file'>
            <Image
              src='/svg/pencil.svg'
              width={17}
              height={17}
              alt='pencil icon'
              className='icon'
            />
          </label>
          <input id='file' name='file' type='file' onChange={handleFile} />
        </div>
      </div>
      <div className='dataForm'>
        <form onSubmit={handleSubmit}>
          <div className='inputWrap'>
            <Input
              name='name'
              label='Name'
              value={name}
              placeholder={user?.name ?? 'Name'}
              onChange={handleChange}
              error={errors.name}
            />
            <Input
              name='email'
              type='email'
              label='Email address'
              value={email}
              placeholder={user?.email ?? 'Email address'}
              onChange={handleChange}
              error={errors.email}
              dimension='large'
            />
            <PhoneInput
              name='phone'
              type='number'
              label='Phone number'
              value={phone}
              placeholder={user?.phone ?? '818 000 0000'}
              onChange={handleChange}
              error={errors.phone}
            />
            <Input
              name='address'
              label='Address'
              value={address}
              placeholder={user?.address ?? 'Contact address'}
              onChange={handleChange}
              error={errors.address}
            />
          </div>
          <div className='dataBtnWrap'>
            <button type='submit'>{isLoading ? <Spinner /> : 'Update'}</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AccountData;
