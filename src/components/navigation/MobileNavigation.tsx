'use client';

import React, { useState } from 'react';
import GradientButton from '../common/GradientButton';

export default function MobileNavigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Hamburger button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed top-4 right-4 z-50 rounded-lg bg-black/[.05] p-2 transition-colors hover:bg-black/[.08] md:hidden dark:bg-white/[.06] dark:hover:bg-white/[.12]`}
        aria-label="Toggle navigation menu"
      >
        <div className="relative flex h-5 w-6 flex-col justify-between">
          <span
            className={`h-0.5 w-full transform bg-current transition-transform ${isOpen ? 'translate-y-2 rotate-45' : ''} `}
          />
          <span
            className={`h-0.5 w-full bg-current transition-opacity ${isOpen ? 'opacity-0' : 'opacity-100'} `}
          />
          <span
            className={`h-0.5 w-full transform bg-current transition-transform ${isOpen ? '-translate-y-2 -rotate-45' : ''} `}
          />
        </div>
      </button>

      {/* Mobile navigation panel */}
      <nav
        className={`fixed top-0 right-0 z-40 h-full w-64 transform bg-white transition-transform duration-300 ease-in-out md:hidden dark:bg-gray-900 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <div className="mt-16 flex flex-col gap-4 p-8">
          <a
            href=""
            className={`rounded-full bg-black/[.05] p-3 text-center font-medium transition-colors hover:bg-black/[.08] dark:bg-white/[.06] dark:hover:bg-white/[.12]`}
            onClick={() => setIsOpen(false)}
          >
            Top
          </a>
          <a
            href="#projects"
            className={`rounded-full bg-black/[.05] p-3 text-center font-medium transition-colors hover:bg-black/[.08] dark:bg-white/[.06] dark:hover:bg-white/[.12]`}
            onClick={() => setIsOpen(false)}
          >
            Projects
          </a>
          <a
            href="#about"
            className={`rounded-full bg-black/[.05] p-3 text-center font-medium transition-colors hover:bg-black/[.08] dark:bg-white/[.06] dark:hover:bg-white/[.12]`}
            onClick={() => setIsOpen(false)}
          >
            About
          </a>
          <GradientButton
            secondary
            small
            dark
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
          className={`fixed inset-0 z-30 bg-black/20 md:hidden dark:bg-black/40`}
          onClick={() => setIsOpen(false)}
          aria-hidden="true"
        />
      )}
    </>
  );
}
