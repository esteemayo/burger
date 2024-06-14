'use client';

import { toast } from 'react-toastify';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { useCallback, useMemo, useState } from 'react';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

import Input from '../input/Input';
import Spinner from '../spinner/Spinner';

import { useForm } from '@/hooks/useForm';
import { validatePasswordInputs } from '@/validations/accountPassword';

import { updatePassword } from '@/services/authService';
import { UserPassword, UserPasswordErrors } from '@/types';

import './AccountPassword.scss';

interface AccountPasswordProps {
  userId: string | undefined;
}

const initialState: UserPassword = {
  password: '',
  confirmPassword: '',
};

const initialErrors: UserPasswordErrors = {
  password: '',
  confirmPassword: '',
};

const AccountPassword = ({ userId }:AccountPasswordProps) => {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
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

  const onSubmithandler = async () => {
    setIsLoading(true);

    try {
      const res = await updatePassword(userId!, { ...data })
      console.log(res.data);
      toast.success('Password changed successfully');
    } catch (err: unknown) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
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

  const { password, confirmPassword } = data;

  return (
    <div className='accountPassword'>
      <h3 className='accountHeading'>Account Information</h3>
      <form onSubmit={handleSubmit}>
        <div className='passwordInputWrap'>
          <Input
            name='password'
            type={showPassword ? 'text' : 'password'}
            label='Password'
            value={password}
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
            value={confirmPassword}
            placeholder='Confirm Password'
            onChange={handleChange}
            error={errors['confirmPassword']}
            dimension='large'
          >
            <span
              onClick={toggleConfirmPassword}
              className={confirmIconClasses}
            >
              {showConfirmPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
            </span>
          </Input>
        </div>
        <div className='passwordBtnWrap'>
          <button type='submit'>
            {isLoading ? <Spinner /> : 'Reset password'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default AccountPassword;
