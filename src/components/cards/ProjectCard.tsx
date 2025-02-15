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
    <div className="rounded-lg bg-gentle-gradient p-6 transition-all hover:shadow-lg">
      <h2 className="mb-4 text-xl font-semibold text-primary">{title}</h2>
      {description.map((paragraph, index) => (
        <p key={index} className="mb-4 text-secondary">
          {paragraph}
        </p>
      ))}
      <div className="flex flex-wrap gap-2">
        {technologies.map((tech) => (
          <span
            key={tech}
            className="rounded-full bg-gradient-to-r from-blue-50 to-purple-50 px-3 py-1 text-sm text-gray-700 hover:from-blue-100 hover:to-purple-100 dark:from-blue-900/20 dark:to-purple-900/20 dark:text-gray-300 dark:hover:from-blue-900/30 dark:hover:to-purple-900/30"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}
