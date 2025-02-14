import { FC } from 'react';
import { motion } from 'framer-motion';

interface HamburgerButtonProps {
  isOpen: boolean;
  toggleMenu: () => void;
}

const HamburgerButton: FC<HamburgerButtonProps> = ({ isOpen, toggleMenu }) => {
  return (
    <button
      onClick={toggleMenu}
      className="fixed top-4 right-4 z-50 flex items-center justify-center w-12 h-12 rounded-lg bg-[var(--bg-primary)] text-[var(--text-secondary)] transition-colors hover:bg-black/[.08] dark:bg-white/[.06] dark:hover:bg-white/[.12] md:hidden"
      aria-label="Toggle navigation menu"
    >
      <motion.div
        className="relative flex flex-col items-center justify-between w-6 h-5"
        initial={false}
        animate={isOpen ? 'open' : 'closed'}
      >
        <motion.span
          className="block w-full h-0.5 bg-current"
          variants={{
            closed: { rotate: 0, y: 0 },
            open: { rotate: 45, y: 9 },
          }}
          transition={{ duration: 0.3 }}
        />
        <motion.span
          className="block w-full h-0.5 bg-current"
          variants={{
            closed: { opacity: 1 },
            open: { opacity: 0 },
          }}
          transition={{ duration: 0.3 }}
        />
        <motion.span
          className="block w-full h-0.5 bg-current"
          variants={{
            closed: { rotate: 0, y: 0 },
            open: { rotate: -45, y: -9 },
          }}
          transition={{ duration: 0.3 }}
        />
      </motion.div>
    </button>
  );
};

export default HamburgerButton;
