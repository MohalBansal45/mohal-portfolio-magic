
import React, { useEffect, useRef } from 'react';
import { Lightbulb, Code, FileText } from 'lucide-react';

const ServiceCard = ({ 
  title, 
  description, 
  icon: Icon,
  delay = 0
}: { 
  title: string; 
  description: string; 
  icon: React.ElementType;
  delay?: number;
}) => {
  return (
    <div 
      className="service-card hidden-element" 
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="mb-5 inline-flex items-center justify-center w-12 h-12 rounded-lg bg-teal-light/10 text-teal-dark">
        <Icon size={20} />
      </div>
      <h3 className="text-xl font-serif font-semibold mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const Services = () => {
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
    <section id="services" ref={sectionRef} className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-16 hidden-element">
          <span className="inline-block text-sm font-medium bg-teal-light/10 text-teal px-3 py-1 rounded-full mb-3">
            My Services
          </span>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Professional Expertise
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Comprehensive solutions tailored to meet your unique business needs and challenges.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-teal-light to-teal-dark rounded-full mx-auto mt-6"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <ServiceCard 
            title="Strategy & Consulting" 
            description="Develop comprehensive business strategies, growth plans, and digital transformation roadmaps tailored to your unique objectives and market position."
            icon={Lightbulb}
            delay={0}
          />
          
          <ServiceCard 
            title="App Development" 
            description="Full-cycle development of custom web and mobile applications, from concept and design to implementation, testing, and deployment."
            icon={Code}
            delay={200}
          />
          
          <ServiceCard 
            title="Content Writing" 
            description="Create engaging, SEO-optimized content including website copy, blog posts, case studies, and technical documentation that resonates with your target audience."
            icon={FileText}
            delay={400}
          />
        </div>
        
        <div className="mt-16 bg-white p-8 rounded-lg shadow-sm border border-gray-100 hidden-element">
          <h3 className="text-2xl font-serif font-semibold mb-4 text-center">My Approach</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-teal/10 flex items-center justify-center text-teal mb-4">
                <span className="text-xl font-bold">1</span>
              </div>
              <h4 className="font-medium text-lg mb-2">Discover</h4>
              <p className="text-center text-gray-600 text-sm">Understanding your unique challenges and objectives through in-depth consultation.</p>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-teal/10 flex items-center justify-center text-teal mb-4">
                <span className="text-xl font-bold">2</span>
              </div>
              <h4 className="font-medium text-lg mb-2">Develop</h4>
              <p className="text-center text-gray-600 text-sm">Creating tailored solutions with transparent communication throughout the process.</p>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-teal/10 flex items-center justify-center text-teal mb-4">
                <span className="text-xl font-bold">3</span>
              </div>
              <h4 className="font-medium text-lg mb-2">Deliver</h4>
              <p className="text-center text-gray-600 text-sm">Implementing solutions with attention to detail and continuous refinement.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
