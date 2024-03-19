import { InputProps } from '@/types';

import ErrorMessage from '../errorMessage/ErrorMessage';

import './Input.scss';

const Input = ({
  id,
  name,
  type = 'text',
  label,
  error,
  children,
  ...rest
}: InputProps) => {
  return (
    <div className='formGroup'>
      <label htmlFor={name}>{label}</label>
      <input {...rest} id={name} name={name} type={type} />
      {error && <ErrorMessage message={error} />}
      {children}
    </div>
  );
};

export default Input;
