import Input from '../input/Input';
import { ProductInputsProps } from '@/types';

import './ProductInputs.scss';
import Textarea from '../textarea/Textarea';

const ProductInputs = ({ name, desc, price, onChange }: ProductInputsProps) => {
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
        value={desc}
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
    </div>
  );
};

export default ProductInputs;
