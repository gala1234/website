'use client';

import React, { useState, useEffect } from 'react';
import GradientButton from '../common/GradientButton';
import ThemeToggle from '../common/ThemeToggle';

export default function DesktopNavigation() {
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'projects', 'about', 'contact'];

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (
            rect.top <= window.innerHeight / 2 &&
            rect.bottom >= window.innerHeight / 2
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const getNavItemClass = (section: string) => {
    const baseClass = 'p-3 font-bold relative';
    const textClass =
      activeSection === section
        ? 'text-[var(--text-accent)]'
        : 'text-[var(--text-primary)] hover:text-[var(--text-hover)]';
    return `${baseClass} ${textClass} transition-all duration-300`;
  };

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
          <a href="" className={`${getNavItemClass('hero')}`}>
            Top
          </a>
          <a href="#projects" className={`${getNavItemClass('projects')}`}>
            Projects
          </a>
          <a href="#about" className={`${getNavItemClass('about')}`}>
            About
          </a>
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
