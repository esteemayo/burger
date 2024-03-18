import { InputProps } from '@/types';

import './Input.scss';

const Input = ({ id, name, type = 'text', label, ...rest }: InputProps) => {
  return (
    <div className='formGroup'>
      <label htmlFor={name}>{label}</label>
      <input {...rest} id={name} name={name} type={type} />
    </div>
  );
};

export default Input;
