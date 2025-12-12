/**
 * External Link Component
 * Security wrapper for external links
 * Automatically adds rel="noopener noreferrer" and target="_blank"
 */

import { cn } from '@/lib/cn';
import { getExternalLinkAttributes } from '@/lib/security';
import Link from 'next/link';
import { type AnchorHTMLAttributes, type ReactNode } from 'react';

export interface ExternalLinkProps extends Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'href'> {
  href: string;
  children: ReactNode;
  showIcon?: boolean;
}

export function ExternalLink({ href, children, className, showIcon = false, ...props }: ExternalLinkProps) {
  const { target, rel } = getExternalLinkAttributes();

  return (
    <Link
      href={href}
      target={target}
      rel={rel}
      className={cn(
        'inline-flex items-center gap-1 text-accent-primary hover:text-accent-primary/80 transition-colors underline-offset-4 hover:underline',
        className
      )}
      {...props}
    >
      {children}
      {showIcon && (
        <svg
          className="w-4 h-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
          />
        </svg>
      )}
    </Link>
  );
}

