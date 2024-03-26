'use client';

import Image from 'next/image';

import { UserData, UserDataErrors } from '@/types';
import { useForm } from '@/hooks/useForm';
import { validateAccountData } from '@/validations/accountData';

import Input from '../input/Input';

import './AccountData.scss';
import { useCallback, useState } from 'react';

const initialState: UserData = {
  name: '',
  email: '',
  phone: '',
};

const initialErrors: UserDataErrors = {
  name: '',
  email: '',
  phone: '',
};

const AccountData = () => {
  const [file, setFile] = useState<File>();

  const handleFile = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const target = e.target as HTMLInputElement;
    const file = (target.files as FileList)[0];
    setFile(file);
  }, []);

  const onSubmitHandler = () => {
    console.log({ ...data });
  };

  const { data, errors, handleChange, handleSubmit } = useForm(
    onSubmitHandler,
    initialState,
    initialErrors,
    validateAccountData
  );

  return (
    <div className='acccountData'>
      <div className='dataImg'>
        <Image src='/svg/male-avatar.svg' width={50} height={50} alt='' />
        <Input name='file' type='file' onChange={handleFile} />
      </div>
      <div className='dataForm'>
        <form onSubmit={handleSubmit}>
          <Input
            name='name'
            label='Name'
            value={data.name}
            onChange={handleChange}
            error={errors.name}
          />
          <Input
            name='email'
            type='email'
            label='Email address'
            value={data.email}
            onChange={handleChange}
            error={errors.email}
          />
          <Input
            name='phone'
            type='tel'
            label='Phone number'
            value={data.phone}
            onChange={handleChange}
            error={errors.phone}
          />

          <button type='submit'>Update</button>
        </form>
      </div>
    </div>
  );
};

export default AccountData;
