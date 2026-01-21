import React from 'react';
import Button from './Button';

const Hero = ({
  headline,
  subheadline,
  description,
  primaryCTA = { text: 'Get Started', href: '/contact' },
  secondaryCTA = { text: 'Learn More', href: '/about' },
  className = ''
}) => {
  return (
    <div className={`relative min-h-[600px] md:min-h-[700px] flex items-center ${className}`}>
      <div className="container-custom">
        <div className="max-w-4xl mx-auto text-center">
          {headline && (
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-navy-900 mb-6 leading-tight">
              {headline}
            </h1>
          )}
          {subheadline && (
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-navy-700 mb-6">
              {subheadline}
            </h2>
          )}
          {description && (
            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
              {description}
            </p>
          )}
          <div className="flex text-black flex-col sm:flex-row gap-4 justify-center items-center">
            {primaryCTA && (
              <Button
                variant="primary"
                size="lg"
                href={primaryCTA.href}
                className='text-black'
              >
                {primaryCTA.text}
              </Button>
            )}
            {secondaryCTA && (
              <Button
                variant="outline"
                size="lg"
                href={secondaryCTA.href}
              >
                {secondaryCTA.text}
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
