// App Routes Configuration
// This file defines all available routes in the application

export const routes = {
  home: {
    path: '/',
    name: 'Home',
    description: 'Home page',
  },
  dashboard: {
    path: '/dashboard',
    name: 'Dashboard',
    description: 'Stock analysis dashboard',
  },
    stock: {
    path: '/stockpage',
    name: 'Stock Fundamentals',
    description: 'Stock fundamentals analysis',
  },
  landingPage: {
    path: '/landing-page',
    name: 'About',
    description: 'About the platform',
  },
} as const;

// Navigation items for the header
export const navigationItems = [
  {
    label: 'Home',
    href: routes.home.path,
  },
  {
    label: 'Dashboard',
    href: routes.dashboard.path,
  },
    {
    label: 'Stock',
    href: routes.stock.path,
  },
  {
    label: 'About',
    href: routes.landingPage.path,
  },
];

// Helper to get route by key
export function getRoute(key: keyof typeof routes) {
  return routes[key];
}
