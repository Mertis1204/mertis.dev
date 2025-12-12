/**
 * Email Obfuscator Component
 * Anti-scraping email display with reveal on interaction
 * Never renders plain email in HTML until user interaction
 */

'use client';

import { obfuscateEmail } from '@/lib/security';
import { cn } from '@/lib/cn';
import { useState } from 'react';

interface EmailObfuscatorProps {
  email: string;
  className?: string;
  copyText?: string;
  copiedText?: string;
}

export function EmailObfuscator({
  email,
  className,
  copyText = 'Copy',
  copiedText = 'Copied!',
}: EmailObfuscatorProps) {
  const [revealed, setRevealed] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleReveal = () => {
    setRevealed(true);
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      console.error('Failed to copy email:', error);
    }
  };

  if (!revealed) {
    return (
      <button
        onClick={handleReveal}
        onMouseEnter={handleReveal}
        className={cn(
          'inline-flex items-center gap-2 text-text-primary hover:text-accent-primary transition-colors',
          'cursor-pointer select-none',
          className
        )}
        aria-label="Click to reveal email address"
      >
        <span className="font-mono">{obfuscateEmail(email)}</span>
        <svg
          className="w-4 h-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
          />
        </svg>
      </button>
    );
  }

  return (
    <div className={cn('inline-flex items-center gap-3', className)}>
      <a
        href={`mailto:${email}`}
        className="text-text-primary hover:text-accent-primary transition-colors font-mono"
      >
        {email}
      </a>
      <button
        onClick={handleCopy}
        className={cn(
          'inline-flex items-center gap-1 px-3 py-1 rounded-md text-sm',
          'bg-surface border border-border',
          'hover:border-accent-primary hover:text-accent-primary',
          'transition-all duration-200',
          copied && 'bg-accent-primary/10 border-accent-primary text-accent-primary'
        )}
        aria-label={copied ? copiedText : copyText}
      >
        {copied ? (
          <>
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
            <span>{copiedText}</span>
          </>
        ) : (
          <>
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
              />
            </svg>
            <span>{copyText}</span>
          </>
        )}
      </button>
    </div>
  );
}

