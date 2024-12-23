import React from 'react';
import { navItems } from '../utils/constants';

const MobileMenu = () => {
  return (
    <div className="md:hidden">
      <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
        {navItems.map((item) => (
          <a
            key={item.name}
            href={item.href}
            className="block text-gray-700 hover:text-blue-700 px-3 py-2 rounded-md text-base font-medium"
          >
            {item.name}
          </a>
        ))}
        <button className="w-full bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-800 transition-colors">
          Få Tilbud
        </button>
      </div>
    </div>
  );
};

export default MobileMenu;