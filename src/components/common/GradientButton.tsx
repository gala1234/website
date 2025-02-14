'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface GradientButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  secondary?: boolean;
  small?: boolean;
  dark?: boolean;
}

const gradientColors = {
  from: 'var(--dark-primary)',
  via1: 'var(--accent-deep-rose)',
  via2: 'var(--muted-taupe)',
  to: 'var(--dark-secondary)',
} as const;

const gradientStyle = [
  `from-[${gradientColors.from}]`,
  `via-[${gradientColors.via1}]`,
  `via-[${gradientColors.via2}]`,
  `to-[${gradientColors.to}]`,
].join(' ');

const baseStyles = [
  'rounded-[6px]',
  'font-bold',
  'hover:opacity-90',
  'hover:cursor-pointer',
  'transition-all',
  'text-primary',
].join(' ');

const sizeStyles = {
  small: 'text-sm px-4 py-2',
  default: 'text-lg px-8 py-3',
} as const;

const variantStyles = {
  primary: ['bg-gradient-light', 'p-[2px]'].join(' '),
  secondary: [
    'text-gradient-light',
    'bg-[#0A0A0A]',
    'border-gradient-light',
    'p-[2px]',
  ].join(' '),
  dark: ['bg-gradient-dark', 'p-[2px]'].join(' '),
  darkSecondary: [
    'text-gradient-dark',
    'bg-[#0A0A0A]',
    'border-gradient-dark',
    'p-[2px]',
  ].join(' '),
} as const;

export default function GradientButton({
  children,
  onClick,
  className = '',
  type = undefined,
  secondary = false,
  small = false,
  dark = false,
}: GradientButtonProps) {
  return (
    <motion.button
      type={type}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className={[
        baseStyles,
        dark
          ? secondary
            ? variantStyles.darkSecondary
            : variantStyles.dark
          : secondary
            ? variantStyles.secondary
            : variantStyles.primary,
        small ? sizeStyles.small : sizeStyles.default,
        className,
      ].join(' ')}
    >
      {children}
    </motion.button>
  );
}
