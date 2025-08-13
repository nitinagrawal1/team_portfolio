import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * A component that automatically scrolls the window to the top
 * whenever the route changes. This is a common practice to ensure a
 * consistent user experience where page content always starts at the top.
 */
const ScrollToTop = () => {
  // Get the current location object from react-router-dom
  const { pathname } = useLocation();

  // The useEffect hook runs a side effect whenever the pathname changes.
  useEffect(() => {
    // Scroll to the top of the window
    window.scrollTo(0, 0);
  }, [pathname]); // The effect re-runs every time the pathname changes

  // This component doesn't render any UI, it's solely for its side effect.
  return null;
};

export default ScrollToTop;
