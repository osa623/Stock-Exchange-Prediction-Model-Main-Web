'use client';

import { createContext, useContext, ReactNode } from 'react';

// App Context for global state management
interface AppContextType {
  // Add global state here as needed
  theme?: 'light' | 'dark';
}

const AppContext = createContext<AppContextType>({});

export function useApp() {
  return useContext(AppContext);
}

// App Provider component that wraps the entire application
export function AppProvider({ children }: { children: ReactNode }) {
  const value: AppContextType = {
    theme: 'light',
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}
