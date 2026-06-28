import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { CONFIG } from '../config';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove('dark');
    localStorage.setItem('theme', 'light');
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  // Dynamically compute nav items based on configuration flags
  const navItems = [
    CONFIG.showTracks && { label: 'Tracks', id: 'tracks' },
    { label: 'Explore Pi 5', id: 'board-explorer' },
    { label: 'Call for Speakers', id: 'speakers' },
    CONFIG.showSchedule && { label: 'Schedule', id: 'schedule' }
  ].filter(Boolean).map((item, idx) => ({
    ...item,
    index: `0${idx + 1}`
  }));

  // Mobile drawer links include the registration link as the last element
  const mobileNavItems = [
    ...navItems,
    { label: 'Register Seat', id: 'register', index: `0${navItems.length + 1}` }
  ];

  return (
    <header className="sticky top-0 z-50 bg-kasavu border-b-[3.5px] border-teak px-6 py-4 md:px-12">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo Section - Raspberry Pi Logo in bold comic styling */}
        <div className="flex items-center space-x-3 group cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <div className="relative w-10 h-11 flex items-center justify-center text-teak">
            <svg viewBox="0 0 100 120" className="w-full h-full stroke-current fill-none" strokeWidth="5.5" strokeLinecap="round" strokeLinejoin="round">
              {/* Left Leaf */}
              <path d="M 50 44 C 44 26 31 16 13 18 C 10 26 21 44 46 47 Z" fill="#86c12d" stroke="currentColor" strokeWidth="5.5" />
              {/* Right Leaf */}
              <path d="M 50 44 C 56 26 69 16 87 18 C 90 26 79 44 54 47 Z" fill="#86c12d" stroke="currentColor" strokeWidth="5.5" />
              {/* Leaf Veins */}
              <path d="M 23 23 C 32 30 41 38 46 45" stroke="currentColor" strokeWidth="4" />
              <path d="M 77 23 C 68 30 59 38 54 45" stroke="currentColor" strokeWidth="4" />

              {/* Center connection block behind leaves */}
              <circle cx="50" cy="46" r="10" fill="currentColor" stroke="none" />

              {/* Raspberry Drupelets */}
              <circle cx="50" cy="58" r="12" fill="#c2185b" stroke="currentColor" strokeWidth="5.5" />

              <circle cx="32" cy="62" r="12" fill="#c2185b" stroke="currentColor" strokeWidth="5.5" />
              <circle cx="68" cy="62" r="12" fill="#c2185b" stroke="currentColor" strokeWidth="5.5" />

              <circle cx="20" cy="78" r="12" fill="#c2185b" stroke="currentColor" strokeWidth="5.5" />
              <circle cx="80" cy="78" r="12" fill="#c2185b" stroke="currentColor" strokeWidth="5.5" />

              <circle cx="30" cy="94" r="12" fill="#c2185b" stroke="currentColor" strokeWidth="5.5" />
              <circle cx="70" cy="94" r="12" fill="#c2185b" stroke="currentColor" strokeWidth="5.5" />

              <circle cx="50" cy="106" r="12" fill="#c2185b" stroke="currentColor" strokeWidth="5.5" />

              <circle cx="50" cy="80" r="14" fill="#c2185b" stroke="currentColor" strokeWidth="5.5" />
            </svg>
            <div className="absolute inset-0 border-2 border-teak rounded-lg scale-110 group-hover:scale-120 transition-transform duration-300 pointer-events-none shadow-[2px_2px_0px_0px_var(--color-teak)]" />
          </div>
          <div>
            <span className="font-sans font-black text-lg tracking-wider text-teak block leading-none mb-1">PI JAM KOCHI</span>
            <span className="font-sans text-[10px] tracking-[0.25em] text-brass font-black block uppercase">2026</span>
          </div>
        </div>

        {/* Navigation - Bold neo links */}
        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className="group flex items-center space-x-1.5 text-xs tracking-widest uppercase font-sans font-black text-teak hover:text-terracotta transition-colors duration-200"
            >
              <span className="text-[10px] text-brass font-mono">[ {item.index} ]</span>
              <span>{item.label}</span>
            </button>
          ))}
        </nav>

        {/* Action Button and Theme Switcher in Neo style */}
        <div className="flex items-center space-x-3">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="neo-btn p-2.5 bg-kasavu-dark text-teak hover:bg-brass hover:text-teak md:hidden cursor-pointer"
            aria-label="Toggle Navigation Menu"
          >
            {isMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>

          <button
            onClick={() => scrollTo('register')}
            className="neo-btn px-5 py-2.5 bg-terracotta text-white hover:bg-terracotta-dark hidden sm:block font-sans font-black tracking-wider text-xs uppercase"
          >
            Register // GPIO_5
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu Drawer */}
      {isMenuOpen && (
        <nav className="flex flex-col space-y-3 pt-4 pb-2 border-t-2 border-teak mt-4 md:hidden animate-fadeIn">
          {mobileNavItems.map((item) => (
            <button
              key={item.id}
              onClick={() => {
                scrollTo(item.id);
                setIsMenuOpen(false);
              }}
              className="flex items-center space-x-2 text-left text-xs tracking-widest uppercase font-sans font-black text-teak hover:text-terracotta transition-colors duration-200 py-2 border-b border-teak/10"
            >
              <span className="text-[10px] text-brass font-mono">[ {item.index} ]</span>
              <span>{item.label}</span>
            </button>
          ))}
        </nav>
      )}
    </header>
  );
}
