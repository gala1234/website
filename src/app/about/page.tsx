import React from 'react';

export default function About() {
  return (
    <div className="min-h-screen p-8 sm:p-20">
      <h1 className="text-4xl font-bold mb-8">About Me</h1>
      <div className="max-w-3xl space-y-8">
        <section>
          <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
          <p className="text-gray-600 dark:text-gray-300">
            Hello! I'm a passionate developer with a love for creating elegant solutions to complex problems.
            I specialize in web development and enjoy working with modern technologies.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Skills</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <div className="p-4 rounded-lg bg-black/[.05] dark:bg-white/[.06]">
              <h3 className="font-semibold mb-2">Frontend</h3>
              <ul className="text-sm space-y-1 text-gray-600 dark:text-gray-300">
                <li>React</li>
                <li>Next.js</li>
                <li>TypeScript</li>
                <li>Tailwind CSS</li>
              </ul>
            </div>
            <div className="p-4 rounded-lg bg-black/[.05] dark:bg-white/[.06]">
              <h3 className="font-semibold mb-2">Backend</h3>
              <ul className="text-sm space-y-1 text-gray-600 dark:text-gray-300">
                <li>Node.js</li>
                <li>Express</li>
                <li>PostgreSQL</li>
                <li>MongoDB</li>
              </ul>
            </div>
            <div className="p-4 rounded-lg bg-black/[.05] dark:bg-white/[.06]">
              <h3 className="font-semibold mb-2">Tools</h3>
              <ul className="text-sm space-y-1 text-gray-600 dark:text-gray-300">
                <li>Git</li>
                <li>Docker</li>
                <li>AWS</li>
                <li>CI/CD</li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Experience</h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-semibold">Senior Developer - Tech Company</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">2020 - Present</p>
              <p className="mt-2 text-gray-600 dark:text-gray-300">
                Led development of multiple web applications using React and Node.js.
                Implemented CI/CD pipelines and mentored junior developers.
              </p>
            </div>
            <div>
              <h3 className="font-semibold">Full Stack Developer - Startup</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">2018 - 2020</p>
              <p className="mt-2 text-gray-600 dark:text-gray-300">
                Developed and maintained various web applications.
                Worked closely with design team to implement responsive UI/UX.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}