import Image from 'next/image';

import './DeactivateAccount.scss';

const DeactivateAccount = () => {
  return (
    <div className='deactivateAccount'>
      <button type='button'>
        <Image src='/' width={15} height={15} alt='icon' />
        Delete my Account
      </button>
    </div>
  );
};

export default DeactivateAccount;
