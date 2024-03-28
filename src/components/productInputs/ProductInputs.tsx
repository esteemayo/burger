import Input from '../input/Input';

import './ProductInputs.scss';

const ProductInputs = ({ onChange }) => {
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
          onChange={onChange}
        />
        <div className='ingredients'>
          <span>chicken</span>
          <button type='button'>Add</button>
        </div>
      </div>
    </div>
  );
};

export default ProductInputs;
