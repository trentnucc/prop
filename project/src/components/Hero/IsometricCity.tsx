import React from 'react';

export default function IsometricCity() {
  return (
    <div className="relative w-full aspect-square max-w-2xl mx-auto">
      <img
        src="https://images.unsplash.com/photo-1563986768494-4dee9223994e?auto=format&fit=crop&q=80"
        alt="Isometric AI City"
        className="w-full h-full object-contain"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 mix-blend-overlay" />
      <div className="absolute inset-0 animate-pulse-slow">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 mix-blend-overlay" />
      </div>
    </div>
  );
}