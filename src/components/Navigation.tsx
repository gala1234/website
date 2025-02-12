import Link from "next/link";
import MobileNavigation from './MobileNavigation';

export default function Navigation() {
  return (
    <>
      <nav className="hidden md:flex fixed top-0 right-0 h-screen w-16 flex-col items-center justify-center gap-8 z-50">
        <a
          href="#projects"
          className="p-3 rounded-full bg-black/[.05] dark:bg-white/[.06] hover:bg-black/[.08] dark:hover:bg-white/[.12] transition-colors"
        >
          Projects
        </a>
        <a
          href="#about"
          className="p-3 rounded-full bg-black/[.05] dark:bg-white/[.06] hover:bg-black/[.08] dark:hover:bg-white/[.12] transition-colors"
        >
          About
        </a>
        <a
          href="#contact"
          className="p-3 rounded-full bg-black/[.05] dark:bg-white/[.06] hover:bg-black/[.08] dark:hover:bg-white/[.12] transition-colors"
        >
          Contact
        </a>
      </nav>
      <MobileNavigation />
    </>
  );
}