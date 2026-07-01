import React from 'react';
import { motion } from 'framer-motion';

const Certifications = () => {
  const certifications = [
    {
      title: 'MERN Stack Certified Developer',
      organization: 'BE-Practical Tech Solutions, Bangalore',
      description: 'Comprehensive certification covering MongoDB, Express.js, React, and Node.js with hands-on full-stack projects.',
    },
    {
      title: 'Responsive Web Design',
      organization: 'freeCodeCamp',
      description: 'Mastered HTML5, CSS3, Flexbox, Grid, and responsive design principles for modern web applications.',
    },
    {
      title: 'JavaScript Algorithms',
      organization: 'freeCodeCamp',
      description: 'Advanced proficiency in JavaScript fundamentals, object-oriented programming, and complex problem solving.',
    },
    {
      title: 'React Native Development',
      organization: 'Coursera (Meta)',
      description: 'Specialization in building scalable, cross-platform mobile applications using the React Native framework.',
    },
  ];

  return (
    <section id="certifications" className="relative w-full bg-white py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8"
        >
          <div>
            <span className="inline-block text-xs  text-gray-400 uppercase tracking-[0.2em] mb-4">
              Achievements
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl  text-gray-900 tracking-tight">
              Licenses & <span className="text-[#ff2a2a] italic">Certifications</span>
            </h2>
          </div>
          <p className="text-gray-500 max-w-sm text-base md:text-lg  leading-relaxed">
            Professional qualifications and specialized training that validate my technical expertise.
          </p>
        </motion.div>

        {/* Elegant List View */}
        <div className="border-t border-gray-200">
          {certifications.map((cert, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true, margin: '-50px' }}
              className="group flex flex-col lg:flex-row lg:items-center justify-between py-10 md:py-12 border-b border-gray-200 hover:bg-red-50/30 transition-colors duration-500 px-4 -mx-4 rounded-2xl cursor-default relative overflow-hidden"
            >
              {/* Subtle hover accent line */}
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#ff2a2a] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              <div className="w-full lg:w-[45%] mb-4 lg:mb-0 pl-0 lg:pl-6 transition-all duration-300 group-hover:pl-4 lg:group-hover:pl-10">
                <h3 className="text-2xl md:text-3xl  text-gray-900 group-hover:text-[#ff2a2a] transition-colors duration-300 tracking-tight">
                  {cert.title}
                </h3>
              </div>
              
              <div className="w-full lg:w-[25%] mb-4 lg:mb-0 flex items-center">
                <span className="text-sm  text-gray-400 uppercase tracking-widest flex items-center gap-3">
                  <span className="w-8 h-[2px] bg-gray-200 group-hover:bg-[#ff2a2a] transition-colors duration-300 hidden md:block"></span>
                  {cert.organization}
                </span>
              </div>
              
              <div className="w-full lg:w-[30%]">
                <p className="text-gray-500 text-sm md:text-base leading-relaxed">
                  {cert.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
