import React from 'react';

interface Stat {
  value: string;
  label: string;
  suffix?: string;
}

interface StatsProps {
  stats: Stat[];
}

export function Stats({ stats }: StatsProps) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8 py-8 sm:py-12 px-4 bg-gray-50 rounded-xl sm:rounded-2xl">
      {stats.map((stat, index) => (
        <div key={index} className="text-center">
          <div className="text-2xl sm:text-4xl font-bold text-gray-900">
            {stat.value}
            <span className="text-sky-500">{stat.suffix}</span>
          </div>
          <div className="mt-1 sm:mt-2 text-xs sm:text-sm text-gray-600">{stat.label}</div>
        </div>
      ))}
    </div>
  );
}