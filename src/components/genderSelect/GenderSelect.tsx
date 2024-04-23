import { options } from '@/data/formData';

import './GenderSelect.scss';

const GenderSelect = () => {
  return (
    <div className='genderSelect'>
      <label htmlFor='gender'>Gender</label>
      <select name='gender' id='gender'>
        <option value=''>Choose a gender</option>
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
