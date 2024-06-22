'use client';

import { useCallback, useState } from 'react';
import { toast } from 'react-toastify';
import { signOut, useSession } from 'next-auth/react';

import Modal from '../modal/Modal';
import DeleteAccount from '../deleteAccount/DeleteAccount';

import { deleteUser } from '@/services/userService';
import { useAccountModal } from '@/hooks/useAccountModal';

import './AccountModal.scss';

const AccountModal = () => {
  const { data: session } = useSession();

  const isOpen = useAccountModal((store) => store.isOpen);
  const onClose = useAccountModal((store) => store.onClose);

  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = useCallback(async () => {
    setIsLoading(true);

    try {
      const userId = session?.user.id;

      const res = await deleteUser(userId as string);

      if (res.status === 200) {
        toast.success(res.message);
        onClose();
        signOut({
          callbackUrl: '/',
        });
      }
    } catch (err: any) {
      console.log(err);
      toast.error(err?.response.data.message);
    } finally {
      setIsLoading(false);
    }
  }, [onClose, session]);

  let bodyContent: JSX.Element | undefined;

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
