import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <section className="py-20 bg-gray-100">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-center mb-12">About Me</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-gray-700">
                I'm a passionate developer with a strong foundation in web development.
                I love creating elegant solutions to complex problems and am constantly
                learning new technologies to stay at the forefront of web development.
              </p>
              <p className="text-lg text-gray-700">
                With experience in both frontend and backend development, I bring a
                comprehensive approach to building web applications that are not only
                beautiful but also performant and scalable.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold mb-4">Quick Facts</h3>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <span className="w-32 font-medium">Location:</span>
                  <span>Your Location</span>
                </li>
                <li className="flex items-center">
                  <span className="w-32 font-medium">Experience:</span>
                  <span>X Years</span>
                </li>
                <li className="flex items-center">
                  <span className="w-32 font-medium">Education:</span>
                  <span>Your Degree</span>
                </li>
                <li className="flex items-center">
                  <span className="w-32 font-medium">Interests:</span>
                  <span>Web Development, AI, etc.</span>
                </li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
