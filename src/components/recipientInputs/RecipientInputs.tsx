'use client';

import Input from '../input/Input';
import PhoneInput from '../phoneInput/PhoneInput';

import { RecipientInputsProps } from '@/types';

const RecipientInputs = ({
  name,
  email,
  phone,
  errors,
  onChange,
}: RecipientInputsProps) => {
  return (
    <>
      <Input
        name='name'
        label='Name'
        value={name}
        placeholder='Name'
        onChange={onChange}
        error={errors.name}
      />
      <Input
        name='email'
        type='email'
        label='Email address'
        value={email}
        placeholder='Email address'
        onChange={onChange}
        error={errors.email}
        dimension='large'
      />
      <PhoneInput
        name='phone'
        type='text'
        label='Phone Number'
        value={phone}
        placeholder='(202) 555-1234'
        onChange={onChange}
        error={errors.phone}
      />
    </>
  );
};

export default RecipientInputs;
