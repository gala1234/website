"use client"

import React, { useState, useEffect } from 'react';
import GradientButton from '../common/GradientButton';

export default function DesktopNavigation() {
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'projects', 'about', 'contact'];
      // const scrollPosition = window.scrollY;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const getNavItemClass = (section: string) => {
    const baseClass = "p-3 font-bold relative text-black dark:text-white";
    const gradientClass = "hover:bg-gradient-to-r hover:from-[#3f5f66]  hover:via-[#ea8e6a] hover:to-[#53696d] hover:bg-clip-text hover:text-transparent transition-all duration-300";
    return `${baseClass} ${gradientClass} ${activeSection === section ? 'dark:bg-white/[.12]' : 'dark:bg-white/[.06]'}`;
  };

  return (
    <>
      <nav className="hidden md:flex fixed top-0 left-0 right-0 h-16 px-8 flex-row items-center justify-end gap-8 z-50 bg-white/[.8] dark:bg-black/[.8] backdrop-blur-sm">
        <a
          href=""
          className={`${getNavItemClass('hero')}`}
        >
          Top
        </a>
        <a
          href="#projects"
          className={`${getNavItemClass('projects')}`}
        >
          Projects
        </a>
        <a
          href="#about"
          className={`${getNavItemClass('about')}`}
        >
          About
        </a>
        <GradientButton
          secondary
          small
          onClick={() => window.location.href = '#contact'}
        >
          Contact me
        </GradientButton>
      </nav>
    </>
  );
}