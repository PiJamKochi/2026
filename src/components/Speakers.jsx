import React from 'react';
import { CONFIG } from '../config';

export default function Speakers() {
  return (
    <section id="speakers" className="py-20 px-6 md:px-12 silicon-grid border-t-[3.5px] border-teak relative">
      {/* Clean graph paper decoration */}
      <div className="absolute inset-0 charupadi-overlay pointer-events-none opacity-30" />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Centered Main CTA Card */}
        <div className="neo-card p-8 md:p-12 bg-kasavu-dark border-2 border-teak text-center max-w-2xl mx-auto shadow-[4px_4px_0px_0px_var(--color-teak)]">
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-brass font-black block mb-2">
            Central Processing Unit // Call for Proposals
          </span>

          <h2 className="font-sans font-black text-3xl md:text-4xl text-teak tracking-tight mb-4">
            Call for Speakers
          </h2>

          <p className="font-serif text-sm text-teak mt-2 mb-8 font-bold leading-relaxed">
            Whether it's your first project or your latest innovation, we'd love to hear your story! Join our speaker lineup and help grow Kerala's maker community.
          </p>

          <a
            href={CONFIG.speakerFormUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="neo-btn inline-block px-8 py-4 bg-terracotta text-white hover:bg-terracotta-dark shadow-[4px_4px_0px_0px_var(--color-teak)] font-sans font-black tracking-wider uppercase text-xs"
          >
            Apply to Speak // Register Now
          </a>
        </div>

      </div>
    </section>
  );
}
