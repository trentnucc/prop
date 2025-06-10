import React from 'react';
import { DemoButton } from './common/DemoButton';

export default function CTA() {
  return (
    <div className="relative py-24 bg-slate-800">
      <div className="absolute inset-0 bg-blue-600/10 backdrop-blur-3xl" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            Ready to Transform Your Business?
          </h2>
          <p className="mt-4 text-xl text-gray-300 max-w-2xl mx-auto">
            Join the AI revolution and stay ahead of the competition. Let's discuss how our solutions can drive your success.
          </p>
          <div className="mt-10">
            <DemoButton className="text-lg px-8 py-4" />
          </div>
        </div>
      </div>
    </div>
  );
}