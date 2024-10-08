import { useCallback, useEffect, useState } from 'react';

export const useScroll = () => {
  const [isActive, setIsActive] = useState(false);

  const isActiveHandler = useCallback(() => {
    setIsActive(window.scrollY > 0 ? true : false);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', isActiveHandler);
    return () => window.removeEventListener('scroll', isActiveHandler);
  }, [isActiveHandler]);

  return {
    isActive,
  };
};
