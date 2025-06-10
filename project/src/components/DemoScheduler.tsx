import React from 'react';
import { CalendlyEmbed } from './common/CalendlyEmbed';
import { ArrowLeft, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

interface DemoSchedulerProps {
  calendlyUrl: string;
  title: string;
  description: string;
  features: string[];
}

export function DemoScheduler({ calendlyUrl, title, description, features }: DemoSchedulerProps) {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-8">
        <Link
          to="/demo"
          className="inline-flex items-center text-gray-600 hover:text-gray-900 mb-6"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to products
        </Link>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold text-gray-900">{title}</h2>
            <p className="mt-4 text-lg text-gray-600">
              {description}
            </p>

            <div className="mt-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                What you'll see in the demo:
              </h3>
              <ul className="space-y-3">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-sky-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <CalendlyEmbed url={calendlyUrl} />
          </div>
        </div>
      </div>
    </div>
  );
}