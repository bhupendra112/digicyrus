import React from 'react';

const Button = ({
    children,
    variant = 'primary',
    size = 'md',
    className = '',
    onClick,
    type = 'button',
    href,
    disabled = false,
    ...props
}) => {
    const baseClasses = 'inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed';

    const variants = {
        primary: 'bg-navy-800 text-white hover:bg-navy-900 hover:shadow-lg focus:ring-navy-500 active:scale-95',
        secondary: 'bg-gray-100 text-navy-800 hover:bg-gray-200 hover:shadow-md focus:ring-navy-500 active:scale-95',
        outline: 'bg-transparent text-navy-800 hover:bg-navy-50 hover:shadow-sm focus:ring-navy-500 active:scale-95',
        ghost: 'bg-transparent text-navy-800 hover:bg-navy-50 focus:ring-navy-500 active:scale-95',
    };

    const sizes = {
        sm: 'px-4 py-2 text-sm',
        md: 'px-6 py-3 text-base',
        lg: 'px-8 py-4 text-lg',
    };

    // Remove default text color from variant if className contains text color override
    let variantClasses = variants[variant];
    if (className && (className.includes('text-') || className.includes('!text-'))) {
        // Remove all text color classes (including hover:text-white) to allow override
        variantClasses = variantClasses
            .replace(/\btext-\S+\s*/g, '')  // Remove text-white, text-navy-800, etc.
            .replace(/\bhover:text-\S+\s*/g, '')  // Remove hover:text-white, etc.
            .trim();

        // If text-black is specified and variant is primary, change background to light
        if (variant === 'primary' && className.includes('text-black')) {
            variantClasses = variantClasses.replace('bg-navy-800', 'bg-white').replace('hover:bg-navy-900', 'hover:bg-gray-100');
        }
    }

    const classes = `${baseClasses} ${variantClasses} ${sizes[size]} ${className}`.trim();

    if (href) {
        return (
            <a
                href={href}
                className={classes}
                {...props}
            >
                {children}
            </a>
        );
    }

    return (
        <button
            type={type}
            onClick={onClick}
            className={classes}
            disabled={disabled}
            {...props}
        >
            {children}
        </button>
    );
};

export default Button;
