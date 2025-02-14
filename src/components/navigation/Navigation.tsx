'use client';

import React, { useState, useEffect } from 'react';

import DesktopNavigation from './DesktopNavigation';
import MobileNavigation from './MobileNavigation';
import type { NavLink } from '../../constants/navigation';
import { sections } from '../../constants/navigation';

export default function Navigation() {
  const [activeSection, setActiveSection] = useState<NavLink>(sections[0]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      // Find the section that is currently in view
      const currentSection = sections.find((section) => {
        // Use body element for the top section, otherwise use the section link
        const element =
          section.link === '#'
            ? document.body
            : document.querySelector(section.link);
        if (!element) return false;

        const rect = element.getBoundingClientRect();
        const absoluteTop = window.scrollY + rect.top;
        const absoluteBottom = absoluteTop + rect.height;

        return (
          scrollPosition >= absoluteTop && scrollPosition <= absoluteBottom
        );
      });

      if (currentSection && currentSection !== activeSection) {
        setActiveSection(currentSection);
      }
    };

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);
    // Initial check
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeSection]);

  return (
    <>
      <DesktopNavigation
        // setActiveSection={setActiveSection}
        activeSection={activeSection}
      />
      <MobileNavigation
        setActiveSection={setActiveSection}
        activeSection={activeSection}
      />
    </>
  );
}
