import { TextareaProps } from '@/types';
import ErrorMessage from '../errorMessage/ErrorMessage';

import './Textarea.scss';

const Textarea = ({ name, label, error, ...rest }: TextareaProps) => {
  return (
    <div className='formGroup'>
      <label htmlFor={name}>{label}</label>
      <textarea {...rest} name={name} id={name} />
      {error && <ErrorMessage message={error} />}
    </div>
  );
};

export default Textarea;
