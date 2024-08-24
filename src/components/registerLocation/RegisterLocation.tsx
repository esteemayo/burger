'use client';

import Input from '../input/Input';

import { RegisterLocationProps } from '@/types';
import { registerLocationInputs } from '@/data/formData';

const RegisterLocation = ({ data, errors, onChange }: RegisterLocationProps) => {
  return (
    <>
      {registerLocationInputs.map((input) => {
        const { id, name, label, placeholder } = input;
        return (
          <Input
            key={id}
            name={name}
            label={label}
            value={data[name as keyof typeof data]}
            placeholder={placeholder}
            onChange={onChange}
            error={errors[name as keyof typeof errors]}
          />
        );
      })}
    </>
  );
};

export default RegisterLocation;
