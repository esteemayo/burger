'use client';

import { SlideButtonsProps } from '@/types';
import SlideButton from '../slideButton/SlideButton';

import './SlideButtons.scss';

const SlideButtons = ({
  onPrev,
  onNext,
  prevBtnClasses,
  nextBtnClasses,
}: SlideButtonsProps) => {
  return (
    <div className='slideButtons'>
      <SlideButton label='Prev' onClick={onPrev} className={prevBtnClasses} />
      <SlideButton label='Next' onClick={onNext} className={nextBtnClasses} />
    </div>
  );
};

export default SlideButtons;
