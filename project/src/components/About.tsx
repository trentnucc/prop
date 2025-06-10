import React from 'react';
import { Target, Database, Brain } from 'lucide-react';

export default function About() {
  const goals = [
    {
      icon: Database,
      title: "AI Database Innovation",
      description: "Revolutionizing database management with AI-powered optimization, automated query tuning, and intelligent data organization systems."
    },
    {
      icon: Target,
      title: "Grant Success",
      description: "Maximizing grant application success through AI-driven opportunity matching, automated tracking, and intelligent application optimization."
    },
    {
      icon: Brain,
      title: "Advanced AI Tools",
      description: "Leveraging cutting-edge AI technology including OpenAI 01, DeepSeek, and proprietary algorithms for database and grant management."
    }
  ];

  return (
    <div className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            About Our Technology
          </h2>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            Pioneering AI solutions in database management and grant tracking
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-12 lg:grid-cols-3">
          {goals.map((goal, index) => (
            <div key={index} className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-sky-500 to-blue-600 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur" />
              <div className="relative bg-white p-8 rounded-lg shadow-lg">
                <goal.icon className="h-12 w-12 text-sky-500 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-4">{goal.title}</h3>
                <p className="text-gray-600">{goal.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}