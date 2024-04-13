'use client';

import VisibilityIcon from '@mui/icons-material/Visibility';
import { useCallback, useMemo, useState } from 'react';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

import AuthInfo from '@/components/authInfo/AuthInfo';
import Input from '@/components/input/Input';
import GoogleButton from '@/components/google/GoogleButton';
import Button from '@/components/button/Button';
import PhoneInput from '@/components/phoneInput/PhoneInput';

import { useForm } from '@/hooks/useForm';
import { validateRegisterInputs } from '@/validations/register';

import { RegisterData, RegisterErrors } from '@/types';

import './Register.scss';

const initialState: RegisterData = {
  name: '',
  email: '',
  password: '',
  confirmPassword: '',
};

const initialErrors: RegisterErrors = {
  name: '',
  email: '',
  password: '',
  confirmPassword: '',
};

const RegisterForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [file, setFile] = useState<File>();
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

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

  const onSubmitHandler = () => {
    console.log({ ...data, file });
  };

  const { data, errors, handleChange, handleSubmit } = useForm(
    onSubmitHandler,
    initialState,
    initialErrors,
    validateRegisterInputs
  );

  const iconClasses = useMemo(() => {
    return data.password.length > 0 ? 'icon show' : 'icon';
  }, [data]);

  const confirmIconClasses = useMemo(() => {
    return data.confirmPassword.length > 0 ? 'icon show' : 'icon';
  }, [data]);

  const { name, email, password, confirmPassword } = data;

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
          value={name}
          placeholder='Enter your name'
          onChange={handleChange}
          error={errors['name']}
          autoFocus
        />
        <Input
          name='email'
          type='email'
          label='Email'
          value={email}
          placeholder='Enter your email address'
          onChange={handleChange}
          error={errors['email']}
        />
        <PhoneInput />
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
          <GoogleButton />
        </div>
      </form>
      <AuthInfo url='/login' text='Already registered?' label='Sign in' />
    </div>
  );
};

export default RegisterForm;
