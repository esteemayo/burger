'use client';

import Modal from '../modal/Modal';
import { useAccountModal } from '@/hooks/useAccountModal';

import './AccountModal.scss';

const AccountModal = () => {
  const isOpen = useAccountModal((state) => state.isOpen);
  const onClose = useAccountModal((state) => state.onClose);

  return <Modal isOpen={isOpen} onClose={onClose} />;
};

export default AccountModal;
