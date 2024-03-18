import { InputProps } from '@/types';

import './Input.scss';

const Input = ({
  id,
  name,
  type = 'text',
  label,
  children,
  ...rest
}: InputProps) => {
  return (
    <div className='formGroup'>
      <label htmlFor={name}>{label}</label>
      <input {...rest} id={id || name} name={name} type={type} />
      {children}
    </div>
  );
};

export default Input;
