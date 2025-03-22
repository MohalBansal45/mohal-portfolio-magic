
import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="container-custom py-12">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h2 className="text-lg font-serif font-semibold text-gray-900 mb-2">
              Mohal Bansal
            </h2>
            <p className="text-gray-600 text-sm max-w-xs">
              Independent consultant specializing in strategy, app development, and content writing.
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-12">
            <div>
              <h3 className="text-sm font-semibold text-gray-900 mb-3">Navigation</h3>
              <ul className="space-y-2">
                <li>
                  <button 
                    onClick={() => scrollToSection('about')}
                    className="text-gray-600 hover:text-teal text-sm transition-colors"
                  >
                    About
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => scrollToSection('services')}
                    className="text-gray-600 hover:text-teal text-sm transition-colors"
                  >
                    Services
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => scrollToSection('contact')}
                    className="text-gray-600 hover:text-teal text-sm transition-colors"
                  >
                    Contact
                  </button>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-sm font-semibold text-gray-900 mb-3">Contact</h3>
              <ul className="space-y-2">
                <li>
                  <a 
                    href="tel:+917719613078"
                    className="text-gray-600 hover:text-teal text-sm transition-colors"
                  >
                    +91 7719613078
                  </a>
                </li>
                <li>
                  <a 
                    href="mailto:mb@mohalbansal.com"
                    className="text-gray-600 hover:text-teal text-sm transition-colors"
                  >
                    mb@mohalbansal.com
                  </a>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-sm font-semibold text-gray-900 mb-3">Social</h3>
              <ul className="space-y-2">
                <li>
                  <a 
                    href="https://instagram.com/mohalbansal45"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-teal text-sm transition-colors"
                  >
                    Instagram
                  </a>
                </li>
                <li>
                  <a 
                    href="https://linkedin.com/in/mohalbansal"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-teal text-sm transition-colors"
                  >
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a 
                    href="https://twitter.com/mohalbansal"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-teal text-sm transition-colors"
                  >
                    X (Twitter)
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-200 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-500 mb-4 md:mb-0">
            &copy; {currentYear} Mohal Bansal. All rights reserved.
          </p>
          <p className="text-sm text-gray-500">
            Designed & Developed by Mohal Bansal
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
