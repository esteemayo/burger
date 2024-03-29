'use client';

import { useCallback } from 'react';

import Modal from '../modal/Modal';
import DeleteAccount from '../deleteAccount/DeleteAccount';

import { useAccountModal } from '@/hooks/useAccountModal';

import './AccountModal.scss';

const AccountModal = () => {
  const isOpen = useAccountModal((state) => state.isOpen);
  const onClose = useAccountModal((state) => state.onClose);

  const onSubmit = useCallback(() => {
    console.log('Account deactivated!');
    onClose();
  }, [onClose]);

  const bodyContent: JSX.Element = <DeleteAccount />;

  return (
    <Modal
      isOpen={isOpen}
      title='Delete Account'
      actionLabel='Confirm deletion'
      body={bodyContent}
      onClose={onClose}
      onSubmit={onSubmit}
    />
  );
};

export default AccountModal;
