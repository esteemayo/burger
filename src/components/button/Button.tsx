import { ButtonProps } from '@/types';
import Spinner from '../spinner/Spinner';

const Button = ({
  label,
  disabled,
  loading,
  type = 'button',
  className,
  children,
}: ButtonProps) => {
  return (
    <button type={type} disabled={disabled} className={className}>
      {children}
      {loading ? <Spinner /> : label}
    </button>
  );
};

export default Button;
