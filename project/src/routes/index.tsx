import React from 'react';

const HomePage = React.lazy(() => import('../pages/Home'));
const AboutPage = React.lazy(() => import('../pages/About'));
const EmailOutreach = React.lazy(() => import('../pages/solutions/EmailOutreach'));
const CustomerServiceAI = React.lazy(() => import('../pages/solutions/CustomerServiceAI'));
const CRM = React.lazy(() => import('../pages/solutions/CRM'));
const SocialMedia = React.lazy(() => import('../pages/solutions/SocialMedia'));
const WebsiteBuilder = React.lazy(() => import('../pages/solutions/WebsiteBuilder'));
const VideoEditingAI = React.lazy(() => import('../pages/solutions/VideoEditingAI'));
const DemoRequests = React.lazy(() => import('../pages/admin/DemoRequests'));
const Demo = React.lazy(() => import('../pages/Demo'));

export const routes = [
  {
    path: '/',
    element: <HomePage />
  },
  {
    path: '/about',
    element: <AboutPage />
  },
  {
    path: '/solutions/website-builder',
    element: <WebsiteBuilder />
  },
  {
    path: '/solutions/email-outreach',
    element: <EmailOutreach />
  },
  {
    path: '/solutions/customer-service',
    element: <CustomerServiceAI />
  },
  {
    path: '/solutions/crm',
    element: <CRM />
  },
  {
    path: '/solutions/social-media',
    element: <SocialMedia />
  },
  {
    path: '/solutions/video-editing',
    element: <VideoEditingAI />
  },
  {
    path: '/admin/demo-requests',
    element: <DemoRequests />
  },
  {
    path: '/demo',
    element: <Demo />
  }
];