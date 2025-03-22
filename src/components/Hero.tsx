
import React, { useEffect, useRef } from 'react';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const hero = heroRef.current;
      if (hero) {
        // Parallax effect
        hero.style.backgroundPositionY = `${scrollY * 0.3}px`;
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const scrollToServices = () => {
    const servicesSection = document.getElementById('services');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  return (
    <div
      ref={heroRef}
      className="relative h-screen flex items-center justify-center bg-gradient-to-b from-teal-dark to-teal overflow-hidden"
      style={{
        backgroundImage: 'linear-gradient(to bottom, rgba(26, 55, 65, 0.8), rgba(42, 82, 97, 0.8))',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Overlay with subtle pattern */}
      <div className="absolute inset-0 bg-black opacity-10" 
        style={{ 
          backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'40\' height=\'40\' viewBox=\'0 0 40 40\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'0.05\' fill-rule=\'evenodd\'%3E%3Cpath d=\'M0 40L40 0H20L0 20M40 40V20L20 40\'/%3E%3C/g%3E%3C/svg%3E")',
        }}
      />
      
      {/* Content */}
      <div className="container-custom relative z-10 text-center">
        <div className="bg-white bg-opacity-5 backdrop-blur-sm rounded-xl p-8 md:p-12 border border-white border-opacity-10 shadow-2xl animate-fade-in">
          <span className="inline-block text-xs font-medium uppercase tracking-wider text-white text-opacity-80 mb-3">Independent Consultant</span>
          <h1 className="font-serif text-4xl md:text-6xl font-bold text-white mb-4 leading-tight">
            Mohal Bansal
          </h1>
          <p className="text-lg md:text-xl text-white text-opacity-90 max-w-2xl mx-auto mb-8">
            Strategy, App Development & Content Writing
          </p>
          <button
            onClick={scrollToServices}
            className="button-primary bg-white text-teal-dark hover:bg-white/90"
          >
            Explore My Work
          </button>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-pulse">
        <span className="text-white text-opacity-70 text-sm mb-2">Scroll to explore</span>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="text-white text-opacity-70"
        >
          <path
            d="M12 5V19M12 19L19 12M12 19L5 12"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </div>
  );
};

export default Hero;
