
import React, { useEffect, useRef } from 'react';

const About = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const profileImgRef = useRef<HTMLImageElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Add animation classes when section is visible
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
  
  useEffect(() => {
    // Parallax effect for profile image
    const handleScroll = () => {
      if (profileImgRef.current && sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        const scrollPercentage = Math.max(0, Math.min(1, 1 - rect.top / window.innerHeight));
        profileImgRef.current.style.transform = `scale(${1 + scrollPercentage * 0.05})`;
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="about" ref={sectionRef} className="section-padding bg-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
          <div className="hidden-element overflow-hidden rounded-2xl shadow-lg">
            <div className="relative overflow-hidden aspect-[4/5] rounded-2xl transform transition-all duration-700 ease-out">
              <img
                ref={profileImgRef}
                src="/lovable-uploads/64814e25-32de-4084-9ff4-d9c3a032922c.png"
                alt="Mohal Bansal - Professional Portrait"
                className="w-full h-full object-cover transition-transform duration-1000 ease-out"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-teal-dark/40 to-transparent pointer-events-none"></div>
            </div>
          </div>
          
          {/* About Text */}
          <div>
            <div className="mb-6 hidden-element">
              <span className="inline-block text-sm font-medium bg-teal-light/10 text-teal px-3 py-1 rounded-full mb-3">
                About Me
              </span>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Crafting Digital Solutions for Modern Challenges
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-teal-light to-teal-dark rounded-full"></div>
            </div>
            
            <div className="space-y-4 text-gray-700 hidden-element">
              <p>
                As an independent consultant with expertise spanning strategy, app development, and content writing, I help businesses transform their digital presence and operational efficiency.
              </p>
              <p>
                My journey began at the intersection of technology and business strategy, where I discovered my passion for creating comprehensive solutions that address complex challenges. Today, I leverage my diverse skill set to deliver tailored services that drive measurable results for my clients.
              </p>
              <p>
                Whether you're looking to refine your business strategy, develop a custom application, or create compelling content, I'm committed to delivering excellence through a collaborative and transparent approach.
              </p>
            </div>
            
            <div className="mt-8 hidden-element">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="text-teal-dark font-bold text-xl mb-1">5+</div>
                  <div className="text-gray-600 text-sm">Years of Experience</div>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="text-teal-dark font-bold text-xl mb-1">50+</div>
                  <div className="text-gray-600 text-sm">Projects Completed</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
