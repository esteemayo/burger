import { options } from '@/data/formData';

import { GenderSelectProps } from '@/types';

import './GenderSelect.scss';

const GenderSelect = ({ onChange }: GenderSelectProps) => {
  return (
    <div className='genderSelect'>
      <label htmlFor='gender'>Gender</label>
      <select name='gender' id='gender' onChange={onChange}>
        <option value=''>Select a gender</option>
        {options.map((option) => {
          const { value, label } = option;
          return (
            <option key={value} value={value}>
              {label}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default GenderSelect;
