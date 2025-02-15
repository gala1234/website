'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useLanguage } from '@/providers/LanguageProvider';
import { imageText } from '@/constants/image';

export default function ImageSection() {
  const { language } = useLanguage();
  const content = imageText[language];

  return (
    <section
      id="imageSection"
      className="relative min-h-screen overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/futuristic_landscape.webp"
          alt="Futuristic sci-fi landscape"
          fill
          priority={false}
          loading="lazy"
          className="object-cover"
        />
        {/* Overlay for better text contrast */}
        <div className="absolute inset-0 bg-white/20 dark:bg-black/[.1]" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex min-h-screen items-center justify-start p-8 sm:p-20">
        <motion.div
          className="text-primary max-w-3xl rounded-lg bg-white/80 dark:bg-black/[.8] p-8 shadow-lg"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <h2 className="mb-6 text-5xl font-bold sm:text-6xl">
            {content.greeting}
          </h2>
          <h3 className="text-2xl sm:text-3xl">{content.role}</h3>
        </motion.div>
      </div>
    </section>
  );
}
