'use client';

import React, { useState, useCallback } from 'react';
import GradientButton from '../common/GradientButton';
import ThemeToggle from '../common/ThemeToggle';
import HamburgerButton from '../common/HamburgerButton';
import type { NavLink } from './constant';
import { sections } from './constant';

export default function MobileNavigation({
  setActiveSection,
  activeSection,
}: {
  setActiveSection: (section: NavLink) => void;
  activeSection: NavLink;
}) {
  const [isOpen, setIsOpen] = useState(false);

  const getNavItemClass = useCallback(
    (section: string) => {
      const baseClass =
        'rounded-full p-3 text-center font-bold transition-colors';
      return activeSection.name === section
        ? 'text-[var(--text-accent)] ' + baseClass
        : 'text-[var(--text-primary)] hover:text-[var(--text-hover)] ' +
            baseClass;
    },
    [activeSection]
  );

  return (
    <>
      {/* Hamburger button */}
      <HamburgerButton isOpen={isOpen} toggleMenu={() => setIsOpen(!isOpen)} />

      {/* Mobile navigation panel */}
      <nav
        className={`fixed top-0 right-0 z-40 h-full w-64 transform bg-[var(--bg-primary)] transition-transform duration-300 ease-in-out md:hidden  ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <div className="mt-16 flex flex-col gap-4 p-8">
          {sections.map((section) => (
            <a
              key={section.name}
              href={section.link}
              className={getNavItemClass(section.name)}
              onClick={() => {
                setActiveSection(section);
                setIsOpen(false);
              }}
            >
              {section.name}
            </a>
          ))}

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
