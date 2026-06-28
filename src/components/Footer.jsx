import React from 'react';
import { CONFIG } from '../config';

export default function Footer() {
  // Dynamically compile footer links based on config flags
  const links = [
    { label: 'Register Seat', href: '#register' },
    CONFIG.showTracks && { label: 'Event Tracks', href: '#tracks' },
    { label: 'Speakers list', href: '#speakers' },
    CONFIG.showSchedule && { label: 'Timing Diagram', href: '#schedule' }
  ].filter(Boolean);

  return (
    <footer className="bg-kasavu border-t-[3.5px] border-teak py-12 px-6 md:px-12 mt-12 relative overflow-hidden">
      {/* Clean graph paper decoration */}
      <div className="absolute inset-0 charupadi-overlay pointer-events-none opacity-30" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10 text-left">

        {/* Core Attribution */}
        <div className="space-y-4">
          <div className="flex items-center space-x-2">
            <span className="font-sans font-black text-base tracking-wider text-teak">PI JAM KOCHI</span>
            <span className="font-mono text-[9px] border-2 border-teak px-1.5 py-0.5 rounded text-teak bg-brass-light font-black">RPi5.KL</span>
          </div>
          <p className="font-serif text-xs text-teak font-bold leading-relaxed max-w-sm">
            Fusing digital makers, edge computing, and kinetic creations.
          </p>
          <p className="font-mono text-[10px] text-teak font-black">
            © 2026 Pi Jam Kochi. All rights reserved.
          </p>
        </div>

        {/* System Registers (Links) */}
        <div>
          <h4 className="font-sans font-black text-xs uppercase tracking-wider text-teak mb-4 border-b-2 border-teak pb-2">
            System Links
          </h4>
          <ul className="space-y-2.5 font-sans text-xs tracking-wider text-teak font-bold">
            {links.map((link, idx) => (
              <li key={idx}>
                <a
                  href={link.href}
                  className="hover:text-terracotta transition-colors duration-200 flex items-center"
                >
                  <span className="font-mono text-[9px] text-brass font-black mr-1.5">[ 0{idx + 1} ]</span> {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Connection Interfaces (Social / Contacts) */}
        <div className="space-y-6">
          <div>
            <h4 className="font-sans font-black text-xs uppercase tracking-wider text-teak mb-4 border-b-2 border-teak pb-2">
              Bus Address // I/O
            </h4>
            <div className="flex space-x-4">
              <a
                href="https://github.com/J4Y45URY4"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-full border-2 border-teak bg-kasavu-dark flex items-center justify-center text-teak hover:bg-brass hover:text-white transition-all duration-150 shadow-[2px_2px_0px_0px_var(--color-teak)] active:translate-x-[1px] active:translate-y-[1px] active:shadow-[1px_1px_0px_0px_var(--color-teak)]"
              >
                {/* Custom Github SVG */}
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                  <path d="M9 18c-4.51 2-5-2-7-2" />
                </svg>
              </a>
              <a
                href="https://tinkerhub.org"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-full border-2 border-teak bg-kasavu-dark flex items-center justify-center text-teak hover:bg-brass hover:text-white transition-all duration-150 shadow-[2px_2px_0px_0px_var(--color-teak)] active:translate-x-[1px] active:translate-y-[1px] active:shadow-[1px_1px_0px_0px_var(--color-teak)]"
              >
                {/* Custom Globe SVG */}
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
                  <path d="M2 12h20" />
                </svg>
              </a>
              <a
                href="mailto:tinkerspacekochi@gmail.com"
                className="w-8 h-8 rounded-full border-2 border-teak bg-kasavu-dark flex items-center justify-center text-teak hover:bg-brass hover:text-white transition-all duration-150 shadow-[2px_2px_0px_0px_var(--color-teak)] active:translate-x-[1px] active:translate-y-[1px] active:shadow-[1px_1px_0px_0px_var(--color-teak)]"
              >
                {/* Custom Mail SVG */}
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                  <rect width="20" height="16" x="2" y="4" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
              </a>
            </div>
          </div>

          {/* Geo references (accurate locations) */}
          <div className="font-mono text-[10px] text-teak/70 font-black space-y-1">
            <span className="block uppercase tracking-wider">Kochi Maker Base //</span>
            <span className="block">Lat: 9.9312° N, Lon: 76.2673° E</span>
            <span className="block">Altitude: 0m AMSL (Coast Bus)</span>
          </div>
        </div>

      </div>

      {/* Edge border designs */}
      <div className="max-w-7xl mx-auto mt-8 pt-8 border-t-2 border-teak flex flex-col sm:flex-row justify-between items-center text-center sm:text-left gap-4">
        <span className="font-mono text-[9px] text-teak/60 font-black">
          DEVICE_SPEC:_V1.0 // CLK=2400MHZ // STATUS=STABLE
        </span>
        <span className="font-mono text-[10px] text-teak font-black">
          Made with ❤️ by Jayasurya
        </span>
      </div>
    </footer>
  );
}
