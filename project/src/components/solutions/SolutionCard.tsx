import React from 'react';
import { ArrowRight } from 'lucide-react';

interface SolutionCardProps {
  title: string;
  description: string;
  image?: string;
  component?: React.ComponentType;
  isReversed?: boolean;
  isCustomImage: boolean;
}

export function SolutionCard({
  title,
  description,
  image,
  component: Component,
  isReversed,
  isCustomImage
}: SolutionCardProps) {
  return (
    <div className={`flex flex-col ${isReversed ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-12 group hover:no-underline`}>
      <div className="flex-1">
        <div className="relative overflow-hidden rounded-xl">
          <div className="absolute -inset-1 bg-gradient-to-r from-sky-100 to-gray-100 rounded-xl blur-lg opacity-75" />
          {isCustomImage && Component ? (
            <div className="relative w-full aspect-video">
              <Component />
            </div>
          ) : (
            <img
              src={image}
              alt={title}
              className="relative rounded-xl shadow-lg w-full object-cover aspect-video transform transition-transform duration-300 group-hover:scale-105"
            />
          )}
        </div>
      </div>
      <div className="flex-1 space-y-4">
        <h3 className="text-2xl font-bold text-gray-900">{title}</h3>
        <p className="text-gray-600 text-lg leading-relaxed">{description}</p>
        <div className="inline-flex items-center text-gray-900 font-medium">
          Learn More
          <ArrowRight className="ml-2 h-5 w-5 opacity-0 -translate-x-2 transition-all duration-200 group-hover:opacity-100 group-hover:translate-x-0" />
        </div>
      </div>
    </div>
  );
}