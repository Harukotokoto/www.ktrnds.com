import React, { useRef, useEffect } from 'react';
import { NextPage } from 'next';

type Props = {
  className?: string;
  children: React.ReactNode;
};

export const ScrollRevealContainer: NextPage<Props> = ({
  children,
  className,
}) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    async function animate() {
      if (sectionRef.current) {
        const sr = (await import('scrollreveal')).default;
        sr().reveal(sectionRef.current, {
          delay: 500,
          opacity: 0,
          origin: 'bottom',
          distance: '20px',
          viewFactor: 0.2,
        });
      }
    }

    animate();
  }, [sectionRef]);
  return (
    <div className={`${className}`} ref={sectionRef}>
      {children}
    </div>
  );
};
