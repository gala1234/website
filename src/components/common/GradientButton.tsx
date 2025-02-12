'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface GradientButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  secondary?: boolean;
  small?: boolean;
}

const gradientColors = {
  from: '#3f5f66',
  via1: '#ea8e6a',
  via2: '#b5ac96',
  to: '#53696d',
};

const baseStyles = 'rounded-[6px] font-bold transition-all';

const sizeStyles = {
  small: 'text-sm px-4 py-2',
  default: 'text-lg px-8 py-3',
};

const variantStyles = {
  primary: `bg-gradient-to-r from-[${gradientColors.from}] via-[${gradientColors.via1}] via-[${gradientColors.via2}] to-[${gradientColors.to}] text-white hover:opacity-90 shadow-lg hover:shadow-xl`,
  secondary: `bg-transparent text-white relative border-2 border-transparent bg-gradient-to-r [background-clip:padding-box] before:absolute before:inset-[-2px] before:rounded-[6px] before:bg-gradient-to-r before:from-[${gradientColors.from}] before:via-[${gradientColors.via1}] via-[${gradientColors.via2}] before:to-[${gradientColors.to}] before:-z-10 before:content-[""] hover:opacity-90`,
};

export default function GradientButton({
  children,
  onClick,
  className = '',
  secondary = false,
  small = false,
}: GradientButtonProps) {
  return (
    <motion.button
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className={`
        ${baseStyles}
        ${secondary ? variantStyles.secondary : variantStyles.primary}
        ${small ? sizeStyles.small : sizeStyles.default}
        ${className}
      `}
    >
      {children}
    </motion.button>
  );
}
