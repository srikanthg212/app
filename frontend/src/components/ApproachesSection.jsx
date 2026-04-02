import React from 'react';
import { mockData } from '../mockData';

const ApproachesSection = () => {
  const { approaches } = mockData;

  return (
    <section className="py-20 bg-gradient-to-b from-cyan-50/30 to-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-sm font-medium text-gray-600 tracking-wide uppercase mb-4" style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 500 }}>
            {approaches.tagline}
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800" style={{ fontFamily: "'Playfair Display', serif" }}>
            {approaches.title}
          </h2>
        </div>

        {/* Approaches Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {approaches.items.map((approach) => (
            <div
              key={approach.id}
              className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              <h4 className="text-xl font-bold text-gray-800 mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
                {approach.name}
              </h4>
              <p className="text-gray-600 leading-relaxed" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                {approach.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ApproachesSection;
