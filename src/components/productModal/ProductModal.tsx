'use client';

import { useCallback, useMemo, useState } from 'react';

import ProductImage from '../productImage/ProductImage';
import Modal from '../modal/Modal';
import ProductInputs from '../productInputs/ProductInputs';

import { useProductModal } from '@/hooks/useProductModal';
import { ProductData, ProductErrors } from '@/types';
import { validateProductInput } from '@/validations/product';

const enum STEPS {
  INFO = 0,
  IMAGE = 1,
}

const initialState: ProductData = {
  name: '',
  desc: '',
  price: 1,
};

const ProductModal = () => {
  const isOpen = useProductModal((store) => store.isOpen);
  const onClose = useProductModal((store) => store.onClose);

  const [file, setFile] = useState<File[]>();
  const [ingredient, setIngredient] = useState('');
  const [step, setStep] = useState(STEPS.INFO);
  const [errors, setErrors] = useState<ProductErrors>({});
  const [data, setData] = useState(initialState);
  const [ingredients, setIngredients] = useState<string[]>([]);

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
    (e: React.ChangeEvent<HTMLInputElement>) => {
      if (ingredients.includes(e.target.value)) {
        return;
      }

      setIngredient(e.target.value);
    },
    [ingredients]
  );

  const handleIngredients = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      e.stopPropagation();

      setIngredients((prev) => [...prev, ingredient]);
      setIngredient('');
    },
    [ingredient]
  );

  const handleDelete = useCallback(
    (_e: React.MouseEvent<HTMLImageElement>, value: string) => {
      setIngredients((prev) => {
        return [...prev].filter((item) => item !== value);
      });
    },
    []
  );

  const handleClear = useCallback(() => {
    setIngredients([]);
    setData(initialState);
  }, []);

  const onSubmit = useCallback(() => {
    if (step !== STEPS.IMAGE) {
      return onNext();
    }

    const errors = validateProductInput(data, ingredients);
    if (Object.keys(errors).length > 0) return setErrors(errors);

    setErrors({});

    const selectedFile = file?.[0];

    console.log({ ...data, ingredients, selectedFile });
    handleClear();
    setStep(STEPS.INFO);
  }, [data, file, handleClear, ingredients, onNext, step]);

  const actionLabel = useMemo(() => {
    return step === STEPS.IMAGE ? 'Create' : 'Next';
  }, [step]);

  const secondaryActionLabel = useMemo(() => {
    return step !== STEPS.INFO ? 'Back' : undefined;
  }, [step]);

  const secondaryAction = useMemo(() => {
    return step !== STEPS.INFO ? onPrev : undefined;
  }, [onPrev, step]);

  const { name, desc, price } = data;

  let bodyContent: JSX.Element;

  bodyContent = (
    <ProductInputs
      name={name}
      desc={desc}
      price={price}
      errors={errors}
      onChange={handleChange}
    />
  );

  if (step === STEPS.IMAGE) {
    bodyContent = (
      <ProductImage
        ingredient={ingredient}
        ingredients={ingredients}
        error={errors.ingredients}
        onAdd={handleIngredients}
        onChange={handleAddIngredient}
        onDelete={handleDelete}
        onSelect={setFile}
      />
    );
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
