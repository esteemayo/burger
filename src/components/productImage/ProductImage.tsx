import DropZone from '../dropZone/DropZone';
import IngredientInput from '../ingredientInput/IngredientInput';

import { ProductImageProps } from '@/types';

const ProductImage = ({
  ingredient,
  ingredients,
  loading,
  error,
  onAdd,
  onChange,
  onDelete,
  onSelect,
}: ProductImageProps) => {
  return (
    <>
      <IngredientInput
        ingredient={ingredient}
        ingredients={ingredients}
        loading={loading}
        error={error}
        onAdd={onAdd}
        onChange={onChange}
        onDelete={onDelete}
      />
      <DropZone id='image' label='Image' onSelect={onSelect} />
    </>
  );
};

export default ProductImage;
