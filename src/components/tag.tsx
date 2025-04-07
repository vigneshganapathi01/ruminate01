
import { cn } from '@/lib/utils';
import React from 'react';

interface TagProps {
  children: React.ReactNode;
  color?: 'default' | 'blue' | 'green' | 'orange' | 'purple' | 'red';
  className?: string;
}

export function Tag({ children, color = 'default', className }: TagProps) {
  const colorClasses = {
    default: 'bg-secondary text-foreground',
    blue: 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300',
    green: 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300',
    orange: 'bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-300',
    purple: 'bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300',
    red: 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300',
  };

  return (
    <span className={cn(
      'inline-flex items-center px-2 py-0.5 rounded-md text-xs font-medium',
      colorClasses[color],
      className
    )}>
      {children}
    </span>
  );
}
