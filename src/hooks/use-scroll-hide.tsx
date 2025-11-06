// src/hooks/use-scroll-hide.tsx

import { useState, useEffect } from 'react';

const useScrollHide = (threshold = 100) => {
  const [shouldHide, setShouldHide] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // 1. Only hide if scrolled past an initial threshold (e.g., 100px)
      if (currentScrollY > threshold) {
        if (currentScrollY > lastScrollY) {
          // 2. Scrolling down: Hide the navbar
          setShouldHide(true);
        } else {
          // 3. Scrolling up: Show the navbar
          setShouldHide(false);
        }
      } else {
        // 4. Near the top: Always show the navbar
        setShouldHide(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY, threshold]);

  return shouldHide;
};

export default useScrollHide;