import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from './ui/button';
import { mockData } from '../mockData';

const AboutSection = () => {
  const { about } = mockData;

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left - Image */}
          <div className="relative">
            <div className="rounded-3xl overflow-hidden shadow-xl">
              <img
                src={about.image}
                alt="Children learning"
                className="w-full h-[500px] object-cover"
              />
            </div>
          </div>

          {/* Right - Content */}
          <div className="space-y-6">
            <p className="text-sm font-semibold text-gray-600 tracking-wide uppercase">
              {about.tagline}
            </p>
            
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight">
              {about.title}
            </h2>
            
            <p className="text-gray-600 leading-relaxed">
              {about.description1}
            </p>
            
            <p className="text-gray-600 leading-relaxed">
              {about.description2}
            </p>

            <Button className="bg-gray-800 hover:bg-gray-900 text-white rounded-full px-6 group">
              Know more about us
              <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>

            {/* Founder Quote */}
            <div className="mt-12 pt-8 border-t border-gray-200">
              <div className="flex gap-6">
                <img
                  src={about.founder.image}
                  alt={about.founder.name}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div className="flex-1">
                  <p className="text-gray-700 italic mb-4">
                    "{about.quote}"
                  </p>
                  <p className="font-semibold text-gray-800">{about.founder.name}</p>
                  <p className="text-sm text-gray-600">{about.founder.title}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
