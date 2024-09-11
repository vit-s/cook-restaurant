'use client'

import React, { useEffect } from 'react';
import Navbar               from './Navbar.tsx';

// Define a more specific type for the debounce function
type DebounceFunction = (...args: unknown[]) => void;

const Navbarin: React.FC = () => {
  useEffect(() => {

    // The debounced function receives our function as a parameter
    const debounce = (fn: DebounceFunction) => {
      let frame: number | undefined;

      return (...params: unknown[]) => {
        if (frame !== undefined) {
          cancelAnimationFrame(frame);
        }

        frame = requestAnimationFrame(() => {
          fn(...params);
        });
      };
    };

    // Reads out the scroll position and stores it in the data attribute so we can use it in our stylesheets
    const storeScroll = () => {
      document.documentElement.dataset.scroll = window.scrollY.toString();
    };

    // Listener for new scroll events, where we debounce our `storeScroll` function.
    const debouncedStoreScroll = debounce(storeScroll);
    document.addEventListener('scroll', debouncedStoreScroll, {
      passive: true
    });

    // Update the scroll position for the first time
    storeScroll();

    // Clean up the event listener on component unmount
    return () => {
      document.removeEventListener('scroll', debouncedStoreScroll);
    };
  }, []);

  return (
    <>
      <Navbar/>
    </>
  );
};

export default Navbarin;
