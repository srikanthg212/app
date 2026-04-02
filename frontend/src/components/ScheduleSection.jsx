import React from 'react';
import { Button } from './ui/button';
import { mockData } from '../mockData';

const ScheduleSection = () => {
  const { pricing } = mockData;

  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-gray-600 tracking-wide uppercase mb-4">
            {pricing.tagline}
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800">
            {pricing.title}
          </h2>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {pricing.plans.map((plan) => (
            <div
              key={plan.id}
              className="relative bg-gradient-to-br from-cyan-50/40 to-blue-50/40 rounded-3xl p-8 hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              <div className="text-sm font-bold text-gray-400 mb-4">
                {plan.number}
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                {plan.name}
              </h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                {plan.description}
              </p>
              <div className="space-y-2 mb-6">
                <div className="flex items-center justify-between py-3 border-t border-gray-200">
                  <span className="text-gray-700 font-medium">Duration</span>
                  <span className="text-gray-800 font-semibold">{plan.time}</span>
                </div>
                <div className="flex items-center justify-between py-3 border-t border-gray-200">
                  <span className="text-gray-700 font-medium">Investment</span>
                  <span className="text-orange-500 font-bold text-lg">{plan.price}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Note and CTA */}
        <div className="text-center space-y-6">
          <p className="text-gray-600 max-w-2xl mx-auto">
            {pricing.note}
          </p>
          <Button className="bg-orange-500 hover:bg-orange-600 text-white rounded-full px-8 py-6 text-base">
            Book a session
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ScheduleSection;
