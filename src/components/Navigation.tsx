import Link from "next/link";

export default function Navigation() {
  return (
    <nav className="fixed right-8 top-1/2 -translate-y-1/2 flex flex-col gap-4 z-10">
      <Link
        href="/"
        className="p-3 rounded-full bg-black/[.05] dark:bg-white/[.06] hover:bg-black/[.08] dark:hover:bg-white/[.12] transition-colors font-medium"
      >
        Home
      </Link>
      <Link
        href="/projects"
        className="p-3 rounded-full bg-black/[.05] dark:bg-white/[.06] hover:bg-black/[.08] dark:hover:bg-white/[.12] transition-colors font-medium"
      >
        Projects
      </Link>
      <Link
        href="/about"
        className="p-3 rounded-full bg-black/[.05] dark:bg-white/[.06] hover:bg-black/[.08] dark:hover:bg-white/[.12] transition-colors font-medium"
      >
        About
      </Link>
      <Link
        href="/contact"
        className="p-3 rounded-full bg-black/[.05] dark:bg-white/[.06] hover:bg-black/[.08] dark:hover:bg-white/[.12] transition-colors font-medium"
      >
        Contact
      </Link>
    </nav>
  );
}