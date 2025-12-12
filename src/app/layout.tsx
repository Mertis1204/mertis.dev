/**
 * Root Layout
 * Minimal root layout - locale-specific layouts handle the rest
 */

import { type ReactNode } from 'react';

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  // Root layout should not render HTML structure
  // Let locale layout handle it
  return children;
}

