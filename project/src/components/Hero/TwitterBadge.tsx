import React from 'react';
import { Twitter } from 'lucide-react';

export default function TwitterBadge() {
  return (
    <div className="inline-flex items-center gap-2 bg-gray-50 border border-gray-200 rounded-full px-4 py-2 mb-6">
      <Twitter className="h-4 w-4 text-sky-500" />
      <span className="text-sm text-gray-600">Powered by Twitter AI</span>
    </div>
  );
}