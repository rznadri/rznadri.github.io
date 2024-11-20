import React from 'react';
import { color, motion } from 'framer-motion';
import { FaReact, FaNodeJs, FaAws } from 'react-icons/fa';
import { SiTypescript, SiJuce, SiCplusplus } from 'react-icons/si';

const Skills: React.FC = () => {
  const skills = [
    { name: 'React', icon: FaReact, color: 'text-blue-400' },
    { name: 'TypeScript', icon: SiTypescript, color: 'text-blue-500' },
    { name: 'Node.js', icon: FaNodeJs, color: 'text-green-500' },
    { name: 'AWS', icon: FaAws, color: 'text-yellow-500' },
    { name: 'C++', icon: SiCplusplus, color: 'text-blue-600' },
    { name: 'JUCE', icon: SiJuce, color: 'text-gray-500' },
  ];

  return (
    <section className="py-20 relative overflow-hidden bg-gradient-to-br from-gray-900 via-purple-900/20 to-gray-900">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        {/* <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-gray-900/50 to-transparent"></div> */}
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
        {/* <div className="absolute bottom-0 right-0 w-full h-1/2 bg-gradient-to-t from-gray-900/50 to-transparent"></div> */}
      </div>

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-4xl font-bold mb-4">
            <span className="gradient-text">Technical Skills</span>
          </h2>
          <p className="text-gray-300 mb-12 max-w-2xl mx-auto">
            A collection of technologies I work with to bring ideas to life.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass-effect p-6 rounded-xl hover-card border border-purple-500/20"
              >
                <div className="flex flex-col items-center gap-4 group">
                  <skill.icon className={`text-4xl ${skill.color} group-hover:scale-110 transition-transform duration-200`} />
                  <h3 className="font-semibold text-gray-200">{skill.name}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
