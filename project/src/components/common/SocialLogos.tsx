import React from 'react';
import { Instagram } from 'lucide-react';
import { XLogo } from './XLogo';

export function SocialLogos() {
  return (
    <div className="relative w-full aspect-video bg-gradient-to-r from-gray-900 to-purple-900 rounded-xl shadow-lg overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center gap-8">
        {/* X Logo */}
        <div className="w-24 h-24 relative">
          <XLogo />
        </div>

        {/* Instagram Logo */}
        <div className="w-24 h-24 relative bg-gradient-to-tr from-purple-600 via-pink-600 to-orange-500 rounded-2xl p-5">
          <Instagram className="w-full h-full text-white" />
        </div>
      </div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-tr from-black/10 to-transparent" />
    </div>
  );
}