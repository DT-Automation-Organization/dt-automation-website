import React from 'react';
import clsx from 'clsx';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hoverable?: boolean;
  bordered?: boolean;
  elevated?: boolean;
  onClick?: () => void;
}

export const Card: React.FC<CardProps> = ({
  children,
  className = '',
  hoverable = false,
  bordered = false,
  elevated = true,
  onClick,
}) => {
  return (
    <div
      className={clsx(
        'bg-white dark:bg-gray-800 rounded-xl overflow-hidden',
        elevated && 'shadow-card',
        bordered && 'border border-gray-200 dark:border-gray-700',
        hoverable && 'transition-all duration-300 hover:shadow-lg hover:-translate-y-1',
        onClick && 'cursor-pointer',
        className
      )}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export const CardHeader: React.FC<{ children: React.ReactNode; className?: string }> = ({
  children,
  className = '',
}) => {
  return (
    <div className={clsx('p-6 border-b border-gray-200 dark:border-gray-700', className)}>
      {children}
    </div>
  );
};

export const CardBody: React.FC<{ children: React.ReactNode; className?: string }> = ({
  children,
  className = '',
}) => {
  return <div className={clsx('p-6', className)}>{children}</div>;
};

export const CardFooter: React.FC<{ children: React.ReactNode; className?: string }> = ({
  children,
  className = '',
}) => {
  return (
    <div className={clsx('p-6 border-t border-gray-200 dark:border-gray-700', className)}>
      {children}
    </div>
  );
};