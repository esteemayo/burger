'use client';

import { useSession } from 'next-auth/react';

import NewProduct from '../newProduct/NewProduct';
import AccountData from '../accountData/AccountData';

import AccountPassword from '../accountPassword/AccountPassword';
import DeactivateAccount from '../deactivateAccount/DeactivateAccount';

import './AccountDetails.scss';

const AccountDetails = () => {
  const { data: session } = useSession();

  return (
    <div className='accountDetails'>
      <AccountData currentUser={session?.user} />
      <AccountPassword userId={session?.user.id} />
      <DeactivateAccount isAdmin={session?.user.isAdmin} />
      <NewProduct isAdmin={session?.user.isAdmin} />
    </div>
  );
};

export default AccountDetails;
