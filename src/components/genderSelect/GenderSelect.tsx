import { options } from '@/data/formData';

import { GenderSelectProps } from '@/types';
import ErrorMessage from '../errorMessage/ErrorMessage';

import './GenderSelect.scss';

const GenderSelect = ({ value, error, onChange }: GenderSelectProps) => {
  return (
    <div className='genderSelect'>
      <label htmlFor='gender'>Gender</label>
      <select name='gender' value={value} id='gender' onChange={onChange}>
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
      {error && <ErrorMessage message={error} />}
    </div>
  );
};

export default GenderSelect;
