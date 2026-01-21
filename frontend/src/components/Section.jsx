import React from 'react';

const Section = ({ 
  children, 
  className = '', 
  containerClassName = '',
  id,
  background = 'white' 
}) => {
  const backgroundClasses = {
    white: 'bg-white',
    gray: 'bg-gray-50',
    dark: 'bg-navy-900 text-white',
    navy: 'bg-navy-800 text-white',
  };
  
  return (
    <section 
      id={id}
      className={`section-padding ${backgroundClasses[background]} ${className}`}
    >
      <div className={`container-custom ${containerClassName}`}>
        {children}
      </div>
    </section>
  );
};

export default Section;
