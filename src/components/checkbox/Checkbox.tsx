import { CheckboxProps } from '@/types';

import './Checkbox.scss';

const Checkbox = ({ name, label, ...rest }: CheckboxProps) => {
  return (
    <div className='checkbox'>
      <label htmlFor={name}>{label}</label>
      <label htmlFor={name} className='switch'>
        <input {...rest} type='checkbox' name={name} id={name} />
        <span className='slider round' />
      </label>
    </div>
  );
};

export default Checkbox;
