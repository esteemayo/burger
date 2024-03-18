'use client';

import Link from 'next/link';
import VisibilityIcon from '@mui/icons-material/Visibility';
import Image from 'next/image';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { useCallback, useMemo, useState } from 'react';

import Input from '@/components/input/Input';

import './Login.scss';

const initialState = {
  email: '',
  password: '',
};

const LoginForm = () => {
  const [rememberMe, setRememberMe] = useState(false);
  const [data, setData] = useState(initialState);
  const [showPassword, setShowPassword] = useState(false);

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
        />
        <Input
          name='password'
          type={showPassword ? 'text' : 'password'}
          label='Password'
          placeholder='Password'
          onChange={handleChange}
        >
          <span onClick={togglePassword} className={iconClasses}>
            {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
          </span>
        </Input>
        <div className='rememberWrap'>
          <div className='remember'>
            <input
              type='checkbox'
              name='rememberMe'
              id='rememberMe'
              checked={rememberMe}
              onChange={handleChangeRememberMe}
            />
            <label htmlFor='rememberMe'>Remember for 30 days</label>
          </div>
          <Link href='#'>Forgot password</Link>
        </div>
        <div className='buttonWrap'>
          <button type='submit' className='loginBtn'>
            Sign in
          </button>
          <button type='button' className='googleBtn'>
            <Image
              src='/img/google.png'
              width={15}
              height={15}
              alt='google icon'
            />
            Continue with Google
          </button>
        </div>
      </form>
      <div className='signupWrap'>
        <p>
          Don&apos;t have an Account? <Link href='/register'>Sign up</Link>
        </p>
      </div>
    </div>
  );
};

export default LoginForm;
