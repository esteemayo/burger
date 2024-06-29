import { SlideButtonProps } from '@/types';

const SlideButton = ({
  label,
  disabled,
  className,
  onClick,
}: SlideButtonProps) => {
  return (
    <button
      type='button'
      disabled={disabled}
      onClick={onClick}
      className={className}
    >
      {label}
    </button>
  );
};

export default SlideButton;
