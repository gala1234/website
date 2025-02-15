'use client';

import React, { useState, useEffect } from 'react';

import DesktopNavigation from './DesktopNavigation';
import MobileNavigation from './MobileNavigation';
import type { NavLink } from '../../constants/navigation';
import { navigationLinks, sectionsIds } from '../../constants/navigation';

export default function Navigation() {
  const [activeSection, setActiveSection] = useState<NavLink>(
    navigationLinks[0]
  );

  useEffect(() => {
    const handleScroll = () => {
      for (const section of sectionsIds) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (
            rect.top <= window.innerHeight / 2 &&
            rect.bottom >= window.innerHeight / 2
          ) {
            const link = navigationLinks.find((link) => link.id === section)!;
            link && setActiveSection(link);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <DesktopNavigation activeSection={activeSection} />
      <MobileNavigation activeSection={activeSection} />
    </>
  );
}
