import React from 'react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-gray-800 text-white px-4">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center"
      >
        <h1 className="text-5xl md:text-7xl font-bold mb-4">
          Hi, I'm <span className="text-blue-400">Your Name</span>
        </h1>
        <h2 className="text-2xl md:text-3xl text-gray-300 mb-8">
          Full Stack Developer
        </h2>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-8">
          I build beautiful and functional web applications with modern technologies.
        </p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-full text-lg font-semibold"
        >
          Get in Touch
        </motion.button>
      </motion.div>
    </section>
  );
};

export default Hero;
