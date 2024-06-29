import { SlideButtonsProps } from '@/types';

import './SlideButtons.scss';

const SlideButtons = ({
  onPrev,
  onNext,
  prevBtnClasses,
  nextBtnClasses,
}: SlideButtonsProps) => {
  return (
    <div className='slideButtons'>
      <button type='button' onClick={onPrev} className={prevBtnClasses}>
        Prev
      </button>
      <button type='button' onClick={onNext} className={nextBtnClasses}>
        Next
      </button>
    </div>
  );
};

export default SlideButtons;
