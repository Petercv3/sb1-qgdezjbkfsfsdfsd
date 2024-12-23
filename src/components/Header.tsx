import React, { useState, useEffect } from 'react';
import { navItems } from '../utils/constants';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Header */}
      <header
        className={`fixed top-4 left-1/2 transform -translate-x-1/2 px-10 py-4 shadow-lg rounded-full transition-all duration-300 z-50 flex items-center justify-between w-3/4 ${
          isScrolled ? 'bg-opacity-75 backdrop-blur-md' : 'bg-opacity-90'
        } bg-gray-900 text-gray-100`}
      >
        {/* Logo */}
        <div className="flex items-center space-x-4">
          <img
            src="/logo.png"
            alt="Logo"
            className="h-10 w-10 object-contain"
          />
          <button
            onClick={() => setIsMenuOpen((prev) => !prev)}
            className="text-gray-300 hover:text-blue-400 text-sm font-medium transition-colors"
          >
            Meny
          </button>
        </div>

        {/* "Få Tilbud"-knapp */}
        <button
          onClick={() =>
            (window.location.href =
              'mailto:pkatrykk@gmail.com?subject=Be om tilbud&body=Hei, jeg ønsker et tilbud på deres stofftrykkstjenester.')
          }
          className="bg-blue-700 text-white px-6 py-3 rounded-md text-sm font-medium hover:bg-blue-600 transition-colors"
        >
          Få Tilbud
        </button>
      </header>

      {/* Navigasjonsmeny */}
      <div
        className={`fixed top-20 left-1/2 transform -translate-x-1/2 bg-gray-800 text-gray-100 shadow-lg rounded-lg w-3/4 max-w-md transition-all duration-300 z-40 ${
          isMenuOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'
        }`}
      >
        <ul className="flex flex-col space-y-4 py-6 px-8">
          {navItems.map((item) => (
            <li key={item.name}>
              <a
                href={item.href}
                className="text-gray-300 hover:text-blue-400 text-base font-medium transition-colors"
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Navigation;
