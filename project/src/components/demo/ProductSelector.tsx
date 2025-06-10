import React from 'react';
import { Mail, MessageSquare, Phone, Database, Code, Instagram } from 'lucide-react';

interface Product {
  title: string;
  description: string;
  features: string[];
}

interface ProductSelectorProps {
  products: Record<string, Product>;
  onSelect: (product: string) => void;
}

const productIcons = {
  'website-builder': Code,
  'email-outreach': Mail,
  'customer-service': MessageSquare,
  'social-media': Instagram,
  'crm': Database
};

export function ProductSelector({ products, onSelect }: ProductSelectorProps) {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900">Schedule a Demo</h2>
        <p className="mt-4 text-lg text-gray-600">
          Select a product to schedule a personalized demo with our team
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {Object.entries(products).map(([key, product]) => {
          const Icon = productIcons[key as keyof typeof productIcons];

          return (
            <button
              key={key}
              onClick={() => onSelect(key)}
              className="flex flex-col items-start p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-200 group"
            >
              <div className="w-12 h-12 mb-4 text-sky-500 group-hover:text-sky-600 transition-colors">
                <Icon className="w-full h-full" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {product.title}
              </h3>
              <p className="text-gray-600 text-left mb-4">
                {product.description}
              </p>
              <ul className="space-y-2">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-center text-sm text-gray-500">
                    <span className="w-1.5 h-1.5 bg-sky-500 rounded-full mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>
              <div className="mt-4 text-sky-500 group-hover:text-sky-600 text-sm font-medium">
                Schedule Demo →
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}