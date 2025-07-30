import React from 'react';

const Section = ({ children, className = '', id = '' }) => {
  return (
    <section 
      id={id}
      className={`
        py-20 px-4
        scroll-mt-16
        animate-fadeIn
        ${className}
      `}
    >
      <div className="container mx-auto max-w-7xl">
        {children}
      </div>
    </section>
  );
};

export default Section; 