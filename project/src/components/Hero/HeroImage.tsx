import React from 'react';

export default function HeroImage() {
  return (
    <div className="relative w-full aspect-square max-w-2xl mx-auto">
      <img
        src="https://images.unsplash.com/photo-1580927752452-89d86da3fa0a?auto=format&fit=crop&q=80"
        alt="Clean AI Technology Visualization"
        className="w-full h-full object-cover rounded-2xl shadow-xl"
      />
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-tr from-sky-500/5 to-slate-500/5 mix-blend-overlay rounded-2xl" />

      {/* Floating accent elements */}
      <div className="absolute -top-4 -right-4 w-32 h-32 bg-sky-50 rounded-full blur-2xl opacity-60" />
      <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-slate-50 rounded-full blur-2xl opacity-60" />

      {/* Inner glow */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-sky-500/10 via-transparent to-slate-500/10 opacity-0 hover:opacity-100 transition-opacity duration-500" />
    </div>
  );
}