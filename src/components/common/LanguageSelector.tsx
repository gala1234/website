'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../../providers/LanguageProvider';

type Language = 'en' | 'es';

interface LanguageSelectorProps {
  currentLanguage: Language;
  onLanguageChange: (language: Language) => void;
}

export default function LanguageSelector() {
  const [isOpen, setIsOpen] = useState(false);
  const { language: currentLanguage, setLanguage } = useLanguage();

  const languages: { [key in Language]: string } = {
    en: 'English',
    es: 'Español',
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 rounded-lg bg-black/[.05] px-3 py-2 text-sm font-medium transition-colors hover:bg-black/[.08] dark:bg-white/[.06] dark:hover:bg-white/[.12]"
      >
        <span>{languages[currentLanguage]}</span>
        <motion.svg
          width="12"
          height="12"
          viewBox="0 0 12 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <path
            d="M2.5 4.5L6 8L9.5 4.5"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </motion.svg>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute right-0 mt-2 w-32 rounded-lg border border-black/[.08] bg-[var(--bg-primary)] p-1 shadow-lg dark:border-white/[.145]"
          >
            {Object.entries(languages).map(([code, name]) => (
              <button
                key={code}
                onClick={() => {
                  setLanguage(code as Language);
                  setIsOpen(false);
                }}
                className={`w-full rounded-md px-3 py-2 text-left text-sm transition-colors ${
                  currentLanguage === code
                    ? 'bg-black/[.05] font-medium dark:bg-white/[.06]'
                    : 'hover:bg-black/[.05] dark:hover:bg-white/[.06]'
                }`}
              >
                {name}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
