import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function HeroButtons() {
  return (
    <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
      <button className="px-8 py-4 bg-gray-900 text-white rounded-lg font-medium text-lg hover:bg-gray-800 transition-all duration-200 transform hover:scale-105">
        Schedule A Demo
      </button>
      <button className="group px-8 py-4 bg-gray-100 text-gray-900 rounded-lg font-medium text-lg hover:bg-gray-200 transition-all duration-200">
        Learn More
        <ArrowRight className="inline ml-2 group-hover:translate-x-1 transition-transform" />
      </button>
    </div>
  );
}