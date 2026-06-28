import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Tracks from './components/Tracks';
import InteractiveBoard from './components/InteractiveBoard';
import Speakers from './components/Speakers';
import Schedule from './components/Schedule';
import Register from './components/Register';
import Footer from './components/Footer';
import { CONFIG } from './config';

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-kasavu select-none antialiased">
      {/* Navigation Layer */}
      <Header />

      {/* Main Content Layer */}
      <main className="flex-grow">
        <Hero />
        {CONFIG.showTracks && <Tracks />}
        <InteractiveBoard />
        <Speakers />
        {CONFIG.showSchedule && <Schedule />}
        <Register />
      </main>

      {/* Footer Layer */}
      <Footer />
    </div>
  );
}

export default App;
