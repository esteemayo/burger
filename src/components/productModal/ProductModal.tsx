'use client';

import { useSession } from 'next-auth/react';
import { toast } from 'react-toastify';
import { useCallback, useMemo, useState } from 'react';
import { useRouter } from 'next/navigation';

import ProductImage from '../productImage/ProductImage';
import Modal from '../modal/Modal';
import ProductInputs from '../productInputs/ProductInputs';

import { useProductModal } from '@/hooks/useProductModal';
import { validateProductInput } from '@/validations/product';
import { createProduct } from '@/services/productService';

import { upload } from '@/utils/upload';
import { ProductData, ProductErrors } from '@/types';

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
  const router = useRouter();
  const { data: session } = useSession();

  const isOpen = useProductModal((store) => store.isOpen);
  const onClose = useProductModal((store) => store.onClose);

  const [file, setFile] = useState<File[]>();
  const [ingredient, setIngredient] = useState('');
  const [step, setStep] = useState(STEPS.INFO);
  const [errors, setErrors] = useState<ProductErrors>({});
  const [data, setData] = useState(initialState);
  const [ingredients, setIngredients] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [loading, setLoading] = useState(false);

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

      if (ingredients.includes(value)) {
        return;
      }

      setIngredient(value);
    },
    [ingredients]
  );

  const handleIngredients = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      e.stopPropagation();

      setLoading(true);

      setTimeout(() => {
        setIngredients((prev) => {
          return [...prev, ingredient];
        });

        setIngredient('');
        setLoading(false);
      }, 1000);
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

  const handleCreate = useCallback(
    async <T extends object>(product: T) => {
      setIsLoading(true);

      try {
        const res = await createProduct({ ...product });

        if (res.status === 201) {
          handleClear();
          setStep(STEPS.INFO);

          toast.success('Product created!');
          onClose();

          router.push('/products');
        }
      } catch (err: unknown) {
        console.log(err);
      } finally {
        setIsLoading(false);
      }
    },
    [handleClear, onClose, router]
  );

  const onSubmit = useCallback(async () => {
    if (step !== STEPS.IMAGE) {
      return onNext();
    }

    const errors = validateProductInput(data, ingredients);
    if (Object.keys(errors).length > 0) return setErrors(errors);

    setErrors({});

    const selectedFile = file?.[0];
    const url = await upload(selectedFile);

    const newProduct = {
      ...data,
      price: +data.price,
      ingredients,
      image: url,
    };

    await handleCreate({ ...newProduct });
  }, [data, file, handleCreate, ingredients, onNext, step]);

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

  let bodyContent: JSX.Element | undefined;

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
        loading={loading}
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
      loading={isLoading}
      disabled={isLoading}
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
