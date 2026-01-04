'use client';

import { useEffect, useState } from 'react';

export default function FacebookPixel() {
    const [load, setLoad] = useState(false);
    
  useEffect(() => {
    const timer = setTimeout(() => {
      const s = document.createElement('script');
      s.src = `
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', 'XXXX');
            fbq('track', 'PageView');
          `;
      s.async = true;
      document.body.appendChild(s);
    }, 3000); // delay

    return () => clearTimeout(timer);
  }, []);

  return null;
}
