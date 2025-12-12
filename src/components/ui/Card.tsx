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
      'rounded-2xl p-6 border bg-surface transition-all duration-300 ease-out shadow-sm';

    const hoverStyles = hover
      ? 'hover:shadow-xl hover:-translate-y-1'
      : '';

    const glassStyles = glass ? 'backdrop-blur-sm' : '';

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
    return <div ref={ref} className={cn('mb-3', className)} {...props} />;
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
        className={cn('text-xl font-bold text-text-primary leading-tight', className)}
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
    return <div ref={ref} className={cn('text-text-secondary py-2', className)} {...props} />;
  }
);

CardContent.displayName = 'CardContent';

/**
 * Card Footer Component
 */
export const CardFooter = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => {
    return <div ref={ref} className={cn('mt-auto pt-4 border-t border-border/50', className)} {...props} />;
  }
);

CardFooter.displayName = 'CardFooter';

