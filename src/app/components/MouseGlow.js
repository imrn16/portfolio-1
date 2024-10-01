"use client"
import { useEffect, useRef } from 'react';

const MouseGlow = () => {
  const glowRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (event) => {
      const { clientX, clientY } = event;
      glowRef.current.style.left = `${clientX}px`;
      glowRef.current.style.top = `${clientY}px`;
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div
      ref={glowRef}
      className="fixed w-96 h-96 bg-blue-800 rounded-full opacity-80 pointer-events-none transform -translate-x-1/2 -translate-y-1/2 "
      style={{ width: `24rem`, height: `24rem`, filter: 'blur(200px)',  }}
    />
  );
};

export default MouseGlow;
