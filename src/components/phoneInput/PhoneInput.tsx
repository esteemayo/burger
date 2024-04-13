import './PhoneInput.scss';

const PhoneInput = () => {
  return (
    <div className='phoneInput'>
      <label htmlFor='phone'>Phone number</label>
      <div className='inputGroup'>
        <div className='inputGroupText'>
          +234
          <input type='tel' name='phone' id='phone' />
        </div>
      </div>
    </div>
  );
};

export default PhoneInput;
