"use client";

import React from "react";
import { motion } from "framer-motion";

type GradientButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  secondary?: boolean;
};

export default function GradientButton({
  children,
  onClick,
  className = "",
  secondary = false,
}: GradientButtonProps) {
  return (
    <motion.button
      //   whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className={`
        px-8 py-3 rounded-[6px] font-bold transition-all
        ${
          secondary
            ? 'bg-transparent text-white relative border-2 border-transparent bg-gradient-to-r  [background-clip:padding-box] before:absolute before:inset-[-2px] before:rounded-[6px] before:bg-gradient-to-r before:from-indigo-500 before:via-purple-500 before:to-pink-500 before:-z-10 before:content-[""] hover:opacity-90'
            : "bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white hover:opacity-90 shadow-lg hover:shadow-xl"
        } ${className}`}
    >
      {children}
    </motion.button>
  );
}
