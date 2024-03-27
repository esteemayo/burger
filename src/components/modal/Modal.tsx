import Image from 'next/image';

import { ModalProps } from '@/types';

import './Modal.scss';

const Modal = ({
  isOpen,
  title,
  disabled,
  actionLabel,
  secondaryActionLabel,
  body,
  footer,
  onClose,
  onSubmit,
  secondaryAction,
}: ModalProps) => {
  return (
    <aside className='modal'>
      <div className='box active'>
        <div className='wrapper'>
          <h1 className='modalHeading'>{title}</h1>
          <div className='modalBody'>{body}</div>
          <hr />
          <div className='modalFooter'>
            <div className='modalBtnWrap'>
              {secondaryActionLabel && secondaryAction && (
                <button
                  type='button'
                  disabled={disabled}
                  className='btnSecondary'
                >
                  Prev
                </button>
              )}
              {actionLabel && onSubmit && (
                <button
                  type='button'
                  disabled={disabled}
                  className='btnPrimary'
                >
                  Next
                </button>
              )}
            </div>
            {footer}
          </div>
          <div className='modalCloseBtnWrap'>
            <button onClick={onClose} type='button' className='closeBtn'>
              <Image
                src='/svg/x-mark.svg'
                width={25}
                height={25}
                alt='close icon'
              />
            </button>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Modal;
