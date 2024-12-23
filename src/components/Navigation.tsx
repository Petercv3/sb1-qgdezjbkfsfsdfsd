import React from 'react';
import { navItems } from '../utils/constants';

const Navigation = () => {
  return (
    <nav className="hidden md:flex space-x-8">
      {navItems.map((item) => (
        <a
          key={item.name}
          href={item.href}
          className="text-gray-700 hover:text-blue-700 px-3 py-2 rounded-md text-sm font-medium transition-colors"
        >
          {item.name}
        </a>
      ))}
      <button className="bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-800 transition-colors">
        Få Tilbud
      </button>
    </nav>
  );
};

export default Navigation;
