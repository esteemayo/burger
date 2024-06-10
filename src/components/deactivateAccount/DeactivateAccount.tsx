'use client';

import Image from 'next/image';

import { useAccountModal } from '@/hooks/useAccountModal';

import './DeactivateAccount.scss';

interface DeactivateAccountProps { 
  isAdmin: Boolean | undefined;
}

const DeactivateAccount = ({ isAdmin }: DeactivateAccountProps) => {
  const onOpen = useAccountModal((state) => state.onOpen);

  if (isAdmin) {
    return;
  }

  return (
    <div className='deactivateAccount'>
      <button type='button' onClick={onOpen}>
        <Image src='/svg/user-minus.svg' width={15} height={15} alt='icon' />
        Delete my Account
      </button>
    </div>
  );
};

export default DeactivateAccount;
