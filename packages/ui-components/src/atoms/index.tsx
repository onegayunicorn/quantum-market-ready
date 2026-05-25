import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  loading?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  loading = false,
  className = '',
  disabled,
  ...props
}) => {
  const baseStyles = 'rounded-xl font-semibold transition-all duration-200 active:scale-95';
  
  const variants = {
    primary: 'bg-gradient-to-r from-primary-600 to-primary-500 hover:shadow-lg hover:shadow-primary-500/30',
    secondary: 'bg-white/5 border border-white/10 hover:bg-white/10',
    ghost: 'hover:bg-white/5',
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3',
    lg: 'px-8 py-4 text-lg',
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      disabled={disabled || loading}
      {...props}
    >
      {loading ? 'Loading...' : children}
    </button>
  );
};

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export const Card: React.FC<CardProps> = ({ children, className = '' }) => (
  <div className={`bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl ${className}`}>
    {children}
  </div>
);

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'success' | 'warning' | 'error' | 'info';
}

export const Badge: React.FC<BadgeProps> = ({ children, variant = 'info' }) => {
  const colors = {
    success: 'bg-green-500/20 text-green-400 border-green-500/30',
    warning: 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30',
    error: 'bg-red-500/20 text-red-400 border-red-500/30',
    info: 'bg-blue-500/20 text-blue-400 border-blue-500/30',
  };

  return (
    <span className={`px-3 py-1 rounded-full text-sm border ${colors[variant]}`}>
      {children}
    </span>
  );
};

interface ProgressBarProps {
  value: number;
  max?: number;
  color?: string;
}

export const ProgressBar: React.FC<ProgressBarProps> = ({ value, max = 100, color = 'bg-primary-500' }) => (
  <div className="h-2 bg-white/10 rounded-full overflow-hidden">
    <div className={`h-full ${color} rounded-full transition-all`} style={{ width: `${(value / max) * 100}%` }} />
  </div>
);