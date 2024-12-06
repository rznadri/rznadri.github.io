import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './App.css';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import BackgroundMusic from './components/BackgroundMusic';
import Experience from './components/Experience';
import Music from './components/Music';

function App() {
  return (
    <AnimatePresence>
      /* min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden */
      <div className="min-h-screen bg-gradient-to-br from-purple-950 from-5% via-gray-800 via-30% to-cyan-900 to-90% text-white relative overflow-hidden">
        {/* <BackgroundMusic /> */}
        {/* Background decoration */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Gradient orbs */}
          <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
          <div className="absolute top-0 -right-4 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-32 left-1/2 transform -translate-x-1/2 w-72 h-72 bg-emerald-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
          
          {/* Grid pattern */}
          <div className="absolute inset-0 bg-grid-white/[0.05] bg-[length:40px_40px]"></div>
        </div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="relative z-10"
        >
          <Hero />
          <About />
          <Experience />
          <Skills />
          <Projects />
          {/* <Music /> */}
          <Contact />
        </motion.div>
      </div>
    </AnimatePresence>
  );
}

export default App;
