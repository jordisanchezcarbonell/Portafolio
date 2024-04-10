'use client';
import React, { ReactNode } from 'react';

interface SectionProps {
  className: string;
  id: string;
  children: ReactNode;
}

const Section: React.FC<SectionProps> = ({ className, id, children }) => {
  return (
    <section
      // id={id}
      // data-section={id}
      className={`section ${className}  w-full mx-auto container lg:max-w-4xl md:max-w-2xl`}
    >
      {children}
    </section>
  );
};

export default Section;
