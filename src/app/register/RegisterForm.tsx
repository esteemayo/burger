'use client';

import { useCallback, useMemo, useState } from 'react';
import { toast } from 'react-toastify';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { useRouter } from 'next/navigation';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

import AuthInfo from '@/components/authInfo/AuthInfo';
import Input from '@/components/input/Input';
import DropZone from '@/components/dropZone/DropZone';
import Button from '@/components/button/Button';
import GoogleButton from '@/components/google/GoogleButton';
import GenderSelect from '@/components/genderSelect/GenderSelect';
import PhoneInput from '@/components/phoneInput/PhoneInput';

import { useForm } from '@/hooks/useForm';
import { upload } from '@/utils/upload';
import { validateRegisterInputs } from '@/validations/register';

import { registerUser } from '@/services/authService';
import { RegisterData, RegisterErrors } from '@/types';

import './Register.scss';
import SlideButtons from '@/components/slideButtons/SlideButtons';

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

  const onSubmitHandler = async () => {
    setIsLoading(true);

    const credentials = {
      ...data,
      phone: `+234${data.phone}`,
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
        value={username}
        placeholder='Enter your username'
        onChange={handleChange}
        error={errors['username']}
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

  if (step === STEPS.LOCATION) {
    bodyContent = (
      <>
        <Input
          name='street'
          label='Street'
          value={street}
          placeholder='Enter your street'
          onChange={handleChange}
          error={errors['street']}
        />
        <Input
          name='city'
          label='City'
          value={city}
          placeholder='Enter your city'
          onChange={handleChange}
          error={errors['city']}
          autoFocus
        />
        <Input
          name='state'
          label='State'
          value={state}
          placeholder='Enter your state'
          onChange={handleChange}
          error={errors['state']}
        />
      </>
    );
  }

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
          dimension='large'
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
        <DropZone id='avatar' label='Avatar' small onSelect={setFile} />
        <GenderSelect
          value={gender}
          error={errors['gender']}
          onChange={handleChange}
        />
      </>
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
