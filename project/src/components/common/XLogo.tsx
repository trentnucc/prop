import React from 'react';

export function XLogo() {
  return (
    <div className="relative w-full aspect-square bg-black rounded-xl shadow-lg overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center">
        <svg
          viewBox="0 0 24 24"
          className="w-1/2 h-1/2 text-white"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M4 4l7.2 7.2M4 20l16-16M20 20l-7.2-7.2" />
        </svg>
      </div>
      <div className="absolute inset-0 bg-gradient-to-tr from-black/10 to-transparent" />
    </div>
  );
}