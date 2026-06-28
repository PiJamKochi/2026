import React from 'react';
import Pi5Model from './Pi5Model';

export default function InteractiveBoard() {
  return (
    <section id="board-explorer" className="py-20 px-6 md:px-12 silicon-grid border-t-[3.5px] border-teak relative">
      {/* Clean graph paper decoration */}
      <div className="absolute inset-0 charupadi-overlay pointer-events-none opacity-30" />
      
      <div className="max-w-5xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="mb-12 text-center">
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-brass font-black block mb-2">
            Hardware Register // System Internals
          </span>
          <h2 className="font-sans font-black text-3xl md:text-4xl text-teak tracking-tight">
            Explore the Raspberry Pi 5
          </h2>
          <p className="font-serif text-sm text-teak mt-2 max-w-xl mx-auto font-bold">
            Click on key physical elements of the interactive 3D board to open dynamic overlays showing register values and chip specs.
          </p>
        </div>

        {/* 3D Model Panel (Full-Width card) */}
        <div className="neo-card flex flex-col overflow-hidden relative bg-kasavu-dark max-w-4xl mx-auto">
          <div className="font-mono text-[10px] font-black tracking-wider text-teak uppercase border-b-2 border-teak p-4 flex items-center justify-between bg-brass/10">
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-leaf-green animate-pulse border border-teak" />
              Live // PI5_MODEL_3D
            </span>
            <span className="text-[9px] bg-terracotta text-white px-2 py-0.5 rounded border-2 border-teak font-black uppercase">
              Click to Inspect / Drag to Rotate
            </span>
          </div>
          
          {/* 3D Canvas container */}
          <div className="relative h-[420px] md:h-[500px] w-full flex-grow bg-brass/5">
            <Pi5Model />
          </div>
          
          {/* Bottom Panel Status bar */}
          <div className="border-t-2 border-teak p-4 text-[9px] text-teak/70 font-black flex justify-between bg-kasavu-dark">
            <span>REGISTER // DEV_BC_V72</span>
            <span className="text-leaf-green font-black">INTERACTIVE_STATE_OK</span>
          </div>
        </div>

      </div>
    </section>
  );
}
