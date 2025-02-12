import React from 'react';
import Navigation from '@/components/navigation/DesktopNavigation';

export default function Projects() {
  return (
    <div className="min-h-screen p-8 sm:p-20">
      <Navigation />
      <h1 className="text-4xl font-bold mb-8">Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Project cards will be added here */}
        <div className="p-6 rounded-lg border border-black/[.08] dark:border-white/[.145] hover:border-transparent transition-all hover:shadow-lg">
          <h2 className="text-xl font-semibold mb-4">Project Title</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-4">Project description goes here. This is a brief overview of what the project is about.</p>
          <div className="flex gap-2 flex-wrap">
            <span className="px-3 py-1 text-sm rounded-full bg-black/[.05] dark:bg-white/[.06]">React</span>
            <span className="px-3 py-1 text-sm rounded-full bg-black/[.05] dark:bg-white/[.06]">Next.js</span>
            <span className="px-3 py-1 text-sm rounded-full bg-black/[.05] dark:bg-white/[.06]">TypeScript</span>
          </div>
        </div>
      </div>
    </div>
  );
}