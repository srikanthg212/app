import React from 'react';
import { ArrowRight } from 'lucide-react';
import { mockData } from '../mockData';

const ServicesSection = () => {
  const { services } = mockData;

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-white to-cyan-50/30">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-sm font-medium text-gray-600 tracking-wide uppercase mb-4" style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 500 }}>
            {services.tagline}
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800" style={{ fontFamily: "'Playfair Display', serif" }}>
            {services.title}
          </h2>
        </div>

        {/* Service Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {services.items.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group"
            >
              <div className="h-64 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-8 space-y-4">
                <h3 className="text-2xl font-bold text-gray-800" style={{ fontFamily: "'Playfair Display', serif" }}>{service.name}</h3>
                <p className="text-gray-600 leading-relaxed" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                  {service.description}
                </p>
                <a
                  href="#"
                  className="inline-flex items-center text-orange-500 font-semibold hover:text-orange-600 transition-colors group"
                  style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 600 }}
                >
                  Learn more
                  <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
