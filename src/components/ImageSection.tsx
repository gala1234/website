'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function ImageSection() {
  return (
    <section className="min-h-screen relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/futuristic_landscape.webp"
          alt="Futuristic sci-fi landscape"
          fill
          priority
          className="object-cover"
        />
        {/* Overlay for better text contrast */}
        <div className="absolute inset-0 bg-white/20" />
      </div>

      {/* Content */}
      <div
        className="
          relative z-10 p-8 sm:p-20 
          flex items-center justify-start 
          min-h-screen
        "
      >
        <motion.div
          className="max-w-3xl bg-white/80 rounded-lg p-8 shadow-lg"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <h1 className="text-5xl sm:text-6xl font-bold mb-6 text-dark">
            Hello! I&apos;m Gala,
          </h1>
          <p className="text-2xl sm:text-3xl text-dark">
            web3 frontend developer and privacy advocate
          </p>
        </motion.div>
      </div>
    </section>
  );
}
