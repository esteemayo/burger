'use client';

import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import { useCallback, useEffect, useMemo, useState } from 'react';

import './ScrollTop.scss';

const ScrollTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = useCallback(() => {
    setIsVisible(window.scrollY > 500 ? true : false);
  }, []);

  const handleScroll = useCallback((e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();

    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, []);

  const scrollClasses = useMemo(() => {
    return isVisible ? 'scrollTop show' : 'scrollTop';
  }, [isVisible]);

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, [toggleVisibility]);

  return (
    <div className={scrollClasses}>
      <button type='button' onClick={handleScroll}>
        <ExpandLessIcon />
      </button>
    </div>
  );
};

export default ScrollTop;
