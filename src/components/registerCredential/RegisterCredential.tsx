'use client';

import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

import Input from '../input/Input';
import PhoneInput from '../phoneInput/PhoneInput';

const RegisterCredential = ({
  phone,
  password,
  confirmPassword,
  errors,
  passwordIcon,
  confirmIcon,
  isPassword,
  isConfirmPassword,
  onChange,
  onTogglePassword,
  onToggleConfirm,
}) => {
  return (
    <>
      <PhoneInput
        name='phone'
        type='number'
        label='Phone number'
        value={phone}
        placeholder='(202) 555-1234'
        onChange={onChange}
        error={errors['phone']}
      />
      <Input
        name='password'
        type={isPassword ? 'text' : 'password'}
        label='Password'
        value={password}
        placeholder='Password'
        onChange={onChange}
        error={errors['password']}
      >
        <span onClick={onTogglePassword} className={passwordIcon}>
          {isPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
        </span>
      </Input>
      <Input
        name='confirmPassword'
        type={isConfirmPassword ? 'text' : 'password'}
        label='Confirm Password'
        value={confirmPassword}
        placeholder='Confirm Password'
        onChange={onChange}
        error={errors['confirmPassword']}
        dimension='large'
      >
        <span onClick={onToggleConfirm} className={confirmIcon}>
          {isConfirmPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
        </span>
      </Input>
    </>
  );
};

export default RegisterCredential;
