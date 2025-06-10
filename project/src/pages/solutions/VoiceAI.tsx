import React from 'react';
import { Phone, Mic, Brain, Users, Clock } from 'lucide-react';
import { SolutionLayout } from '../../components/solutions/SolutionLayout';

const features = [
  {
    icon: Phone,
    title: "24/7 Call Handling",
    description: "AI-powered system that answers calls around the clock, handles inquiries, and schedules appointments automatically."
  },
  {
    icon: Brain,
    title: "Natural Conversations",
    description: "Advanced natural language processing for human-like conversations with context awareness."
  },
  {
    icon: Users,
    title: "Smart Transfer",
    description: "Intelligent call routing to human agents based on complexity and urgency."
  },
  {
    icon: Clock,
    title: "Call Analytics",
    description: "Detailed analytics on call volumes, patterns, and customer satisfaction metrics."
  }
];

const stats = [
  { value: "24/7", label: "Availability" },
  { value: "12", suffix: "s", label: "Avg Response Time" },
  { value: "85", suffix: "%", label: "Resolution Rate" },
  { value: "45", suffix: "%", label: "Cost Reduction" }
];

export default function VoiceAI() {
  return (
    <SolutionLayout
      title="AI Voice System"
      description="Transform your phone support with intelligent voice AI"
      features={features}
      stats={stats}
      detailSection={{
        title: "Enterprise Voice AI Features",
        description: "Our AI-powered voice system delivers:",
        items: [
          "Multi-language support with real-time translation",
          "Custom voice and personality matching",
          "Seamless CRM integration for context-aware conversations",
          "Automatic call recording and transcription",
          "Smart scheduling and appointment management",
          "Real-time sentiment analysis and escalation",
          "Custom business logic and workflow automation",
          "Detailed analytics and reporting dashboard"
        ],
        icon: Phone,
        image: "https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?auto=format&fit=crop&q=80"
      }}
      demoProduct="voice-ai"
      demoButtonText="Get Started with Voice AI"
    />
  );
}