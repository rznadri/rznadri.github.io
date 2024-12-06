import React from 'react';
import { motion } from 'framer-motion';
import { FaSpotify } from 'react-icons/fa';

const Music: React.FC = () => {
  const musicProjects = [
    {
      name: "Toady It Was Raining", // Replace with your actual band name
      description: "Postrock", // Add a brief description
      spotifyLink: "https://open.spotify.com/artist/59Dz3oWHgsDVYhwuauliVX?si=P_D-wHl-S5yTSFsx-g14aw", // Replace with your actual Spotify link
    },
    // Add more music projects as needed
  ];

  return (
    <section className="min-h-screen relative py-20 bg-gradient-to-br from-gray-900 via-indigo-900/20 to-gray-900">
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
      </div>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="relative container mx-auto px-4"
      >
        <h2 className="text-4xl font-bold text-center mb-12 text-white">Music</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {musicProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 hover:bg-gray-700/50 transition-all"
            >
              <h3 className="text-2xl font-semibold text-white mb-2">{project.name}</h3>
              <p className="text-gray-300 mb-4">{project.description}</p>
              <a
                href={project.spotifyLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-green-400 hover:text-green-300 transition-colors"
              >
                <FaSpotify className="text-xl" />
                Listen on Spotify
              </a>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Music;
