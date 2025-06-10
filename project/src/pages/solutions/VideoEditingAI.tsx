import React from 'react';
import { Film, Zap, Brain, Users, Clock, CheckCircle, Scissors, Sparkles, MonitorPlay } from 'lucide-react';
import { FeatureCard } from '../../components/common/FeatureCard';
import { PageHeader } from '../../components/common/PageHeader';
import { CTAButton } from '../../components/common/CTAButton';
import { Stats } from '../../components/common/Stats';

const features = [
  {
    icon: Scissors,
    title: "AI-Powered Video Cutting",
    description: "Automatically identify and cut scenes, remove silences, and create engaging short clips from long-form video content."
  },
  {
    icon: Sparkles,
    title: "Automated Content Enhancement",
    description: "Enhance video quality with AI-driven color correction, audio mastering, and content-aware visual effects."
  },
  {
    icon: MonitorPlay,
    title: "Multi-Platform Formatting",
    description: "Automatically reformat and resize videos for various social media platforms like TikTok, Instagram Reels, YouTube Shorts, and X."
  },
  {
    icon: Brain,
    title: "Smart Content Repurposing",
    description: "Transform existing video content into various formats like audiograms, quote snippets, and animated GIFs."
  }
];

const stats = [
  { value: "80", suffix: "%", label: "Editing Time Saved" },
  { value: "3x", suffix: "", label: "Faster Turnaround" },
  { value: "1.5M", suffix: "+", label: "Videos Processed" },
  { value: "60", suffix: "%", label: "Engagement Boost" }
];

export default function VideoEditingAI() {
  return (
    <div className="pt-20 min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <PageHeader
          title="AI Video Editing & Repurposing"
          description="Automate your video workflow, from editing raw footage to distributing platform-optimized content."
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

        <div className="mb-20 bg-gradient-to-r from-gray-50 to-purple-50 rounded-2xl p-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1607070600669-5ca47753c879?auto=format&fit=crop&q=80"
                alt="AI Video Editing Interface"
                className="rounded-xl shadow-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/10 to-transparent rounded-xl" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Seamless Video Workflow Automation
              </h3>
              <p className="text-gray-600 mb-6">
                Our AI video platform offers:
              </p>
              <ul className="space-y-3">
                {[
                  "Automated scene detection and smart trimming",
                  "AI-powered audio enhancement and noise reduction",
                  "Auto-captioning and transcription services",
                  "Template-based video creation for consistent branding",
                  "Integration with popular stock media libraries",
                  "Direct publishing to social media platforms",
                  "Content repurposing for various formats",
                  "Performance analytics for video content"
                ].map((item, index) => (
                  <li key={index} className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-purple-500 mr-2" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="flex justify-center">
          <CTAButton className="bg-purple-600 hover:bg-purple-700">
            Automate Your Video Editing
          </CTAButton>
        </div>
      </div>
    </div>
  );
}
