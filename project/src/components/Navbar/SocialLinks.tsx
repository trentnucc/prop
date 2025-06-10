import React from 'react';
import { Facebook, Linkedin, Twitter, Instagram, Youtube } from 'lucide-react';

export default function SocialLinks() {
  return (
    <div className="flex items-center space-x-4">
      <SocialIcon href="#" Icon={Facebook} />
      <SocialIcon href="#" Icon={Linkedin} />
      <SocialIcon href="#" Icon={Twitter} />
      <SocialIcon href="#" Icon={Instagram} />
      <SocialIcon href="#" Icon={Youtube} />
    </div>
  );
}

function SocialIcon({ href, Icon }: { href: string; Icon: any }) {
  return (
    <a
      href={href}
      className="text-slate-400 hover:text-blue-600 transition-colors"
      target="_blank"
      rel="noopener noreferrer"
    >
      <Icon className="h-5 w-5" />
    </a>
  );
}