'use client';

import VisibilityIcon from '@mui/icons-material/Visibility';
import Link from 'next/link';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { useCallback, useMemo, useState } from 'react';

import AuthInfo from '@/components/authInfo/AuthInfo';
import Input from '@/components/input/Input';
import Checkbox from '@/components/checkbox/Checkbox';
import Button from '@/components/button/Button';
import GoogleButton from '@/components/google/GoogleButton';

import { LoginData, LoginErrors } from '@/types';
import { validateLoginInputs } from '@/validations/login';

import './Login.scss';

const initialState: LoginData = {
  email: '',
  password: '',
};

const initialErrors: LoginErrors = {
  email: '',
  password: '',
};

const LoginForm = () => {
  const [rememberMe, setRememberMe] = useState(false);
  const [data, setData] = useState(initialState);
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState(initialErrors);

  const handleChange = useCallback(
    ({ target: input }: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = input;
      setData((prev) => {
        return { ...prev, [name]: value };
      });
    },
    []
  );

  const handleChangeRememberMe = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setRememberMe(e.target.checked);
    },
    []
  );

  const togglePassword = useCallback(
    (_e: React.MouseEvent<HTMLSpanElement>) => {
      setShowPassword((value) => !value);
    },
    []
  );

  const handleSubmit = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      const errors = validateLoginInputs(data);
      if (Object.values(errors).length > 0) return setErrors(errors);

      setErrors({});

      console.log(data);
    },
    [data]
  );

  const iconClasses = useMemo(() => {
    return data.password.length > 0 ? 'icon show' : 'icon';
  }, [data]);

  return (
    <div className='formWrap'>
      <div className='headingWrap'>
        <h1>
          Hey there! <br /> Welcome back to <span>Burger</span>
        </h1>
      </div>
      <form onSubmit={handleSubmit} className='loginForm'>
        <Input
          name='email'
          type='email'
          label='Email'
          placeholder='Enter your email address'
          onChange={handleChange}
          error={errors['email']}
        />
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
        <div className='rememberWrap'>
          <Checkbox
            name='rememberMe'
            label='Remember for 30 days'
            checked={rememberMe}
            onChange={handleChangeRememberMe}
          />
          <Link href='#'>Forgot password</Link>
        </div>
        <div className='buttonWrap'>
          <Button type='submit' label='Sign in' className='loginBtn' />
          <GoogleButton />
        </div>
      </form>
      <AuthInfo url='/register' text="Don't have an account?" label='Sign up' />
    </div>
  );
};

export default LoginForm;
