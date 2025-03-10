'use client';

import React, { useState, useCallback } from 'react';
import { useLanguage } from '@/providers/LanguageProvider';
import LanguageSelector from '../common/LanguageSelector';
import GradientButton from '../common/GradientButton';
import ThemeToggle from '../common/ThemeToggle';
import HamburgerButton from '../common/HamburgerButton';
import type { NavLink } from '../../constants/navigation';
import { navigationLinks } from '../../constants/navigation';
import { buttons } from '../../constants/common';

export default function MobileNavigation({
  activeSection,
}: {
  activeSection: NavLink;
}) {
  const { language } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const displayLinks = navigationLinks.slice(0, -1);

  const getNavItemClass = useCallback(
    (section: string) => {
      const baseClass =
        'rounded-full p-3 text-center font-bold transition-colors';
      return activeSection.name[language] === section
        ? 'text-[var(--text-accent)] ' + baseClass
        : 'text-[var(--text-primary)] hover:text-[var(--text-hover)] ' +
            baseClass;
    },
    [activeSection, language]
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
          {displayLinks.map((section) => (
            <a
              key={section.name[language]}
              href={section.link}
              className={getNavItemClass(section.name[language])}
              onClick={() => {
                setIsOpen(false);
              }}
            >
              {section.name[language]}
            </a>
          ))}

          <GradientButton
            secondary
            small
            onClick={() => {
              setIsOpen(false);
              window.location.href = buttons.contactMe.link;
            }}
          >
            {buttons.contactMe.name[language]}
          </GradientButton>
          <div className="mt-auto flex justify-between pb-8">
            <ThemeToggle />
            <LanguageSelector />
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
