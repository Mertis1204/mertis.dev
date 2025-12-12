import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // Static Export for GitHub Pages
  output: 'export',
  
  // Images - GitHub Pages doesn't support Next.js Image Optimization
  images: {
    unoptimized: true,
  },
  
  // Trailing slash for consistency
  trailingSlash: true,
  
  // Custom domain (mertis.dev) - no basePath needed
  basePath: '',
  assetPrefix: '',
  
  // TypeScript strict mode
  typescript: {
    ignoreBuildErrors: false,
  },
  
  // ESLint during builds
  eslint: {
    ignoreDuringBuilds: false,
  },

  // Note: Security headers (CSP, X-Frame-Options, etc.) should be configured
  // in GitHub Pages / Cloudflare settings as static export doesn't support headers()
  
  // React strict mode
  reactStrictMode: true,
};

export default nextConfig;

