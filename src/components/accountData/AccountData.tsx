'use client';

import Image from 'next/image';
import { useCallback, useState } from 'react';

import Input from '../input/Input';
import PhoneInput from '../phoneInput/PhoneInput';

import { UserData, UserDataErrors } from '@/types';
import { useForm } from '@/hooks/useForm';
import { validateAccountData } from '@/validations/accountData';

import './AccountData.scss';

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

const AccountData = () => {
  const [file, setFile] = useState<File>();

  const handleFile = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const target = e.target as HTMLInputElement;
    const file = (target.files as FileList)[0];
    setFile(file);
  }, []);

  const onSubmitHandler = () => {
    console.log({ ...data, file });
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
            <PhoneInput
              name='phone'
              type='number'
              label='Phone number'
              value={phone}
              placeholder='Phone number'
              onChange={handleChange}
              error={errors.phone}
            />
            <Input
              name='address'
              label='Address'
              value={address}
              placeholder='Contact address'
              onChange={handleChange}
              error={errors.address}
            />
          </div>
          <div className='dataBtnWrap'>
            <button type='submit'>Update</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AccountData;
