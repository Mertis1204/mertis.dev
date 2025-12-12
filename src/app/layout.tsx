/**
 * Root Layout
 * This is required by Next.js but the actual layout is in [locale]/layout.tsx
 */

import { type ReactNode } from 'react';

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return children;
}

