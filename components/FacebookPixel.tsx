'use client';

import { useEffect, useState } from 'react';

export default function FacebookPixel() {
    const [load, setLoad] = useState(false);
    
  useEffect(() => {
    const timer = setTimeout(() => {
      const s = document.createElement('script');
      s.src = 'https://connect.facebook.net/en_US/fbevents.js';
      s.async = true;
      document.body.appendChild(s);
    }, 3000); // delay

    return () => clearTimeout(timer);
  }, []);

  return null;
}
