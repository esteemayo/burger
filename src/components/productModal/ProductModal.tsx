'use client';

import { useCallback, useMemo, useState } from 'react';

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

  const onSubmit = useCallback(() => {
    if (step !== STEPS.IMAGE) {
      return onNext();
    }

    console.log('product created');
    setStep(STEPS.INFO);
  }, [onNext, step]);

  const actionLabel = useMemo(() => {
    return step === STEPS.IMAGE ? 'Create' : 'Next';
  }, [step]);

  const secondaryActionLabel = useMemo(() => {
    return step !== STEPS.INFO ? 'Back' : undefined;
  }, [step]);

  const secondaryAction = useMemo(() => {
    return step !== STEPS.INFO ? onPrev : undefined;
  }, [onPrev, step]);

  return (
    <Modal
      isOpen={isOpen}
      title='Create a new product'
      actionLabel={actionLabel}
      secondaryActionLabel={secondaryActionLabel}
      onClose={onClose}
      onSubmit={onSubmit}
      secondaryAction={secondaryAction}
    />
  );
};

export default ProductModal;
