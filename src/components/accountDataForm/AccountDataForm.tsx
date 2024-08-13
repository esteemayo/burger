'use client';

import Spinner from '../spinner/Spinner';
import Input from '../input/Input';
import PhoneInput from '../phoneInput/PhoneInput';

import { AccountDataFormProps } from '@/types';

import './AccountDataForm.scss';

const AccountDataForm = ({
  name,
  email,
  phone,
  address,
  errors,
  loading,
  currentUser,
  onChange,
  onSubmit,
}: AccountDataFormProps) => {
  return (
    <div className='accountDataForm'>
      <form onSubmit={onSubmit}>
        <div className='inputWrap'>
          <Input
            name='name'
            label='Name'
            value={name}
            placeholder={currentUser?.name ?? 'Name'}
            onChange={onChange}
            error={errors.name}
          />
          <Input
            name='email'
            type='email'
            label='Email address'
            value={email}
            placeholder={currentUser?.email ?? 'Email address'}
            onChange={onChange}
            error={errors.email}
            dimension='large'
          />
          <PhoneInput
            name='phone'
            label='Phone number'
            value={phone}
            placeholder='(202) 555-1234'
            onChange={onChange}
            error={errors.phone}
          />
          <Input
            name='address'
            label='Address'
            value={address}
            placeholder={currentUser?.address ?? 'Contact address'}
            onChange={onChange}
            error={errors.address}
          />
        </div>
        <div className='dataBtnWrap'>
          <button type='submit'>{loading ? <Spinner /> : 'Update'}</button>
        </div>
      </form>
    </div>
  );
};

export default AccountDataForm;
