'use client';

import Input from '../input/Input';

import { AddressInputsPropa } from '@/types';

const AddressInputs = ({
  city,
  state,
  street,
  errors,
  onChange,
}: AddressInputsPropa) => {
  return (
    <>
      <Input
        name='state'
        label='State'
        value={state}
        placeholder='State'
        onChange={onChange}
        error={errors.state}
      />
      <Input
        name='city'
        label='City'
        value={city}
        placeholder='City'
        onChange={onChange}
        error={errors.city}
      />
      <Input
        name='street'
        label='Street'
        value={street}
        placeholder='Street'
        onChange={onChange}
        error={errors.street}
      />
    </>
  );
};

export default AddressInputs;
