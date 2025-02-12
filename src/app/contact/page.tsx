import React from 'react';
import Navigation from '@/components/navigation/DesktopNavigation';

export default function Contact() {
  return (
    <div className="min-h-screen p-8 sm:p-20">
      <Navigation />
      <h1 className="text-4xl font-bold mb-8">Contact Me</h1>
      <div className="max-w-2xl space-y-8">
        <section>
          <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            I'm always open to new opportunities and collaborations. Feel free
            to reach out!
          </p>
          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-1">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full px-4 py-2 rounded-lg border border-black/[.08] dark:border-white/[.145] bg-transparent focus:outline-none focus:ring-2 focus:ring-black/[.12] dark:focus:ring-white/[.24]"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full px-4 py-2 rounded-lg border border-black/[.08] dark:border-white/[.145] bg-transparent focus:outline-none focus:ring-2 focus:ring-black/[.12] dark:focus:ring-white/[.24]"
                required
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium mb-1"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className="w-full px-4 py-2 rounded-lg border border-black/[.08] dark:border-white/[.145] bg-transparent focus:outline-none focus:ring-2 focus:ring-black/[.12] dark:focus:ring-white/[.24]"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full sm:w-auto px-6 py-3 rounded-full bg-foreground text-background hover:bg-[#383838] dark:hover:bg-[#ccc] transition-colors"
            >
              Send Message
            </button>
          </form>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Connect</h2>
          <div className="flex gap-4">
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-black/[.05] dark:bg-white/[.06] hover:bg-black/[.08] dark:hover:bg-white/[.12] transition-colors"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-black/[.05] dark:bg-white/[.06] hover:bg-black/[.08] dark:hover:bg-white/[.12] transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="https://twitter.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-black/[.05] dark:bg-white/[.06] hover:bg-black/[.08] dark:hover:bg-white/[.12] transition-colors"
            >
              Twitter
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}
