import React from 'react';

interface CTAButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
}

export function CTAButton({ children, onClick }: CTAButtonProps) {
  return (
    <button
      onClick={onClick}
      className="px-8 py-4 bg-gray-900 text-white rounded-lg font-medium text-lg hover:bg-gray-800 transition-all duration-200 transform hover:scale-105"
    >
      {children}
    </button>
  );
}