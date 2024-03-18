import { ButtonProps } from '@/types';

const Button = ({
  label,
  type = 'button',
  className,
  children,
}: ButtonProps) => {
  return (
    <button type={type} className={className}>
      {children}
      {label}
    </button>
  );
};

export default Button;
