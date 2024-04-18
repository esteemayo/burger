import { ButtonProps } from '@/types';

const Button = ({
  label,
  disabled,
  type = 'button',
  className,
  children,
}: ButtonProps) => {
  return (
    <button type={type} disabled={disabled} className={className}>
      {children}
      {label}
    </button>
  );
};

export default Button;
