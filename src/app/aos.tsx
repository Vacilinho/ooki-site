'use client';

import { useEffect } from 'react';
import 'aos/dist/aos.css';
import AOS from 'aos';

export default function AOSInit() {
  useEffect(() => {
    AOS.init({
      duration: 800, // duração da animação em ms
      once: true, // anima apenas uma vez
      easing: 'ease-in-out', // curva de animação
    });
  }, []);

  return null; // nada é renderizadodsa
}
