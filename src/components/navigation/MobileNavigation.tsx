'use client'

import React, { useState } from 'react';
import GradientButton from '../common/GradientButton';

export default function MobileNavigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Hamburger button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-4 right-4 z-50 p-2 rounded-lg bg-black/[.05] dark:bg-white/[.06] hover:bg-black/[.08] dark:hover:bg-white/[.12] transition-colors md:hidden"
        aria-label="Toggle navigation menu"
      >
        <div className="w-6 h-5 relative flex flex-col justify-between">
          <span className={`w-full h-0.5 bg-current transform transition-transform ${isOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`w-full h-0.5 bg-current transition-opacity ${isOpen ? 'opacity-0' : 'opacity-100'}`} />
          <span className={`w-full h-0.5 bg-current transform transition-transform ${isOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </div>
      </button>

      {/* Mobile navigation panel */}
      <nav
        className={`fixed top-0 right-0 h-full w-64 bg-white dark:bg-gray-900 transform transition-transform duration-300 ease-in-out z-40 md:hidden ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col gap-4 p-8 mt-16">
        <a
            href=""
            className="p-3 rounded-full bg-black/[.05] dark:bg-white/[.06] hover:bg-black/[.08] dark:hover:bg-white/[.12] transition-colors font-medium text-center"
            onClick={() => setIsOpen(false)}
          >
            Top
          </a>
          <a
            href="#projects"
            className="p-3 rounded-full bg-black/[.05] dark:bg-white/[.06] hover:bg-black/[.08] dark:hover:bg-white/[.12] transition-colors font-medium text-center"
            onClick={() => setIsOpen(false)}
          >
            Projects
          </a>
          <a
            href="#about"
            className="p-3 rounded-full bg-black/[.05] dark:bg-white/[.06] hover:bg-black/[.08] dark:hover:bg-white/[.12] transition-colors font-medium text-center"
            onClick={() => setIsOpen(false)}
          >
            About
          </a>
          <GradientButton
            secondary
            small
            onClick={() => {
              setIsOpen(false);
              window.location.href = '#contact';
            }}
          >
            Contact me
          </GradientButton>
        </div>
      </nav>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/20 dark:bg-black/40 z-30 md:hidden"
          onClick={() => setIsOpen(false)}
          aria-hidden="true"
        />
      )}
    </>
  );
}