import React from 'react';
import Navigation from '@/components/navigation/DesktopNavigation';

export default function Projects() {
  return (
    <div className="min-h-screen p-8 sm:p-20">
      <Navigation />
      <h1 className="mb-8 text-4xl font-bold">Projects</h1>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {/* Project cards will be added here */}
        <div className="rounded-lg border border-black/[.08] p-6 transition-all hover:border-transparent hover:shadow-lg dark:border-white/[.145]">
          <h2 className="mb-4 text-xl font-semibold">Project Title</h2>
          <p className="mb-4 text-gray-600 dark:text-gray-300">
            Project description goes here. This is a brief overview of what the
            project is about.
          </p>
          <div className="flex flex-wrap gap-2">
            <span className="rounded-full bg-black/[.05] px-3 py-1 text-sm dark:bg-white/[.06]">
              React
            </span>
            <span className="rounded-full bg-black/[.05] px-3 py-1 text-sm dark:bg-white/[.06]">
              Next.js
            </span>
            <span className="rounded-full bg-black/[.05] px-3 py-1 text-sm dark:bg-white/[.06]">
              TypeScript
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
