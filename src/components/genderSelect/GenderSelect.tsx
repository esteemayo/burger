import './GenderSelect.scss';

const GenderSelect = () => {
  const options = [
    { value: 'male', label: 'Male' },
    { value: 'female', label: 'Female' },
    { value: 'other', label: 'Other' },
  ];

  return (
    <div className='genderSelect'>
      <label htmlFor='gender'>Gender</label>
      <select name='gender' id='gender'>
        <option value='male'>Male</option>
        <option value='female'>Female</option>
        <option value='other'>Other</option>
      </select>
    </div>
  );
};

export default GenderSelect;
