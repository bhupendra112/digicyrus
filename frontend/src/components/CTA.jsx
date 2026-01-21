import React from 'react';
import Button from './Button';
import Section from './Section';

const CTA = ({
    headline,
    description,
    primaryCTA = { text: 'Get Started', href: '/contact' },
    secondaryCTA,
    background = 'navy',
    className = ''
}) => {
    const isDark = background === 'navy' || background === 'dark';

    return (
        <Section background={background} className={className}>
            <div className="max-w-3xl mx-auto text-center">
                {headline && (
                    <h2
                        className={`text-3xl md:text-4xl lg:text-5xl font-bold mb-6 ${isDark ? 'text-black' : 'text-navy-900'}`}
                    >
                        {headline}
                    </h2>
                )}
                {description && (
                    <p
                        className={`text-lg md:text-xl mb-8 ${isDark ? 'text-black' : 'text-gray-700'}`}
                    >
                        {description}
                    </p>
                )}
                <div className="flex flex-col text-black sm:flex-row gap-4 justify-center items-center">
                    {primaryCTA && (
                        <Button
                            variant={background === 'navy' || background === 'dark' ? 'secondary' : 'primary'}
                            size="lg"
                            href={primaryCTA.href}
                        >
                            {primaryCTA.text}
                        </Button>
                    )}
                    {secondaryCTA && (
                        <Button
                            variant={background === 'navy' || background === 'dark' ? 'outline' : 'outline'}
                            size="lg"
                            href={secondaryCTA.href}
                            className={background === 'navy' || background === 'dark' ? 'border-white text-black hover:bg-white hover:text-navy-800' : ''}
                        >
                            {secondaryCTA.text}
                        </Button>
                    )}
                </div>
            </div>
        </Section>
    );
};

export default CTA;
