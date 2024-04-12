'use client';

import { useCallback } from 'react';

import Modal from '../modal/Modal';
import DeleteAccount from '../deleteAccount/DeleteAccount';

import { useAccountModal } from '@/hooks/useAccountModal';

import './AccountModal.scss';

const AccountModal = () => {
  const isOpen = useAccountModal((store) => store.isOpen);
  const onClose = useAccountModal((store) => store.onClose);

  const onSubmit = useCallback(() => {
    console.log('Account deactivated!');
    onClose();
  }, [onClose]);

  let bodyContent: JSX.Element;

  bodyContent = <DeleteAccount />;

  return (
    <Modal
      isOpen={isOpen}
      title='Delete Account'
      actionLabel='Confirm Deletion'
      body={bodyContent}
      onClose={onClose}
      onSubmit={onSubmit}
    />
  );
};

export default AccountModal;
