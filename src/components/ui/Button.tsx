/**
 * Button Component
 * Reusable button with multiple variants
 * Fully accessible with keyboard support
 */

import { cn } from '@/lib/cn';
import { type ButtonHTMLAttributes, forwardRef, type ReactNode } from 'react';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  children: ReactNode;
  isLoading?: boolean;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { variant = 'primary', size = 'md', className, children, isLoading, disabled, ...props },
    ref
  ) => {
    const baseStyles =
      'inline-flex items-center justify-center rounded-lg font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-primary focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed';

    const variantStyles = {
      primary:
        'bg-accent-primary text-white hover:bg-accent-primary/90 active:scale-[0.98] shadow-xl shadow-accent-primary/30 hover:shadow-2xl hover:shadow-accent-primary/40 relative overflow-hidden group',
      secondary:
        'bg-accent-secondary text-white hover:bg-accent-secondary/90 active:scale-[0.98] shadow-xl shadow-accent-secondary/30 hover:shadow-2xl hover:shadow-accent-secondary/40',
      ghost:
        'bg-transparent text-text-primary hover:bg-surface/80 active:scale-[0.98] border border-border hover:border-accent-primary/50',
      outline:
        'bg-transparent border-2 border-accent-primary text-accent-primary hover:bg-accent-primary hover:text-white active:scale-[0.98] hover:shadow-lg hover:shadow-accent-primary/30',
    };

    const sizeStyles = {
      sm: 'px-4 py-2 text-sm',
      md: 'px-6 py-3 text-base',
      lg: 'px-8 py-4 text-lg',
    };

    return (
      <button
        ref={ref}
        className={cn(baseStyles, variantStyles[variant], sizeStyles[size], className)}
        disabled={disabled || isLoading}
        {...props}
      >
        {isLoading ? (
          <>
            <svg
              className="animate-spin -ml-1 mr-3 h-5 w-5"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              />
            </svg>
            Loading...
          </>
        ) : (
          children
        )}
      </button>
    );
  }
);

Button.displayName = 'Button';

