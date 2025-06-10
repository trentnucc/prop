import React from 'react';
import { MessageSquare, Bot, Brain, Users, Clock, Instagram } from 'lucide-react';
import { XIcon } from '../../components/common/XIcon';
import { SolutionLayout } from '../../components/solutions/SolutionLayout';

const features = [
  {
    icon: XIcon,
    title: "X Automation",
    description: "Advanced automation for X with AI-powered engagement, trend analysis, and viral content optimization."
  },
  {
    icon: Instagram,
    title: "Instagram Automation",
    description: "Intelligent DM automation, story engagement, and content scheduling for maximum reach."
  },
  {
    icon: MessageSquare,
    title: "Discord Integration",
    description: "AI-powered community management, moderation, and support automation for Discord servers."
  },
  {
    icon: Bot,
    title: "Smart Chatbots",
    description: "24/7 customer support chatbots with natural language understanding and seamless human handoff."
  }
];

export default function SocialMedia() {
  return (
    <SolutionLayout
      title="Social & Chat Automation"
      description="Dominate social platforms and automate customer interactions with AI-powered engagement across X, Instagram, and Discord"
      features={features}
      detailSection={{
        title: "Enterprise Social & Chat Features",
        description: "Our AI-powered platform delivers:",
        items: [
          "X post automation and engagement",
          "Instagram DM and content automation",
          "Discord server management and moderation",
          "24/7 intelligent chatbot support",
          "Cross-platform analytics dashboard",
          "Natural language understanding",
          "Automated workflow management",
          "Seamless human handoff protocols"
        ],
        icon: XIcon,
        image: ""
      }}
      demoProduct="social-media"
      demoButtonText="Transform Your Digital Presence"
    />
  );
}