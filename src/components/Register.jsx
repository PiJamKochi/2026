import React from 'react';
import { Cpu } from 'lucide-react';

export default function Register() {
  return (
    <section id="register" className="py-20 px-6 md:px-12 silicon-grid border-t-[3.5px] border-teak relative">
      {/* Clean graph paper decoration */}
      <div className="absolute inset-0 charupadi-overlay pointer-events-none opacity-30" />

      <div className="max-w-4xl mx-auto relative z-10">

        {/* Section Header */}
        <div className="mb-12 text-center">
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-brass font-black block mb-2">
            Input Interfaces // GPIO Header
          </span>
          <h2 className="font-sans font-black text-3xl md:text-4xl text-teak tracking-tight">
            Register Now
          </h2>
        </div>

        {/* DIP IC Chip Card */}
        <div className="relative border-[3.5px] border-teak bg-teak text-kasavu p-8 sm:p-10 md:p-14 rounded-xl shadow-[8px_8px_0px_0px_var(--color-brass)] max-w-2xl mx-auto">

          {/* IC Key Notch at the top */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-10 h-4 bg-kasavu border-b-2.5 border-l-2.5 border-r-2.5 border-teak rounded-b-md" />

          {/* Left Pins (IC Legs) */}
          <div className="absolute left-[-21px] top-12 bottom-12 flex-col justify-between w-5 pointer-events-none hidden md:flex">
            {['VCC', 'TXD', 'RXD', 'SDA', 'SCL', 'GND'].map((pin) => (
              <div key={pin} className="flex items-center space-x-1">
                <div className="w-4 h-3 bg-brass border border-teak rounded-l-sm" />
                <span className="font-mono text-[8px] text-teak uppercase tracking-tighter font-black">{pin}</span>
              </div>
            ))}
          </div>

          {/* Right Pins (IC Legs) */}
          <div className="absolute right-[-21px] top-12 bottom-12 flex-col justify-between w-5 pointer-events-none hidden md:flex text-right">
            {['GPIO2', 'GPIO3', 'GPIO4', 'GPIO5', 'A_REF', '3V3'].map((pin) => (
              <div key={pin} className="flex items-center justify-end space-x-1">
                <span className="font-mono text-[8px] text-teak uppercase tracking-tighter font-black">{pin}</span>
                <div className="w-4 h-3 bg-brass border border-teak rounded-r-sm" />
              </div>
            ))}
          </div>

          {/* Content */}
          <div className="relative z-10 text-center">
            {/* Status Header Bar */}
            <div className="flex items-center justify-between border-b-2 border-brass/30 pb-3 mb-8 font-mono text-[9px] text-brass-light tracking-widest font-black">
              <span className="flex items-center"><Cpu className="w-3.5 h-3.5 mr-1.5 text-brass" /> CORE_REG // PIN_HEADER_J1</span>
              <span className="text-leaf-green">STATUS // STABLE</span>
            </div>

            <p className="font-serif text-sm text-kasavu/90 font-bold leading-relaxed mb-8">
              Be Part of Kerala's Biggest Raspberry Pi Community Event!
              Whether you're a student, hobbyist, educator, engineer, or maker, Raspberry Pi Jam Kochi 2026 is the perfect place to learn, build, share, and connect with like-minded innovators.            </p>

            <a
              href="https://tinkerhub.org/events/V5ORC92XYO/Raspberry%20Pi%20Jam"
              target="_blank"
              rel="noopener noreferrer"
              className="neo-btn block w-full text-center px-10 py-5 bg-terracotta text-white hover:bg-terracotta-dark shadow-[4px_4px_0px_0px_var(--color-brass)] font-sans font-black tracking-wider uppercase text-sm border-2 border-brass/30"
            >
              Register Now
            </a>

            {/* Bottom Status */}
            <div className="mt-8 pt-4 border-t-2 border-brass/20 font-mono text-[9px] text-brass-light/60 font-black flex justify-between">
              <span>FLASH_ID: 0x4A1D</span>
              <span className="text-leaf-green">CONNECTION: ONLINE</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
