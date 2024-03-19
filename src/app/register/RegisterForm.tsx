'use client';

import Link from 'next/link';
import VisibilityIcon from '@mui/icons-material/Visibility';
import Image from 'next/image';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { useCallback, useMemo, useState } from 'react';

import Button from '@/components/button/Button';
import Input from '@/components/input/Input';
import AuthInfo from '@/components/authInfo/AuthInfo';

import './Register.scss';

const initialState = {
  name: '',
  email: '',
  password: '',
  confirmPassword: '',
};

const RegisterForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [file, setFile] = useState<File>();
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
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

  const handleFile = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const target = e.target as HTMLInputElement;
    const file = (target.files as FileList)[0];
    setFile(file);
  }, []);

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

  const handleSubmit = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      console.log({ ...data, file });
    },
    [data, file]
  );

  const iconClasses = useMemo(() => {
    return data.password.length > 0 ? 'icon show' : 'icon';
  }, [data]);

  const confirmIconClasses = useMemo(() => {
    return data.confirmPassword.length > 0 ? 'icon show' : 'icon';
  }, [data]);

  return (
    <div className='formWrap'>
      <div className='headingWrap'>
        <h1>
          Hey there! <br /> Welcome to <span>Burger</span>
        </h1>
      </div>
      <form onSubmit={handleSubmit} className='registerForm'>
        <Input
          name='name'
          label='Name'
          placeholder='Enter your name'
          onChange={handleChange}
        />
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
        <Input
          name='confirmPassword'
          type={showConfirmPassword ? 'text' : 'password'}
          label='Confirm Password'
          placeholder='Confirm Password'
          onChange={handleChange}
        >
          <span onClick={toggleConfirmPassword} className={confirmIconClasses}>
            {showConfirmPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
          </span>
        </Input>
        <Input
          type='file'
          name='file'
          label='Avatar'
          accept='image/*'
          onChange={handleFile}
        />
        <div className='buttonWrap'>
          <Button type='submit' label='Sign up' className='registerBtn' />
          <Button label='Continue with Google' className='googleBtn'>
            <Image
              src='/img/google.png'
              width={15}
              height={15}
              alt='google icon'
            />
          </Button>
        </div>
      </form>
      <AuthInfo url='/login' text='Already registered?' label='Sign in' />
    </div>
  );
};

export default RegisterForm;
