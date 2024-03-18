'use client';

import Link from 'next/link';
import VisibilityIcon from '@mui/icons-material/Visibility';
import Image from 'next/image';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { useCallback, useMemo, useState } from 'react';

import Logo from '@/components/logo/Logo';

import './Register.scss';

const initialState = {
  name: '',
  email: '',
  password: '',
  confirmPassword: '',
};

const RegisterForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [data, setData] = useState(initialState);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

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

  const toggleConfirmPassword = useCallback(
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

  const confirmIconClasses = useMemo(() => {
    return data.confirmPassword.length > 0 ? 'icon show' : 'icon';
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
        <div className='formGroup'>
          <label htmlFor='confirmPassword'>Confirm Password</label>
          <input
            type={showPassword ? 'text' : 'password'}
            name='confirmPassword'
            id='password'
            placeholder='Confirm Password'
            onChange={handleChange}
          />
          <span onClick={toggleConfirmPassword} className={confirmIconClasses}>
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
      <div className='signinWrap'>
        <p>
          Already registered? <Link href='/login'>Sign in</Link>
        </p>
      </div>
    </div>
  );
};

export default RegisterForm;
