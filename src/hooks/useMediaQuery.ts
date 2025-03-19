import { useState, useEffect } from 'react';
export const useMediaQuery = (query: string): boolean => {
  const [matches, setMatches] = useState(false);
  useEffect(() => {
    const media = window.matchMedia(query);
    const updateMatches = () => {
      setMatches(media.matches);
    };
    updateMatches();
    media.addEventListener('change', updateMatches);
    return () => {
      media.removeEventListener('change', updateMatches);
    };
  }, [query]);
  return matches;
};
export const useIsMobile = () => useMediaQuery('(max-width: 640px)');
export const useIsTablet = () => useMediaQuery('(min-width: 641px) and (max-width: 1024px)');
export const useIsDesktop = () => useMediaQuery('(min-width: 1025px)');