import React from 'react';
import { Phone, Star } from 'lucide-react';
import { Button } from './ui/button';
import { mockData } from '../mockData';

const HeroSection = () => {
  const { hero } = mockData;

  return (
    <section id="home" className="relative min-h-screen pt-24 pb-16 overflow-hidden">
      {/* Background Blob */}
      <div className="absolute top-0 right-0 w-2/3 h-full">
        <svg viewBox="0 0 800 800" className="w-full h-full" preserveAspectRatio="xMidYMid slice">
          <defs>
            <linearGradient id="blobGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{ stopColor: '#B8E6E1', stopOpacity: 0.3 }} />
              <stop offset="100%" style={{ stopColor: '#A8D8D8', stopOpacity: 0.4 }} />
            </linearGradient>
          </defs>
          <path
            d="M400,50 C550,50 750,150 750,400 C750,650 550,750 400,750 C250,750 50,650 50,400 C50,150 250,50 400,50 Z"
            fill="url(#blobGradient)"
            transform="rotate(15 400 400)"
          />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <p className="text-sm font-semibold text-gray-600 tracking-wide uppercase">
              {hero.tagline}
            </p>
            
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight">
              {hero.title}
            </h1>
            
            <p className="text-gray-600 text-lg leading-relaxed">
              {hero.description}
            </p>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
              <Button className="bg-gray-800 hover:bg-gray-900 text-white rounded-full px-8 py-6 text-base">
                Book your session
              </Button>

              <div className="flex items-center gap-3">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} fill="#FFB800" stroke="#FFB800" />
                  ))}
                </div>
                <div>
                  <p className="text-sm text-gray-600">{hero.rating} rating on Google</p>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3 pt-4">
              <div className="w-12 h-12 rounded-full bg-orange-500 flex items-center justify-center">
                <Phone size={20} className="text-white" />
              </div>
              <span className="text-xl font-semibold text-gray-800">{hero.phone}</span>
            </div>
          </div>

          {/* Right Images */}
          <div className="relative h-[600px]">
            {/* Back Image */}
            <div className="absolute top-0 left-0 w-64 h-80 rounded-3xl overflow-hidden shadow-2xl transform rotate-6 hover:rotate-3 transition-transform duration-300">
              <img
                src={hero.images[0]}
                alt="Happy child"
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Front Image */}
            <div className="absolute bottom-0 right-0 w-72 h-96 rounded-3xl overflow-hidden shadow-2xl transform -rotate-3 hover:rotate-0 transition-transform duration-300">
              <img
                src={hero.images[1]}
                alt="Child playing"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
