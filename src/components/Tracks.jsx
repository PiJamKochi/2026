import React from 'react';
import { Cpu, Terminal, Layers, ArrowUpRight } from 'lucide-react';

const TRACKS_DATA = [
  {
    id: 'tinyml',
    num: '01',
    icon: Cpu,
    title: 'TinyML & Edge AI',
    desc: 'Deploying neural networks on low-power silicon. Run real-time vision, keyword spotting, and predictive analytics directly on microcontrollers at the edge.',
    platform: 'ESP32-S3, RP2350, Cortex-M55',
    focus: 'On-device training, quantization, wake-word recognition, anomaly detection'
  },
  {
    id: 'proto',
    num: '02',
    icon: Terminal,
    title: 'Hardware Prototyping',
    desc: 'Custom PCB design, high-speed routing, power delivery, and signal integrity. Translate breadboard concepts into production-grade hardware blocks.',
    platform: 'KiCad, Multilayer PCBs, Raspberry Pi 5 Compute Module',
    focus: 'Impedance matching, thermal profiling, SMD soldering, logic analyzer debugging'
  },
  {
    id: 'physcomp',
    num: '03',
    icon: Layers,
    title: 'Physical Making & Craft',
    desc: 'Fusing traditional woodwork and design aesthetics (like Kerala wood carvings and architectural frames) with physical microcontrollers, sensors, and actuators.',
    platform: 'Motors, Solenoids, CNC Milled Teak, LED matrices',
    focus: 'Creative coding, interactive installations, telemetry, wooden casing design'
  }
];

export default function Tracks() {
  return (
    <section id="tracks" className="py-20 px-6 md:px-12 bg-kasavu border-t-[3.5px] border-teak relative">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="mb-16 text-left border-l-[4px] border-terracotta pl-6">
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-brass font-black block mb-2">
            System Architecture // Peripherals
          </span>
          <h2 className="font-sans font-black text-3xl md:text-4xl text-teak tracking-tight">
            Event Tracks & Focus Areas
          </h2>
          <p className="font-serif text-sm text-teak mt-2 max-w-xl font-bold">
            Choose your core bus. Each track features hands-on build sessions, interactive debugging labs, and developer reviews.
          </p>
        </div>

        {/* 3-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TRACKS_DATA.map((track) => {
            const Icon = track.icon;
            return (
              <div 
                key={track.id}
                className="neo-card p-8 bg-kasavu-dark flex flex-col justify-between hover:-translate-y-1 hover:-translate-x-1 hover:shadow-[8px_8px_0px_0px_var(--color-teak)] transition-all duration-200 relative group"
              >
                <div>
                  {/* Card Header */}
                  <div className="flex items-center justify-between border-b-2 border-teak pb-4 mb-6">
                    <span className="font-mono text-xs text-brass font-black">
                      BUS_0{track.num}
                    </span>
                    <Icon className="w-5 h-5 text-teak group-hover:text-terracotta transition-colors duration-200" />
                  </div>

                  {/* Title & Desc */}
                  <h3 className="font-sans font-black text-lg text-teak mb-3 flex items-center group-hover:text-terracotta transition-colors duration-200">
                    {track.title}
                  </h3>
                  <p className="font-serif text-sm text-teak-light leading-relaxed mb-6 font-medium">
                    {track.desc}
                  </p>
                </div>

                {/* Specs Section (Technical look) */}
                <div className="border-t-2 border-teak pt-4 mt-4 text-left">
                  <div className="mb-2.5">
                    <span className="font-mono text-[9px] uppercase tracking-wider text-brass font-black block">Silicon Targets //</span>
                    <span className="font-mono text-[11px] text-teak font-black">{track.platform}</span>
                  </div>
                  <div>
                    <span className="font-mono text-[9px] uppercase tracking-wider text-brass font-black block">Instruction Set //</span>
                    <span className="font-serif text-[11px] text-teak-light block leading-normal font-medium">{track.focus}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
