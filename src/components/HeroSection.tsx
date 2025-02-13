'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import GradientButton from './common/GradientButton';

type Particle = {
  initialX: number;
  initialY: number;
  targetX: number;
  targetY: number;
  duration: number;
};

export default function HeroSection() {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    const newParticles = [...Array(20)].map(() => ({
      initialX: Math.random() * 100,
      initialY: Math.random() * 100,
      targetX: Math.random() * 100,
      targetY: Math.random() * 100,
      duration: Math.random() * 10 + 10,
    }));
    setParticles(newParticles);
  }, []);

  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-[#0A0A0A] to-[#1A1A1A] dark:from-[#000000] dark:to-[#1E1E1E]">
      {/* Particle effect background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute h-full w-full">
          {particles.map((particle, i) => (
            <motion.div
              key={i}
              className="absolute h-1 w-1 rounded-full bg-white"
              initial={{
                x: `${particle.initialX}%`,
                y: `${particle.initialY}%`,
                opacity: 0.2,
                scale: 1,
              }}
              animate={{
                x: `${particle.targetX}%`,
                y: `${particle.targetY}%`,
                opacity: [0.2, 0.5, 0.2],
                scale: [1, 2, 1],
              }}
              transition={{
                duration: particle.duration,
                repeat: Infinity,
                ease: 'linear',
              }}
            />
          ))}
        </div>
      </div>

      {/* Main content */}
      <div className="relative z-10 container mx-auto flex min-h-screen flex-col items-center justify-center px-4 py-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <h1 className="text-5xl font-bold sm:text-7xl">
            <span
              className="text-gradient-light mt-2 block"
              style={{
                backgroundSize: '200% 200%',
                animation: 'gradient 15s ease infinite',
                backgroundPosition: 'left',
              }}
            >
              Building the Future
            </span>
            <span
              className="text-gradient-light mt-2 block"
              style={{
                backgroundSize: '200% 200%',
                animation: 'gradient 15s ease infinite',
                backgroundPosition: 'left',
              }}
            >
              of Web Development
            </span>
          </h1>
          <p className="mx-auto max-w-2xl text-xl text-gray-300 sm:text-2xl">
            Crafting innovative solutions with cutting-edge technology
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <GradientButton
              onClick={() => (window.location.href = '#projects')}
            >
              Web3 projects
            </GradientButton>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
