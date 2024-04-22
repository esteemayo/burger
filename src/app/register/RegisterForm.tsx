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

const enum STEPS {
  INFO = 0,
  CREDENTIALS = 1,
  AVATAR = 2,
}

const initialState: RegisterData = {
  name: '',
  email: '',
  phone: '',
  password: '',
  confirmPassword: '',
};

const initialErrors: RegisterErrors = {
  name: '',
  email: '',
  phone: '',
  password: '',
  confirmPassword: '',
};

const RegisterForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [file, setFile] = useState<File>();
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [step, setStep] = useState(STEPS.INFO);
  const [isLoading, setIsLoading] = useState(false);

  const onNext = useCallback((e: React.MouseEvent<HTMLButtonElement>) => {
    setStep((value) => value + 1);
  }, []);

  const onPrev = useCallback((e: React.MouseEvent<HTMLButtonElement>) => {
    setStep((value) => value - 1);
  }, []);

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
    setIsLoading(true);

    const credentials = {
      ...data,
      phone: `+234${data.phone}`,
    };

    console.log({ ...credentials, file });

    setTimeout(() => {
      setIsLoading(false);
    }, 5000);
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

  const { name, email, phone, password, confirmPassword } = data;

  let bodyContent;

  bodyContent = (
    <>
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
        name='username'
        label='Username'
        value={name}
        placeholder='Enter your username'
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
    </>
  );

  if (step === STEPS.CREDENTIALS) {
    bodyContent = (
      <>
        <PhoneInput
          name='phone'
          type='number'
          label='Phone number'
          value={phone}
          placeholder='818 000 0000'
          onChange={handleChange}
          error={errors['phone']}
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
      </>
    );
  }
  
  if (step === STEPS.AVATAR) {
    bodyContent = (
      <>
        <Input
          type='file'
          name='file'
          label='Avatar'
          accept='image/*'
          onChange={handleFile}
        />
      </>
    )
  }

  return (
    <div className='formWrap'>
      <div className='headingWrap'>
        <h1>
          Hey there! <br /> Welcome to <span>Burger</span>
        </h1>
      </div>
      <form onSubmit={handleSubmit} className='registerForm'>
        {bodyContent}
        <div className='slideBox'>
          <button type='button' onClick={onPrev}>
            &nbsp;
          </button>
          <button type='button' onClick={onNext}>
            &nbsp;
          </button>
        </div>
        <div className='buttonWrap'>
          <Button
            type='submit'
            label='Sign up'
            disabled={isLoading}
            loading={isLoading}
            className='registerBtn'
          />
          <GoogleButton />
        </div>
      </form>
      <AuthInfo url='/login' text='Already registered?' label='Sign in' />
    </div>
  );
};

export default RegisterForm;
