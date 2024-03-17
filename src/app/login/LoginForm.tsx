'use client';

import Link from 'next/link';
import VisibilityIcon from '@mui/icons-material/Visibility';
import Image from 'next/image';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { useCallback, useState } from 'react';

import Logo from '@/components/logo/Logo';

import './Login.scss';

const initialState = {
  email: '',
  password: '',
};

const LoginForm = () => {
  const [data, setData] = useState(initialState);

  const handleChange = useCallback(
    ({ target: input }: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = input;
      setData((prev) => {
        return { ...prev, [name]: value };
      });
    },
    []
  );

  return (
    <div className='formWrap'>
      <Logo />
      <div className='headingWrap'>
        <h1>
          Hey there! <br /> Welcome back to <span>Burger</span>
        </h1>
      </div>
      <form className='loginForm'>
        <div className='formGroup'>
          <label htmlFor='email'>Email</label>
          <input
            type='email'
            name='email'
            id='email'
            placeholder='Enter your email address'
            onChange={handleChange}
          />
        </div>
        <div className='formGroup'>
          <label htmlFor='password'>Password</label>
          <input
            type='password'
            name='password'
            id='password'
            placeholder='Password'
            onChange={handleChange}
          />
        </div>
        <div className='rememberWrap'>
          <div className='remember'>
            <input type='checkbox' name='rememberMe' id='rememberMe' />
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
