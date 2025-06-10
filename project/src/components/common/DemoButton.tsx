import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface DemoButtonProps {
  product?: string;
  className?: string;
  children?: React.ReactNode;
}

export function DemoButton({
  product,
  className = '',
  children = 'Schedule a Demo'
}: DemoButtonProps) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(product ? `/demo?product=${product}` : '/demo');
  };

  return (
    <button
      onClick={handleClick}
      className={`inline-flex items-center px-6 py-3 bg-gray-900 text-white rounded-lg font-medium hover:bg-gray-800 transition-all duration-200 ${className}`}
    >
      {children}
      <ArrowRight className="ml-2 h-5 w-5" />
    </button>
  );
}