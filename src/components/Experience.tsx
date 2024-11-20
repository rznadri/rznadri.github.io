import React from 'react';
import { motion } from 'framer-motion';
import Background from './Background';

const Experience: React.FC = () => {
  const experiences = [
    {
      company: "BMO",
      role: "Application Developer",
      period: "2022 - Present",
      description: [
        "Develop AWS APIs for 10k daily transactions using serverless architecture.",
        "Enhanced data retrieval with AWS DynamoDB, ECR, ECS, SQS, SNS for 5k TPS.",
        "Launched CI/CD process for API mocking, boosting internal development speed.",
        "Analyze API performance, ensuring alignment with design requirements.",
        "Utilize TDD and Pair Programming for robust application development.",
      ]
    },
    {
      company: "Rideflag",
      role: "Software and Data Architect",
      period: "2021 - 2022",
      description: [
        "Managed AWS infrastructure with Infrastructure as Code, boosting system reliability and efficiency.",
        "Developed APIs using Serverless, Lambda, and DynamoDB, enhancing feature integration in Python and NodeJS.",
        "Enhanced data management and security in AWS, leading to improved performance and cost reduction.",
        "Spearheaded AWS infrastructure optimization, implementing CDK for automated deployments, and enhancing system reliability and operational efficiency.",
      ]
    }
  ];

  return (
    <section className="min-h-screen relative py-20 bg-gradient-to-br from-gray-900 via-indigo-900/20 to-gray-900">
      <div className="absolute inset-0">
        {/* <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-gray-900/50 to-transparent"></div> */}
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
        {/* <div className="absolute bottom-0 right-0 w-full h-1/2 bg-gradient-to-t from-gray-900/50 to-transparent"></div> */}
      </div>
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="container mx-auto px-4"
      >
        <h2 className="text-4xl font-bold mb-12 text-center">Work Experience</h2>
        
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-gray-800/50 backdrop-blur-lg rounded-xl p-6 shadow-xl border border-gray-700"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-semibold text-blue-400">{exp.company}</h3>
                  <p className="text-xl text-gray-300">{exp.role}</p>
                </div>
                <p className="text-gray-400 mt-2 md:mt-0">{exp.period}</p>
              </div>
              
              <ul className="list-disc list-inside space-y-2 text-gray-300">
                {exp.description.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Experience;
