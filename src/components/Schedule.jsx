import React, { useState } from 'react';
import { Calendar, Clock, Terminal } from 'lucide-react';

const SCHEDULE_DATA = {
  day1: [
    {
      time: '09:00 AM',
      tLabel: 'T+0.00',
      title: 'Boot Sequence & Power-On',
      desc: 'Check-in, badge flashing, coffee, and developer networking.',
      speaker: 'System Organizers',
      type: 'system'
    },
    {
      time: '10:00 AM',
      tLabel: 'T+1.00',
      title: 'Opening Keynote: Fusing Heritage with Hardware',
      desc: 'An exploration of physical engineering, and the Kochi maker roadmap.',
      speaker: 'Pi Jam Panel',
      type: 'keynote'
    },
    {
      time: '11:00 AM',
      tLabel: 'T+2.00',
      title: 'Core 0: Quantizing LLMs for Microcontrollers',
      desc: 'Hands-on session covering model pruning, quantization, and edge deployment.',
      speaker: 'Dr. Anjali Menon',
      type: 'workshop'
    },
    {
      time: '12:30 PM',
      tLabel: 'T+3.50',
      title: 'Power Cycle ',
      desc: 'A  High current intake, system cooldown.',
      speaker: 'None',
      type: 'system'
    },
    {
      time: '01:30 PM',
      tLabel: 'T+4.50',
      title: 'Core 1: High-Speed PCB Design & ESD Protection',
      desc: 'Interactive workshop on multilayer layouts, differential routing, and EMI shielding in KiCad.',
      speaker: 'Rohan K. Kurian',
      type: 'workshop'
    },
    {
      time: '03:00 PM',
      tLabel: 'T+6.00',
      title: 'Hardware Lab // Open Hack Session',
      desc: 'Teams claim development kits (RPi5, ESP32, sensors) and begin prototyping.',
      speaker: 'Mentors',
      type: 'hacking'
    }
  ],
  day2: [
    {
      time: '09:30 AM',
      tLabel: 'T+12.50',
      title: 'Core 2: Woodwork Meets Wires — Kinetic Crafts',
      desc: 'Fusing CNC-milled wood frames with stepper motors and interactive sensor feeds.',
      speaker: 'Meera Zachariah',
      type: 'workshop'
    },
    {
      time: '11:00 AM',
      tLabel: 'T+14.00',
      title: 'Core 3: Writing Custom RP1 Driver Nodes on Pi 5',
      desc: 'Deep-dive into driver compilation, writing overlays, and mapping SPI/I2C channels.',
      speaker: 'Vikram Sen',
      type: 'workshop'
    },
    {
      time: '12:30 PM',
      tLabel: 'T+15.50',
      title: 'Power Cycle // System Reset',
      desc: 'Lunch and informal project alignment before demo boards freeze.',
      speaker: 'None',
      type: 'system'
    },
    {
      time: '01:30 PM',
      tLabel: 'T+16.50',
      title: 'Hackathon Demos & Developer Review',
      desc: 'Live demos of built systems. Judges evaluate based on utility, craftsmanship, and code elegance.',
      speaker: 'All Teams',
      type: 'hacking'
    },
    {
      time: '04:00 PM',
      tLabel: 'T+19.00',
      title: 'Awards & Interrupt Shutdown',
      desc: 'Distribution of prizes, custom copper plaques, and closing remarks.',
      speaker: 'System Organizers',
      type: 'keynote'
    }
  ]
};

export default function Schedule() {
  const [activeDay, setActiveDay] = useState('day1');

  return (
    <section id="schedule" className="py-20 px-6 md:px-12 bg-kasavu border-t-[3.5px] border-teak relative">
      {/* Clean graph paper decoration */}
      <div className="absolute inset-0 charupadi-overlay pointer-events-none opacity-30" />
      
      <div className="max-w-5xl mx-auto">

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b-2 border-teak">
          <div className="text-left mb-6 md:mb-0">
            <span className="font-mono text-xs uppercase tracking-[0.3em] text-brass font-black block mb-2">
              Timing Diagram // Clock Waveform
            </span>
            <h2 className="font-sans font-black text-3xl md:text-4xl text-teak tracking-tight">
              Event Bus Schedule
            </h2>
            <p className="font-serif text-sm text-teak mt-1.5 font-bold">
              Sequence of clock pulses, workshops, and hardware labs.
            </p>
          </div>

          {/* Day Selector Pill Container */}
          <div className="flex space-x-2 font-mono text-xs p-1.5 bg-kasavu-dark border-2 border-teak rounded-lg shadow-[3px_3px_0px_0px_var(--color-teak)] self-start md:self-end">
            <button
              onClick={() => setActiveDay('day1')}
              className={`px-4 py-2 uppercase tracking-wider rounded-md font-black transition-all duration-150 ${activeDay === 'day1' ? 'bg-brass text-white border-2 border-teak shadow-[2px_2px_0px_0px_var(--color-teak)]' : 'text-teak hover:bg-brass/10'}`}
            >
              Day 01 // Oct 24
            </button>
            <button
              onClick={() => setActiveDay('day2')}
              className={`px-4 py-2 uppercase tracking-wider rounded-md font-black transition-all duration-150 ${activeDay === 'day2' ? 'bg-brass text-white border-2 border-teak shadow-[2px_2px_0px_0px_var(--color-teak)]' : 'text-teak hover:bg-brass/10'}`}
            >
              Day 02 // Oct 25
            </button>
          </div>
        </div>

        {/* Bus Timeline */}
        <div className="relative border-l-2 border-teak pl-8 ml-4 md:ml-12 space-y-12">

          {/* Signal clock track line overlay (vertical) */}
          <div className="absolute top-0 bottom-0 left-[-2.5px] w-[3.5px] bg-teak pointer-events-none" />

          {SCHEDULE_DATA[activeDay].map((item, idx) => (
            <div key={idx} className="relative group text-left">

              {/* Bus trace connector joint (circle node) */}
              <div className="absolute left-[-42.5px] top-1.5 w-6.5 h-6.5 flex items-center justify-center bg-kasavu border-2.5 border-teak rounded-full group-hover:scale-110 transition-all duration-200 shadow-[1.5px_1.5px_0px_0px_var(--color-teak)]">
                <div className={`w-2.5 h-2.5 rounded-full border border-teak ${item.type === 'system' ? 'bg-brass' : item.type === 'keynote' ? 'bg-terracotta' : 'bg-leaf-green'}`} />
              </div>

              {/* Day Time Register block */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-start">

                {/* Time & Logic Clock Indicator */}
                <div className="md:col-span-1 flex md:flex-col items-baseline md:items-start justify-between md:justify-start">
                  <div className="flex items-center text-teak font-sans font-black text-lg tracking-wider">
                    <Clock className="w-4 h-4 mr-1.5 text-brass" /> {item.time}
                  </div>
                  <span className="font-mono text-[10px] text-brass font-black uppercase tracking-widest mt-1">
                    {item.tLabel}
                  </span>
                </div>

                {/* Event Description Card (Neo-brutalism) */}
                <div className="md:col-span-3 border-2.5 border-teak bg-kasavu-dark p-5 md:p-6 rounded-xl hover:-translate-y-0.5 hover:-translate-x-0.5 hover:shadow-[5px_5px_0px_0px_var(--color-teak)] transition-all duration-200 shadow-[3px_3px_0px_0px_var(--color-teak)]">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2 border-b-2 border-teak/10 pb-2">
                    <h3 className="font-sans font-black text-base text-teak tracking-wide">
                      {item.title}
                    </h3>
                    {item.speaker !== 'None' && (
                      <span className="font-mono text-[9px] uppercase tracking-wider text-teak font-black border-2 border-teak px-2 py-0.5 rounded bg-brass-light/80 shadow-[1px_1px_0px_0px_var(--color-teak)]">
                        {item.speaker}
                      </span>
                    )}
                  </div>
                  <p className="font-serif text-xs md:text-sm text-teak-light leading-relaxed font-bold">
                    {item.desc}
                  </p>

                  {/* Digital high/low wave visualizer mimicking a signal */}
                  <div className="mt-4 pt-3 border-t-2 border-teak/10 flex justify-between font-mono text-[8px] text-teak font-black">
                    <span className="flex items-center"><Terminal className="w-3.5 h-3.5 mr-1 text-brass" /> BUS_CMD // {item.type.toUpperCase()}</span>
                    <span>CLK_SIG // HIGH</span>
                  </div>
                </div>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}
