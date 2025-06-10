import React from 'react';
import { Brain } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="fixed w-full bg-slate-900/80 backdrop-blur-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Brain className="h-8 w-8 text-blue-500" />
            <span className="ml-2 text-xl font-bold text-white">Propensity AI</span>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <a href="#features" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Features</a>
              <a href="#solutions" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Solutions</a>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700 transition-colors">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}