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
            ? 'bg-transparent text-white relative border-2 border-transparent bg-gradient-to-r  [background-clip:padding-box] before:absolute before:inset-[-2px] before:rounded-[6px] before:bg-gradient-to-r before:from-[#3f5f66] before:via-[#b5ac96] before:via-[#ea8e6a] before:to-[#53696d] before:-z-10 before:content-[""] hover:opacity-90'
            : "bg-gradient-to-r from-[#3f5f66] via-[#b5ac96] via-[#ea8e6a] to-[#53696d] text-white hover:opacity-90 shadow-lg hover:shadow-xl"
        } ${className}`}
    >
      {children}
    </motion.button>
  );
}
