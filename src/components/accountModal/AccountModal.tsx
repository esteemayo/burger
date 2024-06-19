'use client';

import { useCallback, useState } from 'react';
import { toast } from 'react-toastify';
import { signOut, useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

import Modal from '../modal/Modal';
import DeleteAccount from '../deleteAccount/DeleteAccount';

import { deleteUser } from '@/services/userService';
import { useAccountModal } from '@/hooks/useAccountModal';

import './AccountModal.scss';

const AccountModal = () => {
  const router = useRouter();
  const { data: session } = useSession();

  const isOpen = useAccountModal((store) => store.isOpen);
  const onClose = useAccountModal((store) => store.onClose);

  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = useCallback(async () => {
    setIsLoading(true);

    try {
      const userId = session?.user.id;

      const { data } = await deleteUser(userId as string);
      console.log('Account deactivated!', data);
      toast.success('Account deactivated!');
      onClose();
      signOut({
        callbackUrl: '/',
      });
    } catch (err: unknown) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  }, [onClose, router, session]);

  let bodyContent: JSX.Element;

  bodyContent = <DeleteAccount />;

  return (
    <Modal
      isOpen={isOpen}
      title='Delete Account'
      loading={isLoading}
      disabled={isLoading}
      actionLabel='Confirm Deletion'
      body={bodyContent}
      onClose={onClose}
      onSubmit={onSubmit}
    />
  );
};

export default AccountModal;
