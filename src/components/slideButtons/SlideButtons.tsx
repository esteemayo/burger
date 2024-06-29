'use client';

import { SlideButtonsProps } from '@/types';
import SlideButton from '../slideButton/SlideButton';

import './SlideButtons.scss';

const SlideButtons = ({
  onPrev,
  onNext,
  disabled,
  prevBtnClasses,
  nextBtnClasses,
}: SlideButtonsProps) => {
  return (
    <div className='slideButtons'>
      <SlideButton
        label='Prev'
        disabled={disabled}
        onClick={onPrev}
        className={prevBtnClasses}
      />
      <SlideButton
        label='Next'
        disabled={disabled}
        onClick={onNext}
        className={nextBtnClasses}
      />
    </div>
  );
};

export default SlideButtons;
