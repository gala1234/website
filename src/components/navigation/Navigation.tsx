'use client';

import React, { useState } from 'react';

import DesktopNavigation from './DesktopNavigation';
import MobileNavigation from './MobileNavigation';
import type { NavLink } from '../../constants/navigation';
import { sections } from '../../constants/navigation';

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
