'use client';

import React from 'react';
import GradientButton from '../common/GradientButton';
import { useLanguage } from '@/providers/LanguageProvider';
import { projectsContent } from '@/constants/projects';
import { buttons } from '@/constants/common';
import SectionHeader from '../texts/SectionHeader';
import ProjectCard from '../cards/ProjectCard';

export default function ProjectsSection() {
  const { language } = useLanguage();
  const content = projectsContent[language];

  return (
    <section id="projects" className="min-h-screen p-8 sm:p-20">
      <SectionHeader title={content.title} />
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {content.projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            technologies={project.technologies}
          />
        ))}
      </div>
      <GradientButton secondary>
        {buttons.contactMe.name[language]}
      </GradientButton>
    </section>
  );
}
