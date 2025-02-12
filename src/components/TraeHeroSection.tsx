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

export default function TraeHeroSection() {
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
    <section className="min-h-screen relative overflow-hidden bg-gradient-to-br from-[#0A0A0A] to-[#1A1A1A]">
      {/* Particle effect background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute w-full h-full">
          {particles.map((particle, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full"
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
      <div className="relative z-10 container mx-auto px-4 py-20 flex flex-col items-center justify-center min-h-screen text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <h1 className="text-5xl sm:text-7xl font-bold">
            <span
              className="bg-gradient-to-r 
              from-[#3f5f66] via-[#ea8e6a] to-[#53696d]
              bg-clip-text text-transparent"
              style={{
                backgroundSize: '200% 200%',
                animation: 'gradient 15s ease infinite',
              }}
            >
              Building the Future
            </span>
            <span
              className="block mt-2 bg-gradient-to-r 
              from-[#3f5f66] via-[#ea8e6a] to-[#53696d] bg-clip-text text-transparent"
            >
              of Web Development
            </span>
          </h1>
          <p className="text-xl sm:text-2xl text-gray-300 max-w-2xl mx-auto">
            Hello! I&apos;m Galadriel. Crafting innovative solutions with
            cutting-edge technology
          </p>
          <div className="flex gap-4 justify-center mt-8">
            <GradientButton
              onClick={() => (window.location.href = '#projects')}
            >
              Web3 projects
            </GradientButton>
            <GradientButton secondary>Contact me</GradientButton>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
