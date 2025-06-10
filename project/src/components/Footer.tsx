import React from 'react';
import { Brain, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-900 pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <div className="flex items-center">
              <Brain className="h-8 w-8 text-blue-500" />
              <span className="ml-2 text-xl font-bold text-white">DataGrant AI</span>
            </div>
            <p className="mt-4 text-gray-400">
              Advanced AI solutions for database optimization and grant management
            </p>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-4">Solutions</h3>
            <ul className="space-y-2 text-gray-400">
              <li>AI SQL Database</li>
              <li>Grant Tracking</li>
              <li>Query Optimization</li>
              <li>Analytics</li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-center">
                <Mail className="h-4 w-4 mr-2" />
                contact@datagrantai.com
              </li>
              <li className="flex items-center">
                <MapPin className="h-4 w-4 mr-2" />
                San Francisco, CA
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8">
          <p className="text-center text-gray-400">
            © {new Date().getFullYear()} DataGrant AI. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}