import React from 'react';
import { Brain } from 'lucide-react';

export function BrandEmblem() {
  return (
    <div className="inline-flex items-center gap-2 bg-gradient-to-r from-gray-50 to-sky-50 border border-gray-200 rounded-full px-4 py-2 mb-6">
      <div className="relative">
        <Brain className="h-4 w-4 text-sky-500" />
        <div className="absolute inset-0 animate-pulse-slow opacity-50">
          <Brain className="h-4 w-4 text-sky-300" />
        </div>
      </div>
      <span className="text-sm text-gray-600">AI Solutions</span>
    </div>
  );
}