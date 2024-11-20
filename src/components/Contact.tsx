import React from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';
import { Texts } from './texts';

const Contact: React.FC = () => {
  return (
    <section className="py-20 relative overflow-hidden bg-gradient-to-br from-gray-900 via-emerald-900/20 to-gray-900">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        {/* <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-gray-900/50 to-transparent"></div> */}
        <div className="absolute -bottom-1/4 left-1/4 w-96 h-96 bg-emerald-500/10 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
        {/* <div className="absolute bottom-0 right-0 w-full h-1/2 bg-gradient-to-t from-gray-900/50 to-transparent"></div> */}
      </div>

      <div className="max-w-4xl mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-4xl font-bold mb-4">
            <span className="gradient-text">Get in Touch</span>
          </h2>
          <p className="text-gray-300 mb-12 max-w-2xl mx-auto">
            Feel free to reach out for collaborations, opportunities, or just to say hello!
          </p>

          <div className="grid gap-8 md:grid-cols-3">
            <motion.a
              href={`mailto:${Texts.email}`}
              className="glass-effect p-6 rounded-xl hover-card border border-emerald-500/20 group"
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <div className="flex flex-col items-center gap-4">
                <FaEnvelope className="text-4xl text-emerald-400 group-hover:text-emerald-300 transition-colors" />
                <div>
                  <h3 className="font-semibold text-gray-200 mb-1">Email</h3>
                  <p className="text-gray-400 text-sm">{Texts.email}</p>
                </div>
              </div>
            </motion.a>

            <motion.a
              href="https://github.com/rznadri"
              target="_blank"
              rel="noopener noreferrer"
              className="glass-effect p-6 rounded-xl hover-card border border-emerald-500/20 group"
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <div className="flex flex-col items-center gap-4">
                <FaGithub className="text-4xl text-emerald-400 group-hover:text-emerald-300 transition-colors" />
                <div>
                  <h3 className="font-semibold text-gray-200 mb-1">GitHub</h3>
                  <p className="text-gray-400 text-sm">@rznadri</p>
                </div>
              </div>
            </motion.a>

            <motion.a
              href="https://linkedin.com/in/rezanadri"
              target="_blank"
              rel="noopener noreferrer"
              className="glass-effect p-6 rounded-xl hover-card border border-emerald-500/20 group"
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <div className="flex flex-col items-center gap-4">
                <FaLinkedin className="text-4xl text-emerald-400 group-hover:text-emerald-300 transition-colors" />
                <div>
                  <h3 className="font-semibold text-gray-200 mb-1">LinkedIn</h3>
                  <p className="text-gray-400 text-sm">@rezanadri</p>
                </div>
              </div>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
