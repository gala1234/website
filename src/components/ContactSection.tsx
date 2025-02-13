'use client';

import React from 'react';
import GradientButton from './common/GradientButton';

export default function ContactSection() {
  return (
    <section id="contact" className="min-h-screen p-8 sm:p-20">
      <h1 className="mb-8 text-4xl font-bold">Contact Me</h1>
      <div className="max-w-2xl space-y-8">
        <section>
          <h2 className="mb-4 text-2xl font-semibold">Get in Touch</h2>
          <p className="mb-6 text-gray-600 dark:text-gray-300">
            I&apos;m always open to new opportunities and collaborations. to
            reach out!
          </p>
          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="mb-1 block text-sm font-medium">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className={`w-full rounded-lg border border-black/[.08] bg-transparent px-4 py-2 focus:ring-2 focus:ring-black/[.12] focus:outline-none dark:border-white/[.145] dark:focus:ring-white/[.24]`}
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="mb-1 block text-sm font-medium">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className={`w-full rounded-lg border border-black/[.08] bg-transparent px-4 py-2 focus:ring-2 focus:ring-black/[.12] focus:outline-none dark:border-white/[.145] dark:focus:ring-white/[.24]`}
                required
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="mb-1 block text-sm font-medium"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className={`w-full rounded-lg border border-black/[.08] bg-transparent px-4 py-2 focus:ring-2 focus:ring-black/[.12] focus:outline-none dark:border-white/[.145] dark:focus:ring-white/[.24]`}
                required
              ></textarea>
            </div>
            <GradientButton
              type="submit"
              onClick={() => console.log('sending...')}
            >
              Send Message
            </GradientButton>
          </form>
        </section>

        <section>
          <h2 className="mb-4 text-2xl font-semibold">Connect</h2>
          <div className="flex gap-4">
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className={`rounded-full bg-black/[.05] p-3 transition-colors hover:bg-black/[.08] dark:bg-white/[.06] dark:hover:bg-white/[.12]`}
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className={`rounded-full bg-black/[.05] p-3 transition-colors hover:bg-black/[.08] dark:bg-white/[.06] dark:hover:bg-white/[.12]`}
            >
              LinkedIn
            </a>
            <a
              href="https://twitter.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className={`rounded-full bg-black/[.05] p-3 transition-colors hover:bg-black/[.08] dark:bg-white/[.06] dark:hover:bg-white/[.12]`}
            >
              Twitter
            </a>
          </div>
        </section>
      </div>
    </section>
  );
}
