import Input from '../input/Input';
import { ProductInputsProps } from '@/types';

import './ProductInputs.scss';

const ProductInputs = ({
  onAdd,
  onChange,
  onChangeIngredient,
}: ProductInputsProps) => {
  return (
    <div className='productInputs'>
      <Input
        name='name'
        label='Product name'
        placeholder='Product name'
        onChange={onChange}
      />
      <Input
        name='price'
        type='number'
        label='Price'
        min={1}
        placeholder='Price'
        onChange={onChange}
      />
      <div className='ingredientWrap'>
        <Input
          name='ingredient'
          label='Ingredients'
          placeholder='Ingredients'
          onChange={onChangeIngredient}
        />
        <div className='ingredientLists'>
          <div className='ingredients'>
            <span>chicken</span>
            <span>fries</span>
          </div>
          <button type='button' onClick={onAdd}>
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductInputs;
