/**
 * Card Component
 * Reusable card with glassmorphism effect
 * Supports hover animations and custom content
 */

import { cn } from '@/lib/cn';
import { type HTMLAttributes, forwardRef, type ReactNode } from 'react';

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  hover?: boolean;
  glass?: boolean;
}

export const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ children, className, hover = true, glass = true, ...props }, ref) => {
    const baseStyles =
      'rounded-xl p-6 border border-border bg-surface transition-all duration-300';

    const hoverStyles = hover
      ? 'hover:scale-[1.02] hover:shadow-xl hover:border-accent-primary/50'
      : '';

    const glassStyles = glass ? 'glass' : '';

    return (
      <div
        ref={ref}
        className={cn(baseStyles, hoverStyles, glassStyles, className)}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Card.displayName = 'Card';

/**
 * Card Header Component
 */
export const CardHeader = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => {
    return <div ref={ref} className={cn('mb-4', className)} {...props} />;
  }
);

CardHeader.displayName = 'CardHeader';

/**
 * Card Title Component
 */
export const CardTitle = forwardRef<HTMLHeadingElement, HTMLAttributes<HTMLHeadingElement>>(
  ({ className, ...props }, ref) => {
    return (
      <h3
        ref={ref}
        className={cn('text-xl font-semibold text-text-primary', className)}
        {...props}
      />
    );
  }
);

CardTitle.displayName = 'CardTitle';

/**
 * Card Content Component
 */
export const CardContent = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => {
    return <div ref={ref} className={cn('text-text-secondary', className)} {...props} />;
  }
);

CardContent.displayName = 'CardContent';

/**
 * Card Footer Component
 */
export const CardFooter = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => {
    return <div ref={ref} className={cn('mt-4 pt-4 border-t border-border', className)} {...props} />;
  }
);

CardFooter.displayName = 'CardFooter';

