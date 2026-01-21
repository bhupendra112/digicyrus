import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from './Button';
import logo from '../assets/compnay.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Our Mission', href: '/mission' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'How We Work', href: '/how-we-work' },
    { name: 'Why Digi Cyrus', href: '/why-digi-cyrus' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="container-custom">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link to="/" className="flex items-center space-x-3" aria-label="Digi Cyrus Home">
            <img
              src={logo}
              className="h-36 md:h-36 w-auto"
              alt="Digi Cyrus - Build Scalable Digital Businesses"
              title="Digi Cyrus"
            />

          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="text-gray-700 hover:text-navy-900 font-medium transition-colors"
              >
                {item.name}
              </Link>
            ))}
            <Button variant="primary" size="sm" href="/contact">
              Get Started
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2 rounded-md text-gray-700 hover:text-navy-900 hover:bg-gray-100"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t">
            <div className="flex flex-col space-y-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="text-gray-700 hover:text-navy-900 font-medium transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}

            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
