// App Routes Configuration
// Defines all available routes and mega-menu navigation structure in the CSE Financial Intelligence Platform

export const routes = {
  home: {
    path: '/',
    name: 'Home',
    description: 'Landing page and platform overview',
  },
  dashboard: {
    path: '/dashboard',
    name: 'Dashboard',
    description: 'Corporate financial intelligence dashboard',
  },
  companies: {
    path: '/companies',
    name: 'Companies',
    description: 'Company directory, search, and fundamentals workspace',
  },
  discover: {
    path: '/discover',
    name: 'Discover',
    description: 'Intelligent financial discovery engine',
  },
  compare: {
    path: '/compare',
    name: 'Compare',
    description: 'Multi-company financial performance comparison',
  },
  analysis: {
    path: '/analysis',
    name: 'Financial Analysis',
    description: 'Market-wide health, growth, profitability & risk analysis',
  },
  sectors: {
    path: '/sector_page',
    name: 'Sectors',
    description: 'Sector analytics, breakdown & industry performance',
  },
  announcements: {
    path: '/announcements',
    name: 'Announcements',
    description: 'Corporate announcements, financials, and circulars',
  },
  research: {
    path: '/research',
    name: 'Research',
    description: 'Financial intelligence reports, AI insights & market studies',
  },
  tools: {
    path: '/tools',
    name: 'Tools',
    description: 'Financial screener, ratio calculator & report generator',
  },
  about: {
    path: '/about',
    name: 'About Us',
    description: 'About the platform',
  },
  login: {
    path: '/welcome-page/login-page',
    name: 'Login',
    description: 'Login to your account',
  },
  register: {
    path: '/welcome-page/register-page',
    name: 'Register',
    description: 'Register a new account',
  },
} as const;

export interface NavSubItem {
  label: string;
  href: string;
  description?: string;
  badge?: string;
}

export interface NavItem {
  label: string;
  href: string;
  subItems?: NavSubItem[];
}

// Navigation items for the platform header with sub-menus
export const navigationItems: NavItem[] = [
  {
    label: 'Dashboard',
    href: routes.dashboard.path,
  },
  {
    label: 'Companies',
    href: routes.companies.path,
    subItems: [
      { label: 'Company Directory', href: '/companies', description: 'Browse all CSE listed companies' },
      { label: 'Stock Fundamentals', href: '/stockpage', description: 'Historical stock fundamental views' },
      { label: 'Top Companies', href: '/companies?sort=profitability', description: 'Highest ROE and profit margins' },
    ]
  },
  {
    label: 'Discover',
    href: routes.discover.path,
    subItems: [
      { label: 'Highest Growth', href: '/discover?filter=revenue_growth', description: 'Fastest growing revenues and profits' },
      { label: 'Strongest Financial Health', href: '/discover?filter=health_score', description: 'Lowest debt & high liquidity' },
      { label: 'Best Dividends', href: '/discover?filter=dividend_yield', description: 'Consistent high yield dividend payers' },
      { label: 'Highest ROE & ROA', href: '/discover?filter=roe', description: 'Top return on equity companies' },
    ]
  },
  {
    label: 'Compare',
    href: routes.compare.path,
  },
  {
    label: 'Analysis',
    href: routes.analysis.path,
    subItems: [
      { label: 'Financial Health', href: '/analysis/financial-health', description: 'Solvency, leverage & bankruptcy risk' },
      { label: 'Growth Analysis', href: '/analysis/growth', description: 'YoY revenue and net income trends' },
      { label: 'Profitability Analysis', href: '/analysis/profitability', description: 'Gross, operating, & net margin comparisons' },
      { label: 'Liquidity Analysis', href: '/analysis/liquidity', description: 'Current ratio and quick ratio trends' },
      { label: 'Dividend Performance', href: '/analysis/dividends', description: 'Payout ratios and dividend growth' },
    ]
  },
  {
    label: 'Sectors',
    href: routes.sectors.path,
  },
  {
    label: 'Announcements',
    href: routes.announcements.path,
  },
  {
    label: 'Research',
    href: routes.research.path,
  },
  {
    label: 'Tools',
    href: routes.tools.path,
    subItems: [
      { label: 'Financial Screener', href: '/tools/screener', description: 'Filter companies by custom financial metrics' },
      { label: 'Ratio Calculator', href: '/tools/calculator', description: 'Calculate financial ratios instantly' },
      { label: 'Report Generator', href: '/tools/reports', description: 'Export PDF & CSV financial reports' },
    ]
  },
];

export function getRoute(key: keyof typeof routes) {
  return routes[key];
}
