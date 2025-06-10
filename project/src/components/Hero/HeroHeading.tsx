import React from 'react';

export default function HeroHeading() {
  return (
    <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight">
      <span className="text-gray-900">Business AI</span>
      <br />
      <span className="bg-clip-text text-transparent bg-gradient-to-r from-sky-500 via-blue-500 to-gray-700">
        Made Simple
      </span>
    </h1>
  );
}