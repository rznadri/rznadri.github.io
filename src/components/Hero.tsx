import React from 'react';
import { motion } from 'framer-motion';
import { Texts } from './texts';
import Background from './Background';

const Hero: React.FC = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-gray-900 via-purple-900/20 to-gray-900">
      {/* Animated background elements */}
      
      <Background />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center relative z-10"
      >
        <h1 className="text-5xl md:text-7xl font-bold mb-4">
          Hi, I'm <span className="text-blue-400">{Texts.myName}</span>
        </h1>
        <h2 className="text-2xl md:text-2xl text-gray-300 mb-8">
          Full Stack AWS Software Engineer and Audio Programmer
        </h2>
        <a href={`mailto:${Texts.email}`}>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-full text-lg font-semibold"
          >
            Contact Me
          </motion.button>
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;
