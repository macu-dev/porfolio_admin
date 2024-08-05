import { useEffect, useState } from 'react';

const useScroll = (initialScrollY = 25) => {
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > initialScrollY) {
        setHasScrolled(true);
      } else {
        setHasScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [initialScrollY]);

  return { hasScrolled };
};

export default useScroll;
