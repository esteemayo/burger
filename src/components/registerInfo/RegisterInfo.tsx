'use client';

import Input from '../input/Input';

const RegisterInfo = ({ name, username, email, errors, onChange }) => {
  return (
    <>
      <Input
        name='name'
        label='Name'
        value={name}
        placeholder='Enter your name'
        onChange={onChange}
        error={errors['name']}
        autoFocus
      />
      <Input
        name='username'
        label='Username'
        value={username}
        placeholder='Enter your username'
        onChange={onChange}
        error={errors['username']}
      />
      <Input
        name='email'
        type='email'
        label='Email'
        value={email}
        placeholder='Enter your email address'
        onChange={onChange}
        error={errors['email']}
      />
    </>
  );
};

export default RegisterInfo;
