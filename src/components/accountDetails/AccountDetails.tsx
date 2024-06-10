'use client';

import { useSession } from 'next-auth/react';

import AccountPassword from '../accountPassword/AccountPassword';
import NewProduct from '../newProduct/NewProduct';
import DeactivateAccount from '../deactivateAccount/DeactivateAccount';
import AccountData from '../accountData/AccountData';

import './AccountDetails.scss';

const AccountDetails = () => {
  const { data: session } = useSession()

  return (
    <div className='accountDetails'>
      <AccountData userId={session?.user.id} />
      <AccountPassword />
      <DeactivateAccount isAdmin={session?.user.isAdmin} />
      <NewProduct isAdmin={session?.user.isAdmin} />
    </div>
  );
};

export default AccountDetails;
