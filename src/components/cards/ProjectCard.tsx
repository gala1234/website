'use client';

import React from 'react';
import Image from 'next/image';

interface ProjectCardProps {
  title: string;
  description: string[];
  technologies: string[];
  link: string;
  image: string;
}

export default function ProjectCard({
  title,
  description,
  technologies,
  link,
  image,
}: ProjectCardProps) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="block rounded-lg bg-gentle-gradient p-6 transition-all hover:shadow-lg"
    >
      <div className="mb-4 overflow-hidden rounded-lg">
        <Image
          src={image}
          alt={title}
          width={800}
          height={400}
          className="h-48 w-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>
      <div className="mx-auto max-w-[800px]">
        <div className="mb-4 flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-full bg-glow-gradient px-3 py-1 text-sm text-secondary-darker hover:text-primary"
            >
              {tech}
            </span>
          ))}
        </div>
        <h2 className="mb-4 text-xl font-semibold text-primary">{title}</h2>
        <ul className="mb-4 list-disc space-y-2 pl-5">
          {description.map((item, index) => (
            <li key={index} className="text-secondary">
              {item}
            </li>
          ))}
        </ul>
      </div>
    </a>
  );
}
