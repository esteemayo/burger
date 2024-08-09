'use client';

import DropZone from '../dropZone/DropZone';
import GenderSelect from '../genderSelect/GenderSelect';

const RegisterAvatar = ({ gender, error, onChange, onSelect }) => {
  return (
    <>
      <DropZone id='avatar' label='Avatar' small onSelect={onSelect} />
      <GenderSelect value={gender} error={error} onChange={onChange} />
    </>
  );
};

export default RegisterAvatar;
