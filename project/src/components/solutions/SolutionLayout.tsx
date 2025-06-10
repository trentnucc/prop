import React from 'react';
import { PageHeader } from '../common/PageHeader';
import { FeatureCard } from '../common/FeatureCard';
import { DemoButton } from '../common/DemoButton';
import { Stats } from '../common/Stats';
import { LucideIcon } from 'lucide-react';

interface DetailSection {
  title: string;
  description: string;
  items: string[];
  icon: LucideIcon;
  image: string;
}

interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
}

interface SolutionLayoutProps {
  title: string;
  description: string;
  features: Feature[];
  stats?: { value: string; label: string; suffix?: string; }[];
  detailSection: DetailSection;
  demoProduct: string;
  demoButtonText: string;
  additionalContent?: React.ReactNode;
}

export function SolutionLayout({
  title,
  description,
  features,
  stats,
  detailSection,
  demoProduct,
  demoButtonText,
  additionalContent
}: SolutionLayoutProps) {
  return (
    <div className="pt-16 sm:pt-20 min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-16">
        <PageHeader title={title} description={description} />

        {stats && (
          <div className="mt-8 sm:mt-12">
            <Stats stats={stats} />
          </div>
        )}

        <div className="mt-12 sm:mt-20 grid grid-cols-2 md:grid-cols-2 gap-3 sm:gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>

        <div className="mt-12 sm:mt-20 bg-gradient-to-r from-gray-50 to-sky-50 rounded-xl sm:rounded-2xl p-6 sm:p-8">
          <div className={`grid grid-cols-1 ${detailSection.image ? 'md:grid-cols-2' : ''} gap-8 sm:gap-12`}>
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">
                {detailSection.title}
              </h3>
              <p className="text-gray-600 mb-6">
                {detailSection.description}
              </p>
              <ul className="space-y-3 sm:space-y-4">
                {detailSection.items.map((item, index) => (
                  <li key={index} className="flex items-center">
                    <detailSection.icon className="h-5 w-5 text-sky-500 mr-3 flex-shrink-0" />
                    <span className="text-sm sm:text-base text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            {detailSection.image && (
              <div className="relative mt-8 md:mt-0">
                <img
                  src={detailSection.image}
                  alt={detailSection.title}
                  className="rounded-xl shadow-lg w-full"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-sky-500/10 to-transparent rounded-xl" />
              </div>
            )}
          </div>
        </div>

        {additionalContent}

        <div className="flex justify-center mt-12 sm:mt-20">
          <DemoButton
            product={demoProduct}
            className="w-full sm:w-auto text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 bg-sky-500 hover:bg-sky-600"
          >
            {demoButtonText}
          </DemoButton>
        </div>
      </div>
    </div>
  );
}