'use client';

import React from 'react';
import GradientButton from '../common/GradientButton';
import { useLanguage } from '@/providers/LanguageProvider';
import { contactContent } from '@/constants/contact';
import SectionHeader from '../texts/SectionHeader';
import SectionSubHeader from '../texts/SectionSubHeader';

export default function ContactSection() {
  const { language } = useLanguage();
  const content = contactContent[language];

  return (
    <section id="contact" className="min-h-screen p-8 sm:p-20">
      <SectionHeader title={content.title} />
      <div className="max-w-2xl space-y-8">
        <section>
          <SectionSubHeader title={content.subtitle} />
          <p className="mb-6 text-gray-600 dark:text-gray-300">
            {content.description}
          </p>
          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="mb-1 block text-sm font-medium">
                {content.form.name.label}
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder={content.form.name.placeholder}
                className={`w-full rounded-lg border border-black/[.08] bg-transparent px-4 py-2 focus:ring-2 focus:ring-black/[.12] focus:outline-none dark:border-white/[.145] dark:focus:ring-white/[.24]`}
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="mb-1 block text-sm font-medium">
                {content.form.email.label}
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder={content.form.email.placeholder}
                className={`w-full rounded-lg border border-black/[.08] bg-transparent px-4 py-2 focus:ring-2 focus:ring-black/[.12] focus:outline-none dark:border-white/[.145] dark:focus:ring-white/[.24]`}
                required
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="mb-1 block text-sm font-medium"
              >
                {content.form.message.label}
              </label>
              <textarea
                id="message"
                name="message"
                placeholder={content.form.message.placeholder}
                rows={4}
                className={`w-full rounded-lg border border-black/[.08] bg-transparent px-4 py-2 focus:ring-2 focus:ring-black/[.12] focus:outline-none dark:border-white/[.145] dark:focus:ring-white/[.24]`}
                required
              ></textarea>
            </div>
            <GradientButton
              type="submit"
              onClick={() => console.log('sending...')}
            >
              {content.form.submit}
            </GradientButton>
          </form>
        </section>

        <section>
          <h2 className="mb-4 text-2xl font-semibold">{content.rrss.title}</h2>
          <div className="flex gap-4">
            <a
              href="https://github.com/gala1234"
              target="_blank"
              rel="noopener noreferrer"
              className={`rounded-full bg-black/[.05] p-3 transition-colors hover:bg-black/[.08] dark:bg-white/[.06] dark:hover:bg-white/[.12]`}
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/galadriel-calero"
              target="_blank"
              rel="noopener noreferrer"
              className={`rounded-full bg-black/[.05] p-3 transition-colors hover:bg-black/[.08] dark:bg-white/[.06] dark:hover:bg-white/[.12]`}
            >
              LinkedIn
            </a>
          </div>
        </section>
      </div>
    </section>
  );
}
