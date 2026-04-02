import React from 'react';
import { Button } from './ui/button';
import { mockData } from '../mockData';

const FinalCTASection = () => {
  const { finalCTA } = mockData;

  return (
    <section className="py-20 bg-gradient-to-br from-cyan-50/50 to-blue-50/50">
      <div className="max-w-4xl mx-auto px-6 text-center space-y-8">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
          {finalCTA.title}
        </h2>
        
        <p className="text-xl text-gray-600 leading-relaxed" style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 500 }}>
          {finalCTA.description}
        </p>

        <Button className="bg-orange-500 hover:bg-orange-600 text-white rounded-full px-10 py-6 text-lg">
          Schedule your first session
        </Button>
      </div>
    </section>
  );
};

export default FinalCTASection;
