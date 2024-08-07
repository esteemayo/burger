'use client';

import ErrorMessage from '../errorMessage/ErrorMessage';

import { PhoneInputProps } from '@/types';

import './PhoneInput.scss';

const PhoneInput = ({
  name,
  type = 'tel',
  label,
  error,
  ...rest
}: PhoneInputProps) => {
  return (
    <div className='phoneInput'>
      <label htmlFor={name}>{label}</label>
      <div className='inputGroupWrap'>
        <div className='inputGroupText'>+1</div>
        <input {...rest} type={type} name={name} id={name} />
      </div>
      {error && <ErrorMessage message={error} />}
    </div>
  );
};

export default PhoneInput;
