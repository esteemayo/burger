'use client';

import { useCallback } from 'react';

import Modal from '../modal/Modal';
import { useAccountModal } from '@/hooks/useAccountModal';

import './AccountModal.scss';

const AccountModal = () => {
  const isOpen = useAccountModal((state) => state.isOpen);
  const onClose = useAccountModal((state) => state.onClose);

  const onSubmit = useCallback(() => {
    console.log('Account deactivated!');
    onClose();
  }, [onClose]);

  const bodyContent: React.ReactElement = (
    <div className='accountModal'>
      <p
        className='accountModalText'
        style={{ fontSize: '1.3rem', color: '#00000059' }}
      >
        Deleting your account will remove all of your information from our
        database. This cannot be undone.
      </p>
    </div>
  );

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
