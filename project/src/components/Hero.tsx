import React from 'react';
import { Bot, Mail, MessageSquare } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative overflow-hidden pt-32 pb-96 lg:pt-40">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl">
            <span className="block">Transform Your Business with</span>
            <span className="block text-blue-500">Intelligent Automation</span>
          </h1>
          <p className="mt-3 max-w-md mx-auto text-base text-gray-300 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            Harness the power of advanced AI to revolutionize your outreach, engagement, and customer interactions. From intelligent email campaigns to sophisticated chatbots, we're your partner in AI-driven growth.
          </p>
          <div className="mt-10 flex justify-center gap-x-6">
            <button className="rounded-md px-8 py-3 bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-colors">
              Get Started
            </button>
            <button className="rounded-md px-8 py-3 bg-slate-700 text-white font-semibold hover:bg-slate-600 transition-colors">
              Learn More
            </button>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 inset-x-0 h-96 bg-gradient-to-t from-slate-800 to-transparent" />
      <div className="absolute -bottom-1/2 left-1/2 transform -translate-x-1/2 translate-y-1/2">
        <div className="flex gap-8">
          <Bot className="h-24 w-24 text-blue-500 animate-float" />
          <Mail className="h-24 w-24 text-blue-400 animate-float-delayed" />
          <MessageSquare className="h-24 w-24 text-blue-300 animate-float" />
        </div>
      </div>
    </div>
  );
}