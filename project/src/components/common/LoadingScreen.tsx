import React from 'react';
import { Brain } from 'lucide-react';

export function LoadingScreen() {
  return (
    <div className="fixed inset-0 bg-gradient-to-b from-gray-50 to-white flex items-center justify-center">
      {/* Grid Pattern Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000008_1px,transparent_1px),linear-gradient(to_bottom,#00000008_1px,transparent_1px)] bg-[size:24px_24px]" />
      </div>

      {/* Glowing Orbs */}
      <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-sky-100 rounded-full blur-[128px] animate-pulse" />
      <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-gray-100 rounded-full blur-[128px] animate-pulse-delayed" />

      {/* Loading Animation */}
      <div className="relative">
        <div className="relative">
          <Brain className="h-16 w-16 text-sky-500 animate-bounce" />
          <div className="absolute inset-0 animate-ping">
            <Brain className="h-16 w-16 text-sky-300 opacity-75" />
          </div>
        </div>
        <div className="mt-8 text-center">
          <div className="text-xl font-semibold text-gray-800">
            Loading Propensity AI
          </div>
          <div className="mt-2 text-gray-600">
            Initializing intelligent systems...
          </div>
        </div>
      </div>
    </div>
  );
}