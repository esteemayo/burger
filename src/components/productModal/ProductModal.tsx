'use client';

import { useCallback, useState } from 'react';

import Modal from '../modal/Modal';
import { useProductModal } from '@/hooks/useProductModal';

import './ProductModal.scss';

const enum STEPS {
  INFO = 0,
  IMAGE = 1,
}

const ProductModal = () => {
  const isOpen = useProductModal((state) => state.isOpen);
  const onClose = useProductModal((state) => state.onClose);

  const [step, setStep] = useState(STEPS.INFO);

  const onPrev = useCallback(() => {
    setStep((value) => {
      return value - 1;
    });
  }, []);

  const onNext = useCallback(() => {
    setStep((value) => {
      return value + 1;
    });
  }, []);

  const onSubmit = useCallback(() => {}, []);

  return (
    <Modal
      isOpen={isOpen}
      actionLabel='Create'
      onClose={onClose}
      onSubmit={onSubmit}
    />
  );
};

export default ProductModal;
