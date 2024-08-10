'use client';

import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { useSession } from 'next-auth/react';
import { useCallback } from 'react';

import { useAccountModal } from '@/hooks/useAccountModal';

import './DeactivateAccount.scss';

interface DeactivateAccountProps { 
  isAdmin: Boolean | undefined;
}

const DeactivateAccount = ({ isAdmin }: DeactivateAccountProps) => {
  const router = useRouter();
  const { data: session } = useSession();

  const onOpen = useAccountModal((state) => state.onOpen);

  const handleOpen = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      e.stopPropagation();

      if (session) {
        onOpen();
        return;
      }
      return router.push('/login');
    },
    [onOpen, router, session]
  );

  if (isAdmin) {
    return;
  }

  return (
    <div className='deactivateAccount'>
      <button type='button' onClick={handleOpen}>
        <Image src='/svg/user-minus.svg' width={15} height={15} alt='icon' />
        Delete my Account
      </button>
    </div>
  );
};

export default DeactivateAccount;
