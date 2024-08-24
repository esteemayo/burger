'use client';

import Input from '../input/Input';

import { RegisterInfoProps } from '@/types';
import { registerInfoInputs } from '@/data/formData';

const RegisterInfo = ({
  name,
  username,
  email,
  errors,
  onChange,
}: RegisterInfoProps) => {
  return (
    <>
      {registerInfoInputs.map((input) => {
        const { id, name, type, label, placeholder } = input;
        return (
          <Input
            key={id}
            name={name}
            type={type}
            label={label}
            value={name}
            placeholder={placeholder}
            onChange={onChange}
            error={errors[name as keyof typeof errors]}
            autoFocus
          />
        );
      })}
    </>
  );
};

export default RegisterInfo;
