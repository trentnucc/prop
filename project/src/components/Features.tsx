import React from 'react';
import { Link } from 'react-router-dom';
import { Database, Code, Brain, LineChart, FileSpreadsheet, FileCheck } from 'lucide-react';
import { FeatureCard } from './common/FeatureCard';

const features = [
  {
    title: "AI SQL Database",
    description: "Advanced SQL database optimization with AI-driven query planning, automated indexing, and intelligent data partitioning.",
    icon: Database,
    link: "/solutions/ai-database"
  },
  {
    title: "Grant Tracking AI",
    description: "Automated grant discovery, application tracking, and reporting with AI-powered success prediction and optimization.",
    icon: FileCheck,
    link: "/solutions/grant-tracking"
  },
  {
    title: "Query Optimization",
    description: "Real-time query optimization and performance tuning using machine learning algorithms.",
    icon: Code,
    link: "/solutions/query-optimization"
  },
  {
    title: "Data Analytics",
    description: "AI-powered data analytics with automated reporting and intelligent insights generation.",
    icon: LineChart,
    link: "/solutions/analytics"
  },
  {
    title: "Automated Reports",
    description: "Smart report generation with AI-driven data visualization and narrative insights.",
    icon: FileSpreadsheet,
    link: "/solutions/reports"
  },
  {
    title: "Predictive Modeling",
    description: "Advanced predictive modeling for database performance and grant success probability.",
    icon: Brain,
    link: "/solutions/predictive"
  }
];

export default function Features() {
  return (
    <div className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            AI-Powered Solutions
          </h2>
        </div>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Link
              key={index}
              to={feature.link}
              className="group hover:no-underline"
            >
              <FeatureCard
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
              />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}