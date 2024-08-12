'use client';

import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';
import { useCallback, useMemo, useState } from 'react';

import SlideButtons from '@/components/slideButtons/SlideButtons';
import Button from '@/components/button/Button';
import RegisterAvatar from '@/components/registerAvatar/RegisterAvatar';
import AuthInfo from '@/components/authInfo/AuthInfo';
import RegisterLocation from '@/components/registerLocation/RegisterLocation';
import GoogleButton from '@/components/google/GoogleButton';
import RegisterCredentials from '@/components/registerCredentials/RegisterCredentials';
import RegisterInfo from '@/components/registerInfo/RegisterInfo';

import { useForm } from '@/hooks/useForm';
import { upload } from '@/utils/upload';
import { validateRegisterInputs } from '@/validations/register';

import { registerUser } from '@/services/authService';
import { formatPhone } from '@/utils/formatPhone';
import { RegisterData, RegisterErrors } from '@/types';

import './Register.scss';

const enum STEPS {
  INFO = 0,
  LOCATION = 1,
  CREDENTIALS = 2,
  AVATAR = 3,
}

const initialState: RegisterData = {
  name: '',
  username: '',
  email: '',
  street: '',
  city: '',
  state: '',
  phone: '',
  gender: '',
  password: '',
  confirmPassword: '',
};

const initialErrors: RegisterErrors = {
  name: '',
  username: '',
  email: '',
  street: '',
  city: '',
  state: '',
  phone: '',
  gender: '',
  password: '',
  confirmPassword: '',
};

const RegisterForm = () => {
  const router = useRouter();

  const [isLoading, setIsLoading] = useState(false);
  const [file, setFile] = useState<File[]>();
  const [showPassword, setShowPassword] = useState(false);
  const [step, setStep] = useState(STEPS.INFO);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const onNext = useCallback((e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();

    setStep((value) => {
      return value + 1;
    });
  }, []);

  const onPrev = useCallback((e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();

    setStep((value) => {
      return value - 1;
    });
  }, []);

  const togglePassword = useCallback(
    (_e: React.MouseEvent<HTMLSpanElement>) => {
      setShowPassword((value) => {
        return !value;
      });
    },
    []
  );

  const toggleConfirmPassword = useCallback(
    (_e: React.MouseEvent<HTMLSpanElement>) => {
      setShowConfirmPassword((value) => {
        return !value;
      });
    },
    []
  );

  const onSubmitHandler = async () => {
    setIsLoading(true);

    if (data.phone.startsWith('1')) {
      data.phone = '';

      toast.error('Phone number cannot start with 1');
      setIsLoading(false);
      return;
    }

    const credentials = {
      ...data,
      phone: formattedPhone,
      address: `${data.street}, ${data.city}, ${data.state}`,
    };

    const selectedFile = file?.[0];

    try {
      if (file) {
        const url = await upload(selectedFile);
        credentials.image = url;
      }

      const res = await registerUser({ ...credentials });

      if (res.status === 201) {
        router.push('/login');
        toast.success('Account created...');
        return;
      }
    } catch (err: unknown) {
      console.log(err);
    } finally {
      setIsLoading(false);
      setStep(STEPS.INFO);
    }
  };

  const { data, errors, handleChange, handleSubmit } = useForm(
    onSubmitHandler,
    initialState,
    initialErrors,
    validateRegisterInputs
  );

  const { formattedPhone, formattedValue } = formatPhone(data.phone);

  const iconClasses = useMemo(() => {
    return data.password.length > 0 ? 'icon show' : 'icon';
  }, [data]);

  const confirmIconClasses = useMemo(() => {
    return data.confirmPassword.length > 0 ? 'icon show' : 'icon';
  }, [data]);

  const prevBtnClasses = useMemo(() => {
    return step !== STEPS.INFO ? 'btnPrev show' : 'btnPrev';
  }, [step]);

  const nextBtnClasses = useMemo(() => {
    return step !== STEPS.AVATAR ? 'btnPrev show' : 'btnPrev';
  }, [step]);

  const {
    name,
    username,
    email,
    street,
    city,
    state,
    phone,
    gender,
    password,
    confirmPassword,
  } = data;

  let bodyContent: JSX.Element | undefined;

  bodyContent = (
    <RegisterInfo
      name={name}
      username={username}
      email={email}
      errors={errors}
      onChange={handleChange}
    />
  );

  if (step === STEPS.LOCATION) {
    bodyContent = (
      <RegisterLocation
        street={street}
        city={city}
        state={state}
        errors={errors}
        onChange={handleChange}
      />
    );
  }

  if (step === STEPS.CREDENTIALS) {
    bodyContent = (
      <RegisterCredentials
        phone={formattedValue}
        password={password}
        confirmPassword={confirmPassword}
        errors={errors}
        passwordIcon={iconClasses}
        confirmIcon={confirmIconClasses}
        isPassword={showPassword}
        isConfirmPassword={showConfirmPassword}
        onChange={handleChange}
        onTogglePassword={togglePassword}
        onToggleConfirm={toggleConfirmPassword}
      />
    );
  }

  if (step === STEPS.AVATAR) {
    bodyContent = (
      <RegisterAvatar
        gender={gender}
        error={errors['gender']}
        onChange={handleChange}
        onSelect={setFile}
      />
    );
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
        <SlideButtons
          onPrev={onPrev}
          onNext={onNext}
          disabled={isLoading}
          prevBtnClasses={prevBtnClasses}
          nextBtnClasses={nextBtnClasses}
        />
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
