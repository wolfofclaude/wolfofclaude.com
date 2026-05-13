'use client';

import { useEffect, useState } from 'react';
import { Spark } from './Spark';

export function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav
      className={`sticky top-0 z-50 flex items-center justify-between px-5 sm:px-10 py-4 backdrop-blur-md bg-[rgba(242,236,224,0.85)] border-b border-ink/10 transition-shadow duration-300 ${
        scrolled
          ? 'shadow-[0_12px_24px_-16px_rgba(23,21,19,0.18)]'
          : 'shadow-none'
      }`}
    >
      <a href="#top" className="flex items-center gap-2 sm:gap-2.5 group min-w-0">
        <Spark className="w-6 h-6 sm:w-7 sm:h-7 text-ember transition-transform duration-500 group-hover:rotate-12 shrink-0" />
        <span className="font-display italic font-medium text-[18px] sm:text-xl tracking-tight truncate">
          Wolf
          <em className="not-italic font-semibold text-ember">of</em>
          Claude
        </span>
      </a>

      <div className="hidden md:flex items-center gap-7 lg:gap-9 text-[14px] font-medium text-ink/75">
        <a href="#work" className="hover:text-ink transition-colors">
          Work
        </a>
        <a href="#numbers" className="hover:text-ink transition-colors">
          Numbers
        </a>
        <a href="#stack" className="hover:text-ink transition-colors">
          Stack
        </a>
        <a href="#coach" className="hover:text-ink transition-colors">
          Coach
        </a>
        <a href="#letter" className="hover:text-ink transition-colors">
          Letter
        </a>
      </div>

      <a
        href="#coach"
        className="inline-flex items-center gap-2 bg-ink text-cream hover:bg-ember transition-colors px-3 sm:px-4 py-2 sm:py-2.5 text-[12px] sm:text-[13px] font-medium tracking-wide group shrink-0"
      >
        <span className="hidden sm:inline">Work with me</span>
        <span className="sm:hidden">Coach</span>
        <span className="transition-transform group-hover:translate-x-0.5">→</span>
      </a>
    </nav>
  );
}
