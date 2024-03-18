import { ButtonProps } from '@/types';

const Button = ({ label, type = 'button', className }: ButtonProps) => {
  return (
    <button type={type} className={className}>
      {label}
    </button>
  );
};

export default Button;
