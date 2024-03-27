'use client';

import Modal from '../modal/Modal';
import { useProductModal } from '@/hooks/useProductModal';

import './ProductModal.scss';

const ProductModal = () => {
  const isOpen = useProductModal((state) => state.isOpen);
  const onClose = useProductModal((state) => state.onClose);

  return <Modal isOpen={isOpen} actionLabel='Create' />;
};

export default ProductModal;
