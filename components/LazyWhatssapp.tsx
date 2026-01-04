'use client';
import { useEffect, useState } from 'react';
import WhatsappFloatingIcon from './WhatsappFloatingIcon';

export default function LazyWhatsapp() {
  const [load, setLoad] = useState(false);

  useEffect(() => {
    const trigger = () => {
      setLoad(true);
      window.removeEventListener('pointerdown', trigger);
    };
    window.addEventListener('pointerdown', trigger);
  }, []);

  if (!load) return null;
  return <WhatsappFloatingIcon />;
}
