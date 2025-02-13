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
}

const gradientColors = {
  from: 'var(--dark-primary)',
  via1: 'var(--accent-deep-rose)',
  via2: 'var(--muted-taupe)',
  to: 'var(--dark-secondary)',
} as const;

const gradientStyle = `
  from-[${gradientColors.from}]
  via-[${gradientColors.via1}]
  via-[${gradientColors.via2}]
  to-[${gradientColors.to}]
`;

const baseStyles = 'rounded-[6px] font-bold transition-all';

const sizeStyles = {
  small: 'text-sm px-4 py-2',
  default: 'text-lg px-8 py-3',
} as const;

const variantStyles = {
  primary: `
    bg-gradient-light
    text-primary hover:opacity-90 shadow-lg hover:shadow-xl p-[2px]
  `,
  secondary: `
    border-2 border-transparent bg-clip-padding
    p-[2px] relative hover:scale-[1.02] transition-transform text-white
    before:absolute before:inset-0 before:rounded-[4px] before:p-[2px]
    before:bg-gradient-to-r ${gradientStyle} before:content-['']
    before:-z-10 before:transition-all
    after:absolute after:inset-[2px] after:rounded-[4px]
    after:bg-black/80 after:transition-all after:-z-10 after:content-['']
  `,
} as const;

export default function GradientButton({
  children,
  onClick,
  className = '',
  type = undefined,
  secondary = false,
  small = false,
}: GradientButtonProps) {
  return (
    <motion.button
      type={type}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className={[
        baseStyles,
        secondary ? variantStyles.secondary : variantStyles.primary,
        small ? sizeStyles.small : sizeStyles.default,
        className,
      ].join(' ')}
    >
      {children}
    </motion.button>
  );
}
