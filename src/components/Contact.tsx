import React from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';

const Contact: React.FC = () => {
  const socialLinks = [
    { name: 'Email', icon: FaEnvelope, link: 'mailto:rznadri@gmail.com' },
    { name: 'LinkedIn', icon: FaLinkedin, link: 'https://www.linkedin.com/in/reza-nadri-139341b6/' },
    { name: 'GitHub', icon: FaGithub, link: 'https://github.com/rznadri' },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-center mb-12">Get in Touch</h2>
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-lg text-gray-600 mb-8">
              I'm always open to new opportunities and interesting projects.
              Feel free to reach out if you'd like to collaborate or just say hello!
            </p>
            <div className="flex justify-center gap-6">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-3 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors"
                >
                  <social.icon className="text-2xl text-gray-700" />
                </motion.a>
              ))}
            </div>
            <div className="mt-12">
              <motion.a
                href="mailto:rznadri@gmail.com"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block bg-blue-500 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-blue-600 transition-colors"
              >
                Send me an email
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
