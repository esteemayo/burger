import Input from '../input/Input';
import { ProductInputsProps } from '@/types';

import './ProductInputs.scss';
import Textarea from '../textarea/Textarea';

const ProductInputs = ({
  name,
  price,
  ingredient,
  ingredients,
  onAdd,
  onChange,
  onChangeIngredient,
}: ProductInputsProps) => {
  return (
    <div className='productInputs'>
      <Input
        name='name'
        label='Product name'
        value={name}
        placeholder='Product name'
        onChange={onChange}
      />
      <Textarea
        name='desc'
        label='Description'
        placeholder='Description'
        onChange={onChange}
      />
      <Input
        name='price'
        type='number'
        label='Price'
        value={price}
        min={1}
        placeholder='Price'
        onChange={onChange}
      />
      <div className='ingredientWrap'>
        <Input
          name='ingredient'
          label='Ingredients'
          value={ingredient}
          placeholder='Ingredients'
          onChange={onChangeIngredient}
        />
        <div className='ingredientLists'>
          <div className='ingredients'>
            {ingredients?.map((item) => {
              return <span key={item}>{item}</span>;
            })}
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
