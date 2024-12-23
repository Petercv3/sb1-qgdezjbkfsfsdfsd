import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  const handleRequestQuote = () => {
    window.location.href = 'mailto:pkatrykk@gmail.com?subject=Be om tilbud&body=Hei, jeg ønsker et tilbud på deres stofftrykkstjenester.';
  };

  const scrollToServices = () => {
    const servicesSection = document.getElementById('services');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative bg-gradient-to-r from-gray-900 via-blue-900 to-black min-h-screen flex items-center">
      {/* Overlay for additional darkness */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black opacity-80"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="text-center">
          <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl">
            <span className="block">Eksperter på</span>
            <span className="block text-blue-200">Stofftrykk</span>
          </h1>
          <p className="mt-3 max-w-md mx-auto text-base text-gray-300 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            Vi spesialiserer oss på trykk av t-skjorter, gensere og piqué-skjorter, 
            men kan også hjelpe deg med alt av stofftrykk. Perfekt for bedrifter, 
            events, og kreative prosjekter.
          </p>
          <div className="mt-10 flex justify-center gap-4">
            <button
              onClick={handleRequestQuote}
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors"
            >
              Be om Tilbud
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
            <button
              onClick={scrollToServices}
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-gray-50 transition-colors"
            >
              Våre Tjenester
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
