'use client';

import DropZone from '../dropZone/DropZone';
import GenderSelect from '../genderSelect/GenderSelect';

import { RegisterAvatarProps } from '@/types';

const RegisterAvatar = ({
  gender,
  error,
  onChange,
  onSelect,
}: RegisterAvatarProps) => {
  return (
    <>
      <DropZone id='avatar' label='Avatar' small onSelect={onSelect} />
      <GenderSelect value={gender} error={error} onChange={onChange} />
    </>
  );
};

export default RegisterAvatar;
