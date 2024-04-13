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
      <div className='inputGroup'>
        <div className='inputGroupText'>+234</div>
        <input {...rest} type={type} name={name} id={name} />
      </div>
    </div>
  );
};

export default PhoneInput;
