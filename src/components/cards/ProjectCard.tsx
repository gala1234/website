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
            className="rounded-full bg-glow-gradient px-3 py-1 text-sm text-secondary-darker hover:text-primary"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}
