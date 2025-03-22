
import React, { useEffect, useRef } from 'react';
import { Phone, Mail, Instagram, Linkedin, Twitter } from 'lucide-react';

const Contact = () => {
  const sectionRef = useRef<HTMLElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible-element');
          }
        });
      },
      { threshold: 0.1 }
    );
    
    if (sectionRef.current) {
      const elements = sectionRef.current.querySelectorAll('.hidden-element');
      elements.forEach((el) => observer.observe(el));
    }
    
    return () => {
      if (sectionRef.current) {
        const elements = sectionRef.current.querySelectorAll('.hidden-element');
        elements.forEach((el) => observer.unobserve(el));
      }
    };
  }, []);

  return (
    <section id="contact" ref={sectionRef} className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-16 hidden-element">
          <span className="inline-block text-sm font-medium bg-teal-light/10 text-teal px-3 py-1 rounded-full mb-3">
            Get In Touch
          </span>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Let's Connect
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Interested in working together? Reach out through any of the channels below, and I'll get back to you promptly.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-teal-light to-teal-dark rounded-full mx-auto mt-6"></div>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <div className="glassmorphism bg-gray-50 rounded-xl p-8 md:p-10 border border-gray-100 shadow-sm hidden-element">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Contact Info */}
              <div>
                <h3 className="text-xl font-serif font-semibold mb-6">Contact Information</h3>
                
                <div className="space-y-6">
                  <a 
                    href="tel:+917719613078" 
                    className="flex items-center group"
                  >
                    <div className="w-10 h-10 rounded-full bg-teal/10 flex items-center justify-center text-teal mr-4 group-hover:bg-teal group-hover:text-white transition-colors">
                      <Phone size={18} />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Phone</p>
                      <p className="font-medium group-hover:text-teal transition-colors">+91 7719613078</p>
                    </div>
                  </a>
                  
                  <a 
                    href="mailto:mb@mohalbansal.com" 
                    className="flex items-center group"
                  >
                    <div className="w-10 h-10 rounded-full bg-teal/10 flex items-center justify-center text-teal mr-4 group-hover:bg-teal group-hover:text-white transition-colors">
                      <Mail size={18} />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Email</p>
                      <p className="font-medium group-hover:text-teal transition-colors">mb@mohalbansal.com</p>
                    </div>
                  </a>
                </div>
                
                <div className="mt-10">
                  <h3 className="text-xl font-serif font-semibold mb-4">Follow Me</h3>
                  <div className="flex space-x-4">
                    <a 
                      href="https://instagram.com/mohalbansal45" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="social-icon text-gray-600 hover:text-white hover:bg-gradient-to-r from-purple-500 to-pink-500"
                      aria-label="Instagram"
                    >
                      <Instagram size={20} />
                    </a>
                    <a 
                      href="https://linkedin.com/in/mohalbansal" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="social-icon text-gray-600 hover:text-white hover:bg-blue-600"
                      aria-label="LinkedIn"
                    >
                      <Linkedin size={20} />
                    </a>
                    <a 
                      href="https://twitter.com/mohalbansal" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="social-icon text-gray-600 hover:text-white hover:bg-blue-400"
                      aria-label="Twitter"
                    >
                      <Twitter size={20} />
                    </a>
                  </div>
                </div>
              </div>
              
              {/* Schedule a Call */}
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <h3 className="text-xl font-serif font-semibold mb-4">Schedule a Call</h3>
                <p className="text-gray-600 mb-6">
                  Let's discuss how I can help you achieve your business goals. Book a free 30-minute consultation.
                </p>
                
                <form className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full p-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-teal focus:border-transparent outline-none transition"
                      placeholder="John Doe"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full p-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-teal focus:border-transparent outline-none transition"
                      placeholder="john@example.com"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={3}
                      className="w-full p-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-teal focus:border-transparent outline-none transition"
                      placeholder="How can I help you?"
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full button-primary bg-teal-dark hover:bg-teal text-white font-medium"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
