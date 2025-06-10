import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, MessageSquare, Phone, Database, Code, Instagram, Linkedin } from 'lucide-react';
import { SolutionCard } from './solutions/SolutionCard';
import { SolutionHeader } from './solutions/SolutionHeader';
import { SocialLogos } from './common/SocialLogos';

const solutions = [
  {
    title: "Email & LinkedIn Outreach",
    description: "Our AI-powered system revolutionizes lead generation and nurturing. With advanced personalization algorithms, verified lead databases, and intelligent follow-up sequences.",
    image: "https://images.unsplash.com/photo-1557200134-90327ee9fafa?auto=format&fit=crop&q=80",
    link: "/solutions/email-outreach",
    isCustomImage: false
  },
  {
    title: "Social Media Mastery",
    description: "Dominate LinkedIn and Instagram with our AI-powered automation. From connection requests to DM automation, leverage advanced analytics and engagement tools.",
    component: () => (
      <div className="relative w-full aspect-video bg-gradient-to-r from-gray-900 to-purple-900 rounded-xl shadow-lg overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center gap-8">
          <div className="w-24 h-24 relative bg-blue-600 rounded-lg p-5">
            <Linkedin className="w-full h-full text-white" />
          </div>
          <div className="w-24 h-24 relative bg-gradient-to-tr from-purple-600 via-pink-600 to-orange-500 rounded-2xl p-5">
            <Instagram className="w-full h-full text-white" />
          </div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-tr from-black/10 to-transparent" />
      </div>
    ),
    link: "/solutions/social-media",
    isCustomImage: true
  },
  {
    title: "Intelligent CRM",
    description: "From website chatbots to Discord moderation, our AI solutions maintain engaging, context-aware conversations that build relationships and drive conversions.",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80",
    link: "/solutions/crm",
    isCustomImage: false
  },
  {
    title: "AI Video Editing",
    description: "Automate your video editing workflow. From raw footage to polished, platform-optimized content, our AI handles cutting, enhancing, and repurposing.",
    image: "https://images.unsplash.com/photo-1574717024633-6005c4843c06?auto=format&fit=crop&q=80", // Example image, replace if needed
    link: "/solutions/video-editing",
    isCustomImage: false
  }
];

export default function Solutions() {
  return (
    <div id="solutions" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SolutionHeader />
        <div className="space-y-24">
          {solutions.map((solution, index) => (
            <Link
              key={index}
              to={solution.link}
              className="block hover:no-underline"
            >
              <SolutionCard
                {...solution}
                isReversed={index % 2 !== 0}
              />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}