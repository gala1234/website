export default function DesktopNavigation() {
  return (
    <>
      <nav className="hidden md:flex fixed top-0 right-8 h-screen w-16 flex-col items-center justify-center gap-8 z-50">
      <a
          href=""
          className="p-3 rounded-full bg-black/[.08] dark:bg-white/[.12] hover:bg-black/[.12] dark:hover:bg-white/[.16] transition-colors text-black dark:text-white font-medium backdrop-blur-sm"
        >
          Top
        </a>
        <a
          href="#projects"
          className="p-3 rounded-full bg-black/[.08] dark:bg-white/[.12] hover:bg-black/[.12] dark:hover:bg-white/[.16] transition-colors text-black dark:text-white font-medium backdrop-blur-sm"
        >
          Projects
        </a>
        <a
          href="#about"
          className="p-3 rounded-full bg-black/[.08] dark:bg-white/[.12] hover:bg-black/[.12] dark:hover:bg-white/[.16] transition-colors text-black dark:text-white font-medium backdrop-blur-sm"
        >
          About
        </a>
        <a
          href="#contact"
          className="p-3 rounded-full bg-black/[.08] dark:bg-white/[.12] hover:bg-black/[.12] dark:hover:bg-white/[.16] transition-colors text-black dark:text-white font-medium backdrop-blur-sm"
        >
          Contact
        </a>
      </nav>
    </>
  );
}