import React from 'react';

export default function AboutSection() {
  return (
    <section id="about" className="min-h-screen p-8 sm:p-20">
      <h1 className="mb-8 text-4xl font-bold">About Me</h1>
      <div className="max-w-3xl space-y-8">
        <section>
          <h2 className="mb-4 text-2xl font-semibold">Introduction</h2>
          <p className="text-gray-600 dark:text-gray-300">
            Hello! I&apos;m a passionate developer with a love for creating
            elegant solutions to complex problems. I specialize in web
            development and enjoy working with modern technologies.
          </p>
        </section>

        <section>
          <h2 className="mb-4 text-2xl font-semibold">Skills</h2>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
            <div className="rounded-lg bg-black/[.05] p-4 dark:bg-white/[.06]">
              <h3 className="mb-2 font-semibold">Frontend</h3>
              <ul className="space-y-1 text-sm text-gray-600 dark:text-gray-300">
                <li>React</li>
                <li>Next.js</li>
                <li>TypeScript</li>
                <li>Tailwind CSS</li>
              </ul>
            </div>
            <div className="rounded-lg bg-black/[.05] p-4 dark:bg-white/[.06]">
              <h3 className="mb-2 font-semibold">Backend</h3>
              <ul className="space-y-1 text-sm text-gray-600 dark:text-gray-300">
                <li>Node.js</li>
                <li>Express</li>
                <li>PostgreSQL</li>
                <li>MongoDB</li>
              </ul>
            </div>
            <div className="rounded-lg bg-black/[.05] p-4 dark:bg-white/[.06]">
              <h3 className="mb-2 font-semibold">Tools</h3>
              <ul className="space-y-1 text-sm text-gray-600 dark:text-gray-300">
                <li>Git</li>
                <li>Docker</li>
                <li>AWS</li>
                <li>CI/CD</li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <h2 className="mb-4 text-2xl font-semibold">Experience</h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-semibold">Senior Developer - Tech Company</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                2020 - Present
              </p>
              <p className="mt-2 text-gray-600 dark:text-gray-300">
                Led development of multiple web applications using React and
                Node.js. Implemented CI/CD pipelines and mentored junior
                developers.
              </p>
            </div>
            <div>
              <h3 className="font-semibold">Full Stack Developer - Startup</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                2018 - 2020
              </p>
              <p className="mt-2 text-gray-600 dark:text-gray-300">
                Developed and maintained various web applications. Worked
                closely with design team to implement responsive UI/UX.
              </p>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}
