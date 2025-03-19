import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
export const useScrollToTop = (options = { behavior: 'smooth' as ScrollBehavior }) => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: options.behavior,
    });
  }, [pathname, options.behavior]);
};