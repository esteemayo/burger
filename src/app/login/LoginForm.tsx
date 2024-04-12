'use client';

import { useCallback, useEffect, useMemo, useState } from 'react';
import Link from 'next/link';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import VisibilityIcon from '@mui/icons-material/Visibility';

import AuthInfo from '@/components/authInfo/AuthInfo';
import Input from '@/components/input/Input';
import Checkbox from '@/components/checkbox/Checkbox';
import Button from '@/components/button/Button';
import GoogleButton from '@/components/google/GoogleButton';

import { useForm } from '@/hooks/useForm';
import { validateLoginInputs } from '@/validations/login';

import { LoginData, LoginErrors } from '@/types';
import { getFromStorage, rememberKey, setToStorage, userKey } from '@/utils';

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
  const [showPassword, setShowPassword] = useState(false);

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

  const onSubmitHandler = () => {
    console.log(data);

    setToStorage(rememberKey, rememberMe);
    setToStorage(userKey, rememberMe ? data : '');
    setRememberMe(false);
  };

  const { data, errors, handleChange, handleSubmit, setData } = useForm(
    onSubmitHandler,
    initialState,
    initialErrors,
    validateLoginInputs
  );

  const iconClasses = useMemo(() => {
    return data?.password?.length > 0 ? 'icon show' : 'icon';
  }, [data]);

  useEffect(() => {
    const user = getFromStorage(userKey);
    const rememberMe = getFromStorage(rememberKey);

    const userCredentials = {
      email: user?.email,
      password: user?.password,
    };

    setData(userCredentials);
    setRememberMe(rememberMe);
  }, [setData]);

  const { email, password } = data;

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
          value={email}
          placeholder='Enter your email address'
          onChange={handleChange}
          error={errors['email']}
        />
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
