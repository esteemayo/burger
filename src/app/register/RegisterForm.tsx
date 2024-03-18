'use client';

import Link from 'next/link';
import VisibilityIcon from '@mui/icons-material/Visibility';
import Image from 'next/image';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import  { useCallback, useMemo, useState } from 'react';

import Logo from '@/components/logo/Logo';

import './Register.scss';

const initialState = {
  name: '',
  email: '',
  password: '',
};

const RegisterForm = () => {
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
      <Logo />
        <div className='headingWrap'>
          <h1>
            Hey there! <br /> Welcome to <span>Burger</span>
          </h1>
        </div>
        <form onSubmit={handleSubmit} className='registerForm'>
          <div className='formGroup'>
            <label htmlFor='name'>Name</label>
            <input
              type='name'
              name='name'
              id='name'
              placeholder='Enter your name'
              onChange={handleChange}
            />
          </div>
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
              type={showPassword ? 'text' : 'password'}
              name='password'
              id='password'
              placeholder='Password'
              onChange={handleChange}
            />
            <span onClick={togglePassword} className={iconClasses}>
              {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
            </span>
          </div>
          <div className='buttonWrap'>
            <button type='submit' className='registerBtn'>
              Sign up
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
            Already registered? <Link href='/login'>Sign in</Link>
          </p>
        </div>
    </div>
  );
};

export default RegisterForm;
