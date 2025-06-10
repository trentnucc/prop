import React, { useState, useRef, useEffect } from 'react';
import { Brain, ChevronDown, Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { DemoButton } from '../common/DemoButton';

const solutions = [
  {
    name: 'AI SQL Database',
    description: 'Intelligent database optimization and management',
    path: '/solutions/ai-database'
  },
  {
    name: 'Grant Tracking',
    description: 'AI-powered grant management system',
    path: '/solutions/grant-tracking'
  },
  {
    name: 'Query Optimization',
    description: 'Smart query performance tuning',
    path: '/solutions/query-optimization'
  },
  {
    name: 'Analytics',
    description: 'AI-driven data analytics and insights',
    path: '/solutions/analytics'
  },
  {
    name: 'Automated Reports',
    description: 'Intelligent report generation',
    path: '/solutions/reports'
  },
  {
    name: 'AI Video Editing',
    description: 'Automated video editing and repurposing',
    path: '/solutions/video-editing'
  }
];

export default function Navbar() {
  const location = useLocation();
  const [showSolutions, setShowSolutions] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout>();
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setShowSolutions(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setShowSolutions(false);
    }, 300);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    setShowSolutions(false);
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return (
    <nav className="fixed w-full z-50">
      <div className="absolute inset-0 bg-white/95 backdrop-blur-md border-b border-gray-200" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <Link to="/" className="flex items-center" onClick={closeMobileMenu}>
            <Brain className="h-8 w-8 text-sky-500" />
            <span className="ml-2 text-xl font-bold text-gray-900">DataGrant AI</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <div
              ref={dropdownRef}
              className="relative group"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <button
                className="flex items-center text-base font-medium text-gray-600 hover:text-gray-900 py-2 transition-colors duration-200"
              >
                Solutions
                <ChevronDown className={`ml-1 h-4 w-4 transition-transform duration-200 ${showSolutions ? 'rotate-180' : ''}`} />
              </button>

              {showSolutions && (
                <div
                  className="absolute left-0 mt-2 w-80 bg-white rounded-xl shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none transform transition-all duration-200 origin-top"
                >
                  <div className="py-2">
                    {solutions.map((solution) => (
                      <Link
                        key={solution.path}
                        to={solution.path}
                        className="block px-4 py-3 hover:bg-gray-50 transition-colors duration-200"
                        onClick={() => setShowSolutions(false)}
                      >
                        <div className="font-medium text-gray-900">{solution.name}</div>
                        <div className="text-sm text-gray-500">{solution.description}</div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <Link
              to="/about"
              className={`text-base font-medium transition-colors duration-200 ${
                location.pathname === '/about'
                  ? 'text-sky-500'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              About
            </Link>

            <DemoButton />
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-md text-gray-600 hover:text-gray-900"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white border-b border-gray-200 py-2">
            <div className="space-y-1 px-4">
              <button
                className="flex items-center justify-between w-full py-2 text-base font-medium text-gray-600"
                onClick={() => setShowSolutions(!showSolutions)}
              >
                Solutions
                <ChevronDown className={`ml-1 h-4 w-4 transition-transform duration-200 ${showSolutions ? 'rotate-180' : ''}`} />
              </button>

              {showSolutions && (
                <div className="pl-4 pb-2 space-y-2">
                  {solutions.map((solution) => (
                    <Link
                      key={solution.path}
                      to={solution.path}
                      className="block py-2"
                      onClick={closeMobileMenu}
                    >
                      <div className="font-medium text-gray-900">{solution.name}</div>
                      <div className="text-sm text-gray-500">{solution.description}</div>
                    </Link>
                  ))}
                </div>
              )}

              <Link
                to="/about"
                className="block py-2 text-base font-medium text-gray-600"
                onClick={closeMobileMenu}
              >
                About
              </Link>

              <div className="pt-2">
                <DemoButton className="w-full justify-center" />
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}