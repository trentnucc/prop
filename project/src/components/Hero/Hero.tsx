import React from 'react';
import HeroHeading from './HeroHeading';
import AIVisualization from './AIVisualization';
import { DemoButton } from '../common/DemoButton';

export default function Hero() {
  return (
    <div className="relative min-h-[calc(100vh-5rem)] overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000008_1px,transparent_1px),linear-gradient(to_bottom,#00000008_1px,transparent_1px)] bg-[size:24px_24px]" />
      </div>

      {/* AI Visualization as background */}
      <div className="absolute inset-0 pointer-events-none">
        <AIVisualization />
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 sm:pt-24 lg:pt-32">
        {/* Hero Content */}
        <div className="relative z-10 text-center max-w-3xl mx-auto">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight">
            <span className="text-gray-900">AI-Powered</span>
            <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-sky-500 via-blue-500 to-gray-700">
              Database & Grants
            </span>
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-gray-600 px-4 sm:px-0">
            Transform your database management and grant tracking with advanced AI technology
          </p>
          <div className="mt-8">
            <DemoButton className="text-lg px-8 py-4">
              Explore Solutions
            </DemoButton>
          </div>
        </div>
      </div>

      {/* Gradient overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-white/40 to-white/60 pointer-events-none" />
    </div>
  );
}