'use client';

import VisibilityIcon from '@mui/icons-material/Visibility';
import { useCallback, useMemo, useState } from 'react';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

import { useForm } from '@/hooks/useForm';
import { validatePasswordInputs } from '@/validations/accountPassword';

import Input from '../input/Input';

import './AccountPassword.scss';

const initialState = {
  password: '',
  confirmPassword: '',
};

const initialErrors = {
  password: '',
  confirmPassword: '',
};

const AccountPassword = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const togglePassword = useCallback(
    (_e: React.MouseEvent<HTMLSpanElement>) => {
      setShowPassword((value) => !value);
    },
    []
  );

  const toggleConfirmPassword = useCallback(
    (_e: React.MouseEvent<HTMLSpanElement>) => {
      setShowConfirmPassword((value) => !value);
    },
    []
  );

  const onSubmithandler = () => {
    console.log({ ...data });
  };

  const { data, errors, handleChange, handleSubmit } = useForm(
    onSubmithandler,
    initialState,
    initialErrors,
    validatePasswordInputs
  );

  const iconClasses = useMemo(() => {
    return data.password.length > 0 ? 'icon show' : 'icon';
  }, [data]);

  const confirmIconClasses = useMemo(() => {
    return data.confirmPassword.length > 0 ? 'icon show' : 'icon';
  }, [data]);

  return (
    <div className='accountPassword'>
      <h3 className='accountHeading'>Account Information</h3>
      <form onSubmit={handleSubmit}>
        <div className='passwordInputWrap'>
          <Input
            name='password'
            type={showPassword ? 'text' : 'password'}
            label='Password'
            placeholder='Password'
            onChange={handleChange}
            error={errors['password']}
          >
            <span onClick={togglePassword} className={iconClasses}>
              {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
            </span>
          </Input>
          <Input
            name='confirmPassword'
            type={showConfirmPassword ? 'text' : 'password'}
            label='Confirm Password'
            placeholder='Confirm Password'
            onChange={handleChange}
            error={errors['confirmPassword']}
          >
            <span
              onClick={toggleConfirmPassword}
              className={confirmIconClasses}
            >
              {showConfirmPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
            </span>
          </Input>
        </div>
      </form>
    </div>
  );
};

export default AccountPassword;
