import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { Texts } from './texts';

const Projects: React.FC = () => {
  const projects = [
    {
      title: 'Project 1',
      description: 'A brief description of your first project. What technologies did you use? What problems did it solve?',
      tags: ['React', 'TypeScript', 'Node.js'],
      github: '#',
      demo: '#',
      image: 'https://via.placeholder.com/500x300'
    },
    {
      title: 'Project 2',
      description: 'Description of your second project. Highlight the key features and your role in development.',
      tags: ['React', 'Python', 'MongoDB'],
      github: '#',
      demo: '#',
      image: 'https://via.placeholder.com/500x300'
    },
    // Add more projects as needed
  ];

  return (
    <section className="py-20 relative overflow-hidden bg-gradient-to-br from-gray-900 via-blue-900/20 to-gray-900">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        {/* <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-gray-900/50 to-transparent"></div> */}
        <div className="absolute -top-1/2 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
        {/* <div className="absolute bottom-0 right-0 w-full h-1/2 bg-gradient-to-t from-gray-900/50 to-transparent"></div> */}
      </div>

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        {/* <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-center mb-12">Projects</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg overflow-hidden shadow-lg"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map(tag => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-gray-200 text-gray-700 rounded-full text-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gray-600 hover:text-gray-900"
                    >
                      <FaGithub /> Code
                    </a>
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gray-600 hover:text-gray-900"
                    >
                      <FaExternalLinkAlt /> Demo
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div> */}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-4xl font-bold text-center mb-4">
            <span className="gradient-text">Academic Publications</span>
          </h2>
          <p className="text-gray-300 text-center max-w-2xl mx-auto mb-12">
            Research contributions in software engineering, focusing on developer behavior and diversity in open source.
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            {Texts.publications.map((pub, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="hover-card glass-effect rounded-xl p-6 border border-blue-500/20"
              >
                <h3 className="text-xl font-bold text-gray-100 mb-3 leading-tight">
                  {pub.title}
                </h3>
                <p className="text-gray-300 mb-2 text-sm">{pub.authors}</p>
                <div className="flex items-center gap-2 text-gray-400 mb-4 text-sm">
                  <span>{pub.journal}</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500/50"></span>
                  <span>{pub.year}</span>
                </div>
                {pub.link && (
                  <motion.a 
                    href={pub.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 group"
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <span>Read Publication</span>
                    <FaExternalLinkAlt className="group-hover:rotate-45 transition-transform duration-200" />
                  </motion.a>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
