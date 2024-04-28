'use client';

import { useMemo } from 'react';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';

import { InputProps } from '@/types';
import ErrorMessage from '../errorMessage/ErrorMessage';

import './Input.scss';

interface ILabel {
  dimension?: 'small' | 'large';
}

const Input = ({
  id,
  name,
  type = 'text',
  label,
  dimension = 'small',
  error,
  formatPrice,
  children,
  ...rest
}: InputProps & ILabel) => {
  const labelClasses = useMemo(() => {
    return dimension === 'small' ? 'inputLabel' : 'inputLabel large';
  }, [dimension]);

  const inputClasses = useMemo(() => {
    return formatPrice ? 'formGroup formatPrice' : 'formGroup';
  }, [formatPrice]);

  return (
    <div className={inputClasses}>
      <label htmlFor={name} className={labelClasses}>
        {label}
      </label>
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
