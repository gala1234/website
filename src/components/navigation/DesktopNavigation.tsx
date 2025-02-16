'use client';

import { useCallback } from 'react';
import { useLanguage } from '@/providers/LanguageProvider';
import GradientButton from '../common/GradientButton';
import ThemeToggle from '../common/ThemeToggle';
import LanguageSelector from '../common/LanguageSelector';
import type { NavLink } from '../../constants/navigation';
import { navigationLinks } from '../../constants/navigation';
import { buttons } from '../../constants/common';

export default function DesktopNavigation({
  activeSection,
}: {
  activeSection: NavLink;
}) {
  const { language } = useLanguage();
  const displayLinks = navigationLinks.slice(0, -1);

  const getNavItemClass = useCallback(
    (section: string) => {
      const baseClass = 'p-3 font-bold relative';
      const textClass =
        activeSection.name[language] === section
          ? 'text-[var(--text-accent)]'
          : 'text-[var(--text-primary)] hover:text-[var(--text-hover)]';
      return `${baseClass} ${textClass} transition-all duration-300`;
    },
    [activeSection, language]
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
        <div className="flex items-center gap-4">
          <ThemeToggle />
          <LanguageSelector />
        </div>
        <div className="flex items-center gap-8">
          {displayLinks?.map((section, i) => (
            <a
              key={section.name[language]}
              href={section.link}
              className={`${getNavItemClass(section.name[language])}`}
            >
              {section.name[language]}
            </a>
          ))}
          <GradientButton
            secondary
            small
            onClick={() => (window.location.href = buttons.contactMe.link)}
          >
            {buttons.contactMe.name[language]}
          </GradientButton>
        </div>
      </nav>
    </>
  );
}
