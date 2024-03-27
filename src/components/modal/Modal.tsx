import Image from 'next/image';

import './Modal.scss';

const Modal = () => {
  return (
    <aside className='modal'>
      <div className='box active'>
        <div className='wrapper'>
          <h1 className='modalHeading'>Header</h1>
          <div className='modalBody'>Body</div>
          <div className='modalFooter'>
            <div className='modalBtnWrap'>
              <button type='button'>Prev</button>
              <button type='button'>Next</button>
            </div>
            Footer
          </div>
          <div className='modalCloseBtnWrap'>
            <button type='button' className='closeBtn'>
              <Image
                src='/svg/x-mark.svg'
                width={20}
                height={20}
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
