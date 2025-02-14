'use client';

import React, { useState } from 'react';
import GradientButton from '../common/GradientButton';
import ThemeToggle from '../common/ThemeToggle';
import HamburgerButton from '../common/HamburgerButton';

export default function MobileNavigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Hamburger button */}
      <HamburgerButton isOpen={isOpen} toggleMenu={() => setIsOpen(!isOpen)} />

      {/* Mobile navigation panel */}
      <nav
        className={`fixed top-0 right-0 z-40 h-full w-64 transform bg-[var(--text-primary)] transition-transform duration-300 ease-in-out md:hidden  ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <div className="mt-16 flex flex-col gap-4 p-8">
          <a
            href=""
            className={`text-[var(--bg-primary)] rounded-full p-3 text-center font-medium transition-colors hover:text-[var(--text-hover)]`}
            onClick={() => setIsOpen(false)}
          >
            Top
          </a>
          <a
            href="#projects"
            className={`text-[var(--bg-primary)] rounded-full p-3 text-center font-medium transition-colors hover:text-[var(--text-hover)]`}
            onClick={() => setIsOpen(false)}
          >
            Projects
          </a>
          <a
            href="#about"
            className={`text-[var(--bg-primary)] rounded-full p-3 text-center font-medium transition-colors hover:text-[var(--text-hover)]`}
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
          <div className="mt-auto flex justify-center pb-8">
            <ThemeToggle />
          </div>
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
