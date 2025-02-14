'use client';

import React, { useState } from 'react';
import { useLanguage } from '@/providers/LanguageProvider';

import DesktopNavigation from './DesktopNavigation';
import MobileNavigation from './MobileNavigation';
import type { NavLink } from './constant';
import { sections } from './constant';

export default function Navigation() {
  const [activeSection, setActiveSection] = useState<NavLink>(sections[0]);

  return (
    <>
      <DesktopNavigation
        setActiveSection={setActiveSection}
        activeSection={activeSection}
      />
      <MobileNavigation
        setActiveSection={setActiveSection}
        activeSection={activeSection}
      />
    </>
  );
}
