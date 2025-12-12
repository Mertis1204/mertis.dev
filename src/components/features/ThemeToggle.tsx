/**
 * Theme Toggle Component
 * Animated dark/light mode switcher button
 * Shows sun/moon icons with smooth transitions
 */

'use client';

import { useTheme } from '@/components/providers/ThemeProvider';
import { cn } from '@/lib/cn';
import { motion } from 'framer-motion';
import { Moon, Sun } from 'lucide-react';

interface ThemeToggleProps {
  className?: string;
}

export function ThemeToggle({ className }: ThemeToggleProps) {
  const { resolvedTheme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(resolvedTheme === 'dark' ? 'light' : 'dark');
  };

  return (
    <motion.button
      onClick={toggleTheme}
      className={cn(
        'relative flex items-center justify-center w-11 h-11 rounded-full',
        'bg-surface border border-border',
        'hover:border-accent-primary transition-colors duration-300',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-primary focus-visible:ring-offset-2',
        className
      )}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      aria-label={`Switch to ${resolvedTheme === 'dark' ? 'light' : 'dark'} mode`}
      title={`Switch to ${resolvedTheme === 'dark' ? 'light' : 'dark'} mode`}
    >
      <motion.div
        initial={false}
        animate={{
          rotate: resolvedTheme === 'dark' ? 0 : 180,
          scale: resolvedTheme === 'dark' ? 1 : 0.8,
        }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        className="absolute"
      >
        {resolvedTheme === 'dark' ? (
          <Moon className="w-5 h-5 text-text-primary" aria-hidden="true" />
        ) : (
          <Sun className="w-5 h-5 text-text-primary" aria-hidden="true" />
        )}
      </motion.div>
    </motion.button>
  );
}

