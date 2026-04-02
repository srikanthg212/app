import React from 'react';
import { mockData } from '../mockData';

const TherapistsSection = () => {
  const { therapists } = mockData;

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-gray-600 tracking-wide uppercase mb-4">
            {therapists.tagline}
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800">
            {therapists.title}
          </h2>
        </div>

        {/* Therapists Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {therapists.members.map((therapist) => (
            <div
              key={therapist.id}
              className="group cursor-pointer"
            >
              <div className="aspect-square rounded-3xl overflow-hidden mb-6 shadow-lg">
                <img
                  src={therapist.image}
                  alt={therapist.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="text-center">
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  {therapist.name}
                </h3>
                <p className="text-gray-600">
                  {therapist.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TherapistsSection;
