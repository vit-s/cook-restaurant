'use client'

import React, { useEffect } from 'react';
import Navbar               from './Navbar.tsx'

const Navbarin: React.FC = () => {
  useEffect(() => {

    // The debounced function receives our function as a parameter
    const debounce = (fn: Function) => {
      // This holds the requestAnimation reference, so we can cancel it if we wish.
      let frame: number;

      // The debounced function returns a new function that can receive a variable number of arguments
      return (...params: any[]) => {

        // If the frame variable has been defined, clear it now, and queue for next frame
        if (frame) {
          cancelAnimationFrame(frame);
        }

        // Queue our function call for the next frame
        frame = requestAnimationFrame(() => {

          // Call our function and pass any params we received
          fn(...params);
        })
      }
    }

    // Reads out the scroll position and stores it in the data attribute so we can use it in our stylesheets
    const storeScroll = () => {
      document.documentElement.dataset.scroll = window.scrollY.toString()
    }

    // Listener for new scroll events, gere we debounce our `storeScroll` function.
    document.addEventListener('scroll', debounce(storeScroll), {
      passive: true
    })

    // Update the scroll position for first time
    storeScroll()
  }, [])

  return (
    <>
      <Navbar/>
    </>
  );
};

export default Navbarin;
