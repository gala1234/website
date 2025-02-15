'use client';

import React from 'react';

interface ProjectCardProps {
  title: string;
  description: string[];
  technologies: string[];
}

export default function ProjectCard({
  title,
  description,
  technologies,
}: ProjectCardProps) {
  return (
    <div className="rounded-lg border border-black/[.08] p-6 transition-all hover:border-transparent hover:shadow-lg dark:border-white/[.145]">
      <h2 className="mb-4 text-xl font-semibold">{title}</h2>
      {description.map((paragraph, index) => (
        <p key={index} className="mb-4 text-gray-600 dark:text-gray-300">
          {paragraph}
        </p>
      ))}
      <div className="flex flex-wrap gap-2">
        {technologies.map((tech) => (
          <span
            key={tech}
            className="rounded-full bg-black/[.05] px-3 py-1 text-sm dark:bg-white/[.06]"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}
