import React from 'react';
import { Quote } from 'lucide-react';
import { mockData } from '../mockData';

const TestimonialSection = () => {
  const { testimonial } = mockData;

  return (
    <section className="py-20 bg-gradient-to-b from-white to-cyan-50/30">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-sm font-medium text-gray-600 tracking-wide uppercase" style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 500 }}>
            {testimonial.tagline}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="order-2 md:order-1">
            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <img
                src={testimonial.image}
                alt="Happy client"
                className="w-full h-[500px] object-cover"
              />
            </div>
          </div>

          {/* Testimonial Content */}
          <div className="order-1 md:order-2 space-y-6">
            <div className="w-16 h-16 rounded-full bg-orange-100 flex items-center justify-center">
              <Quote size={32} className="text-orange-500" />
            </div>
            
            <p className="text-2xl md:text-3xl text-gray-800 leading-relaxed font-medium italic" style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic" }}>
              "{testimonial.quote}"
            </p>
            
            <div className="pt-6">
              <p className="text-lg font-bold text-gray-800" style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 600 }}>
                {testimonial.author}
              </p>
              <p className="text-gray-600" style={{ fontFamily: "'Montserrat', sans-serif" }}>Client</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
