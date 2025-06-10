import React from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { DemoScheduler } from '../components/DemoScheduler';
import { ProductSelector } from '../components/demo/ProductSelector';

const CALENDLY_URL = 'https://calendly.com/trent-nuccetelli/outreach-demo';

const products = {
  'website-builder': {
    title: 'AI Website Builder',
    description: 'Complete website solution with AI-powered design, chatbots, and lead capture',
    features: [
      'Custom AI website design',
      'Smart chatbot integration',
      'Lead capture forms',
      'Analytics dashboard'
    ]
  },
  'email-outreach': {
    title: 'Email Outreach Excellence',
    description: 'AI-powered email automation system for personalized outreach at scale',
    features: [
      'Mass personalization',
      'Smart lead targeting',
      'Automated follow-ups',
      'Analytics dashboard'
    ]
  },
  'customer-service': {
    title: 'Customer Service AI',
    description: 'Advanced chatbots and voice systems with Discord integration',
    features: [
      'Discord server automation & support',
      'Website chat integration',
      'Voice system automation',
      '24/7 multi-channel support'
    ]
  },
  'social-media': {
    title: 'Social Media Mastery',
    description: 'Comprehensive automation for LinkedIn, X, and Instagram',
    features: [
      'LinkedIn connection & messaging automation',
      'X post & engagement automation',
      'Instagram DM & content automation',
      'Cross-platform analytics'
    ]
  },
  'crm': {
    title: 'Smart CRM',
    description: 'AI-enhanced customer relationship management',
    features: [
      'Unified customer data',
      'Smart analytics',
      'Automated workflows',
      'Integration capabilities'
    ]
  }
};

export default function Demo() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const product = searchParams.get('product');

  const selectedProduct = product && products[product as keyof typeof products];

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      {selectedProduct ? (
        <DemoScheduler
          calendlyUrl={CALENDLY_URL}
          title={selectedProduct.title}
          description={selectedProduct.description}
          features={selectedProduct.features}
        />
      ) : (
        <ProductSelector
          products={products}
          onSelect={(product) => navigate(`/demo?product=${product}`)}
        />
      )}
    </div>
  );
}