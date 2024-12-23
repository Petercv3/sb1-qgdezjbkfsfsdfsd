import React, { useState } from 'react';

interface ServiceCardProps {
  title: string;
  description: string;
  price: string;
  showAllPrices: boolean; // Ny prop
}

const ServiceCard = ({ title, description, price, showAllPrices }: ServiceCardProps) => {
  const [showPrice, setShowPrice] = useState(false);

  return (
    <div
      className="relative group bg-gray-700 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer"
      onClick={() => setShowPrice(!showPrice)}
    >
      <h3 className="text-lg font-medium text-white">{title}</h3>
      <p className="mt-2 text-gray-200">{description}</p>
      <div
        className={`mt-4 transform transition-all duration-300 ease-in-out ${
          showPrice || showAllPrices ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
        }`}
      >
        <p className="text-blue-500 font-medium">{price}</p>
      </div>
      {!showAllPrices && (
        <button
          className="mt-4 text-sm text-blue-400 hover:text-blue-500 font-medium"
        >
          {showPrice ? 'Skjul pris' : 'Vis pris'}
        </button>
      )}
    </div>
  );
};

export default ServiceCard;
