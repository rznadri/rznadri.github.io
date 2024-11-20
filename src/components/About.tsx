import React from 'react';
import { motion } from 'framer-motion';
import { Texts } from './texts';

const About: React.FC = () => {
  return (
    <section className="py-20 relative overflow-hidden bg-gradient-to-b from-gray-900 via-teal-900/20 to-gray-900">
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
            <span className="gradient-text">About Me</span>
          </h2>
          <p className="text-gray-300 mb-12 max-w-2xl mx-auto">
            Full Stack Developer with a passion for creating innovative web applications and audio software solutions.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
          <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="glass-effect p-6 rounded-xl hover-card border border-teal-500/20"
            >
              <h3 className="text-xl font-semibold text-gray-200 mb-4">AWS Engineer</h3>
              <p className="text-gray-300">
                Experienced in AWS Cloud Services, including Serverless Architecture, Infrastructure as Code, and Infrastructure Optimization. 
                Passionate about automating development processes. Experienced in AWS Lambda, DynamoDB, SQS, SNS, and ECR, ECS, API Gateway, CDK, etc.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="glass-effect p-6 rounded-xl hover-card border border-teal-500/20"
            >
              <h3 className="text-xl font-semibold text-gray-200 mb-4">Web Development</h3>
              <p className="text-gray-300">
                Experienced in building modern web applications using React, TypeScript, and Node.js.
                Passionate about creating intuitive user interfaces and robust backend systems, with a strong background in AWS Serverless stack.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="glass-effect p-6 rounded-xl hover-card border border-teal-500/20"
            >
              <h3 className="text-xl font-semibold text-gray-200 mb-4">Audio Development</h3>
              <p className="text-gray-300">
                Specialized in developing audio software solutions using C++ and the JUCE framework.
                Creating innovative tools for music production and sound processing.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Smooth transition to next section */}
      
    </section>
  );
};

export default About;
