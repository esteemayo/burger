import AttachMoneyIcon from '@mui/icons-material/AttachMoney';

import { InputProps } from '@/types';
import ErrorMessage from '../errorMessage/ErrorMessage';

import './Input.scss';

const Input = ({
  id,
  name,
  type = 'text',
  label,
  error,
  formatPrice,
  children,
  ...rest
}: InputProps) => {
  return (
    <div className='formGroup'>
      <label htmlFor={name}>{label}</label>
      <input {...rest} id={name} name={name} type={type} />
      {error && <ErrorMessage message={error} />}
      {formatPrice && (
        <div className='priceIcon'>
          <AttachMoneyIcon />
        </div>
      )}
      {children}
    </div>
  );
};

export default Input;
