import React from 'react';
import { MessageSquare, Bot, Zap, Brain, Users, Clock, CheckCircle } from 'lucide-react';
import { FeatureCard } from '../../components/common/FeatureCard';
import { PageHeader } from '../../components/common/PageHeader';
import { CTAButton } from '../../components/common/CTAButton';
import { Stats } from '../../components/common/Stats';

const features = [
  {
    icon: Brain,
    title: "X Platform Integration",
    description: "Direct integration with X's API for real-time engagement, trend analysis, and automated responses with context awareness."
  },
  {
    icon: Bot,
    title: "Multi-Platform AI",
    description: "Unified conversation management across X, website chat, Discord, and Slack with seamless context sharing."
  },
  {
    icon: Users,
    title: "Viral Content Engine",
    description: "AI-powered content generation and scheduling optimized for maximum engagement on X and other platforms."
  },
  {
    icon: Clock,
    title: "24/7 Engagement",
    description: "Round-the-clock monitoring and response on all channels with intelligent escalation to human agents."
  }
];

const stats = [
  { value: "95", suffix: "%", label: "Response Accuracy" },
  { value: "4.2", suffix: "M", label: "Messages/Month" },
  { value: "0.6", suffix: "s", label: "Avg Response Time" },
  { value: "73", suffix: "%", label: "Engagement Rate" }
];

export default function ConversationalAI() {
  return (
    <div className="pt-20 min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <PageHeader
          title="X-Integrated Conversational AI"
          description="Transform your social presence with AI-powered conversations and engagement"
        />

        <Stats stats={stats} />

        <div className="mt-20 mb-16">
          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <FeatureCard
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
              />
            ))}
          </div>
        </div>

        <div className="mb-20 bg-gradient-to-r from-gray-50 to-sky-50 rounded-2xl p-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1531746790731-6c087fecd65a?auto=format&fit=crop&q=80"
                alt="AI Conversation Interface"
                className="rounded-xl shadow-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-sky-500/10 to-transparent rounded-xl" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Enterprise X Integration
              </h3>
              <p className="text-gray-600 mb-6">
                Our AI seamlessly integrates with X's platform to provide:
              </p>
              <ul className="space-y-3">
                {[
                  "Real-time trend analysis and automated engagement",
                  "Viral content generation and optimization",
                  "Sentiment analysis with emotional intelligence",
                  "Automated thread management and responses",
                  "Competitor analysis and strategic insights",
                  "Custom engagement rules and brand voice",
                  "Advanced analytics and performance tracking",
                  "Multi-language support with cultural awareness"
                ].map((item, index) => (
                  <li key={index} className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-sky-500 mr-2" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="flex justify-center">
          <CTAButton>
            Transform Your Social Presence
          </CTAButton>
        </div>
      </div>
    </div>
  );
}