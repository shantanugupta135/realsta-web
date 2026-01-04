'use client';

import { useEffect } from 'react';

export default function FontAwesomeLoader() {
  useEffect(() => {
    import('@fortawesome/fontawesome-free/css/all.min.css');
  }, []);

  return null;
}