import { CheckboxProps } from '@/types';

import './Checkbox.scss';

const Checkbox = ({ name, label, ...rest }: CheckboxProps) => {
  return (
    <div className='checkbox'>
      <input {...rest} type='checkbox' name={name} id={name} />
      <label htmlFor={name}>{label}</label>
    </div>
  );
};

export default Checkbox;
