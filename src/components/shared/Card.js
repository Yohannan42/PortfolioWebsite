import React from 'react';

const Card = ({ children, className = '', hover = true }) => {
  return (
    <div 
      className={`
        bg-white/5 backdrop-blur-lg
        rounded-xl shadow-xl
        border border-white/10
        p-6
        transition-all duration-300
        ${hover ? 'hover:scale-[1.02] hover:bg-white/10' : ''}
        ${className}
      `}
    >
      {children}
    </div>
  );
};

export default Card; 