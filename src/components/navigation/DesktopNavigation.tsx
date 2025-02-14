'use client';

import { useCallback } from 'react';
import GradientButton from '../common/GradientButton';
import ThemeToggle from '../common/ThemeToggle';
import type { NavLink } from './constant';
import { sections } from './constant';

export default function DesktopNavigation({
  setActiveSection,
  activeSection,
}: {
  setActiveSection: (section: NavLink) => void;
  activeSection: NavLink;
}) {
  const getNavItemClass = useCallback(
    (section: string) => {
      const baseClass = 'p-3 font-bold relative';
      const textClass =
        activeSection.name === section
          ? 'text-[var(--text-accent)]'
          : 'text-[var(--text-primary)] hover:text-[var(--text-hover)]';
      return `${baseClass} ${textClass} transition-all duration-300`;
    },
    [activeSection]
  );

  return (
    <>
      <nav
        className={`
          fixed top-0 right-0 left-0 z-50
          hidden h-16 md:flex flex-row items-center justify-between
          bg-[var(--bg-primary)]/[.8] px-8
          backdrop-blur-sm
        `}
      >
        <div className="flex items-center">
          <ThemeToggle />
        </div>
        <div className="flex items-center gap-8">
          {sections.map((section, i) => (
            <a
              key={section.name}
              href={`#${section.link}`}
              className={`${getNavItemClass(section.name)}`}
              onClick={() => setActiveSection(section)}
            >
              {section.name}
            </a>
          ))}
          <GradientButton
            secondary
            small
            onClick={() => (window.location.href = '#contact')}
          >
            Contact me
          </GradientButton>
        </div>
      </nav>
    </>
  );
}
