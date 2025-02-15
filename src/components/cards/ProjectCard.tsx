'use client';

import React from 'react';
import Image from 'next/image';
import { motion, useReducedMotion } from 'framer-motion';

type ProjectCardProps = {
  title: string;
  description: string;
  technologies: string[];
  link: string;
  image: string;
};

export default function ProjectCard({
  title,
  description,
  technologies,
  link,
  image,
}: ProjectCardProps) {
  const prefersReducedMotion = useReducedMotion();

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
    hover: { scale: 1.02 },
  };

  const imageVariants = {
    hidden: { scale: 1.1 },
    visible: { scale: 1.1 },
    hover: { scale: 1.15 },
  };

  return (
    <motion.a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      whileHover={prefersReducedMotion ? undefined : 'hover'}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="group relative block overflow-hidden rounded-xl bg-white/80 shadow-lg transition-all dark:bg-black/[.8]"
    >
      <motion.div
        variants={imageVariants}
        initial="hidden"
        animate="visible"
        whileHover={prefersReducedMotion ? undefined : 'hover'}
        transition={{ duration: 0.4 }}
        className="relative h-48 w-full overflow-hidden"
      >
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </motion.div>

      <div className="p-6">
        <motion.h3
          initial={{ opacity: 0.8 }}
          whileHover={prefersReducedMotion ? undefined : { opacity: 1 }}
          className="mb-2 text-xl font-bold"
        >
          {title}
        </motion.h3>
        <p className="mb-4 text-gray-600 dark:text-gray-300">{description}</p>
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <motion.span
              key={tech}
              initial={{ opacity: 0.8 }}
              whileHover={
                prefersReducedMotion ? undefined : { opacity: 1, scale: 1.05 }
              }
              className="rounded-full bg-black/[.05] px-3 py-1 text-sm dark:bg-white/[.06]"
            >
              {tech}
            </motion.span>
          ))}
        </div>
      </div>
    </motion.a>
  );
}
