'use client';

import { useRouter } from 'next/navigation';
import Link from 'next/link';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { toast } from 'react-toastify';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { signIn } from 'next-auth/react';
import { useCallback, useEffect, useMemo, useState } from 'react';

import AuthInfo from '@/components/authInfo/AuthInfo';
import Input from '@/components/input/Input';
import Checkbox from '@/components/checkbox/Checkbox';
import Button from '@/components/button/Button';
import GoogleButton from '@/components/google/GoogleButton';

import { useForm } from '@/hooks/useForm';
import { validateLoginInputs } from '@/validations/login';

import { LoginData, LoginErrors } from '@/types';
import {
  getFromStorage,
  rememberKey,
  removeFromStorage,
  setToStorage,
  userKey,
} from '@/utils';

import './Login.scss';

const initialState: LoginData = {
  username: '',
  password: '',
};

const initialErrors: LoginErrors = {
  username: '',
  password: '',
};

const LoginForm = () => {
  const router = useRouter();

  const [rememberMe, setRememberMe] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
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

  const handleDeleteRememberMe = useCallback(() => {
    const now = new Date().getTime();

    Object.keys(localStorage).forEach((key) => {
      const item = getFromStorage(key);

      if (item?.expires && item?.expires < now) {
        removeFromStorage(key);
        setRememberMe(false);
      }
    });
  }, []);

  const onSubmitHandler = async () => {
    setIsLoading(true);

    const now = new Date().getTime();
    const expires = now + 30 * 24 * 60 * 60 * 1000;

    try {
      const res = await signIn('credentials', {
        ...data,
        redirect: false,
      });

      if (res?.ok) {
        toast.success('You are logged in...');
        router.push('/');

        setToStorage(rememberKey, rememberMe);
        setToStorage(userKey, rememberMe ? { ...data, expires } : '');
        setRememberMe(false);
      } else {
        toast.error(res?.error);
      }
    } catch (err: unknown) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
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
      username: user?.username,
      password: user?.password,
    };

    setData(userCredentials);
    setRememberMe(rememberMe);
  }, [setData]);

  useEffect(() => {
    const timer = setInterval(handleDeleteRememberMe, 60 * 60 * 1000);
    return () => clearInterval(timer);
  }, [handleDeleteRememberMe]);

  const { username, password } = data;

  return (
    <div className='formWrap'>
      <div className='headingWrap'>
        <h1>
          Hey there! <br /> Welcome back to <span>Burger</span>
        </h1>
      </div>
      <form onSubmit={handleSubmit} className='loginForm'>
        <Input
          name='username'
          label='Username'
          value={username}
          placeholder='Enter your username'
          onChange={handleChange}
          error={errors['username']}
          autoFocus
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
          <Button
            type='submit'
            label='Sign in'
            disabled={isLoading}
            loading={isLoading}
            className='loginBtn'
          />
          <GoogleButton />
        </div>
      </form>
      <AuthInfo url='/register' text="Don't have an account?" label='Sign up' />
    </div>
  );
};

export default LoginForm;
