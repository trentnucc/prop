import React from 'react';
import { CheckCircle, XCircle } from 'lucide-react';

interface Feature {
  name: string;
  description: string;
  competitors: boolean;
  us: boolean;
}

interface ComparisonTableProps {
  features: Feature[];
}

export function ComparisonTable({ features }: ComparisonTableProps) {
  return (
    <div className="mt-20">
      <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
        Why Choose Us?
      </h2>
      <div className="overflow-hidden bg-white rounded-xl shadow-lg">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Feature</th>
              <th className="px-6 py-3 text-center text-sm font-semibold text-gray-900">Competitors</th>
              <th className="px-6 py-3 text-center text-sm font-semibold text-gray-900">Propensity AI</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {features.map((feature, index) => (
              <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                <td className="px-6 py-4">
                  <div className="text-sm font-medium text-gray-900">{feature.name}</div>
                  <div className="text-sm text-gray-500">{feature.description}</div>
                </td>
                <td className="px-6 py-4 text-center">
                  {feature.competitors ? (
                    <CheckCircle className="h-5 w-5 text-gray-400 mx-auto" />
                  ) : (
                    <XCircle className="h-5 w-5 text-gray-300 mx-auto" />
                  )}
                </td>
                <td className="px-6 py-4 text-center">
                  {feature.us ? (
                    <CheckCircle className="h-5 w-5 text-sky-500 mx-auto" />
                  ) : (
                    <XCircle className="h-5 w-5 text-gray-300 mx-auto" />
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}