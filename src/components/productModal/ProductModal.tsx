'use client';

import { useCallback, useMemo, useState } from 'react';

import DropZone from '../dropZone/DropZone';
import Modal from '../modal/Modal';
import ProductInputs from '../productInputs/ProductInputs';

import { useProductModal } from '@/hooks/useProductModal';

import './ProductModal.scss';

interface IData {
  name: string;
  price: number;
  ingredients: string[];
}

const enum STEPS {
  INFO = 0,
  IMAGE = 1,
}

const initialState: IData = {
  name: '',
  price: 1,
  ingredients: [],
};

const ProductModal = () => {
  const isOpen = useProductModal((state) => state.isOpen);
  const onClose = useProductModal((state) => state.onClose);

  const [data, setData] = useState(initialState);
  const [step, setStep] = useState(STEPS.INFO);
  const [ingredient, setIngredient] = useState<string[]>([]);

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

  const handleChange = useCallback(
    ({
      target: input,
    }: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { name, value } = input;

      setData((prev) => {
        return { ...prev, [name]: value };
      });
    },
    []
  );

  const handleAddIngredient = useCallback(
    ({ target: input }: React.ChangeEvent<HTMLInputElement>) => {
      const { value } = input;

      setIngredient((prev) => {
        return [...prev, value];
      });
    },
    []
  );

  const handleIngredients = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      e.stopPropagation();

      setData((prev) => {
        return { ...prev, ingredients: [...ingredient] };
      });
    },
    [ingredient]
  );

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

  let bodyContent: JSX.Element;

  bodyContent = (
    <ProductInputs
      onAdd={handleIngredients}
      onChange={handleChange}
      onChangeIngredient={handleAddIngredient}
    />
  );

  if (step === STEPS.IMAGE) {
    bodyContent = <DropZone />;
  }

  return (
    <Modal
      isOpen={isOpen}
      title='Create a new product'
      actionLabel={actionLabel}
      secondaryActionLabel={secondaryActionLabel}
      body={bodyContent}
      onClose={onClose}
      onSubmit={onSubmit}
      secondaryAction={secondaryAction}
    />
  );
};

export default ProductModal;
