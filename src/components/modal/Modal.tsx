import Image from 'next/image';

import './Modal.scss';

const Modal = () => {
  return (
    <aside className='modal'>
      <div className='box active'>
        <div className='wrapper'>
          <h1 className='modalHeading'>Header</h1>
          <div className='modalBody'>Body</div>
          <hr />
          <div className='modalFooter'>
            <div className='modalBtnWrap'>
              <button type='button' className='btnSecondary'>
                Prev
              </button>
              <button type='button' className='btnPrimary'>
                Next
              </button>
            </div>
            Footer
          </div>
          <div className='modalCloseBtnWrap'>
            <button type='button' className='closeBtn'>
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
