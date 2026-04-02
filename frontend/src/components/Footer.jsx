import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer id="contact" className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center">
              <img 
                src="https://customer-assets.emergentagent.com/job_wp-to-html-daycare/artifacts/q8m5g5ed_Fresco_shade.png" 
                alt="Infinite Mind" 
                className="h-24 w-auto"
              />
            </div>
            <p className="text-gray-400">
              Professional counselling services for your mental wellness journey.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-gray-400 hover:text-orange-500 transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-400 hover:text-orange-500 transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-orange-500 transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#therapists" className="text-gray-400 hover:text-orange-500 transition-colors">
                  Our Team
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold mb-4">Services</h4>
            <ul className="space-y-2">
              <li className="text-gray-400">Individual Therapy</li>
              <li className="text-gray-400">Couples Therapy</li>
              <li className="text-gray-400">Group Therapy</li>
              <li className="text-gray-400">Online Sessions</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-gray-400">
                <Phone size={16} className="text-orange-500" />
                (123) 456-7890
              </li>
              <li className="flex items-center gap-2 text-gray-400">
                <Mail size={16} className="text-orange-500" />
                info@infinitemind.com
              </li>
              <li className="flex items-start gap-2 text-gray-400">
                <MapPin size={16} className="text-orange-500 mt-1" />
                123 Wellness Street, Suite 100, City, ST 12345
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; 2025 Infinite Mind Counselling. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
