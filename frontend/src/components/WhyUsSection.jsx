import React from 'react';
import { Check, Heart, Brain, User, Sparkles } from 'lucide-react';
import { Button } from './ui/button';
import { mockData } from '../mockData';

const iconMap = {
  'Empathy': Heart,
  'Evidence-Based': Brain,
  'Personalized': User,
  'Holistic': Sparkles
};

const WhyUsSection = () => {
  const { whyUs } = mockData;

  return (
    <section className="py-20 bg-gradient-to-b from-white to-cyan-50/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16">
          {/* Left Content */}
          <div className="space-y-8">
            <div>
              <p className="text-sm font-medium text-gray-600 tracking-wide uppercase mb-4" style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 500 }}>
                {whyUs.tagline}
              </p>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
                {whyUs.title}
              </h2>
            </div>
            
            <p className="text-gray-600 text-lg leading-relaxed" style={{ fontFamily: "'Montserrat', sans-serif" }}>
              {whyUs.description}
            </p>

            <ul className="space-y-4">
              {whyUs.features.map((feature, index) => (
                <li key={index} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-orange-500 flex items-center justify-center flex-shrink-0">
                    <Check size={14} className="text-white" />
                  </div>
                  <span className="text-gray-700 font-medium" style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 500 }}>{feature}</span>
                </li>
              ))}
            </ul>

            <Button className="bg-gray-800 hover:bg-gray-900 text-white rounded-full px-8 py-6">
              Learn more
            </Button>
          </div>

          {/* Right - Values Grid */}
          <div className="grid grid-cols-2 gap-6">
            {whyUs.values.map((value) => {
              const Icon = iconMap[value.name] || Heart;
              return (
                <div
                  key={value.id}
                  className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-all duration-300 group"
                >
                  <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center mb-4 group-hover:bg-orange-500 transition-colors">
                    <Icon size={24} className="text-orange-500 group-hover:text-white transition-colors" />
                  </div>
                  <h4 className="text-lg font-bold text-gray-800 mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>
                    {value.name}
                  </h4>
                  <p className="text-sm text-gray-600 leading-relaxed" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;
