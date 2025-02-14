'use client';

import React from 'react';
import GradientButton from './common/GradientButton';
import { useLanguage } from '@/providers/LanguageProvider';
import { projectsContent } from '@/constants/projects';
import { buttons } from '@/constants/common';

export default function ProjectsSection() {
  const { language } = useLanguage();
  const content = projectsContent[language];

  return (
    <section id="projects" className="min-h-screen p-8 sm:p-20">
      <h1 className="mb-8 text-4xl font-bold">{content.title}</h1>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {content.projects.map((project, index) => (
          <div
            key={index}
            className="rounded-lg border border-black/[.08] p-6 transition-all hover:border-transparent hover:shadow-lg dark:border-white/[.145]"
          >
            <h2 className="mb-4 text-xl font-semibold">{project.title}</h2>
            <p className="mb-4 text-gray-600 dark:text-gray-300">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full bg-black/[.05] px-3 py-1 text-sm dark:bg-white/[.06]"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
      <GradientButton secondary>
        {buttons.contactMe.name[language]}
      </GradientButton>
    </section>
  );
}
