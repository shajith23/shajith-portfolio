import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
  const skillsData = [
    {
      category: 'Frontend Development',
      description: 'Building responsive, interactive user interfaces and web experiences.',
      skills: ['React', 'Next.js', 'JavaScript', 'TypeScript', 'HTML5', 'CSS3', 'Tailwind CSS', 'Bootstrap'],
      colSpan: 'md:col-span-2 lg:col-span-2',
      bgColor: 'bg-red-50/60',
      borderColor: 'border-red-100',
    },
    {
      category: 'Backend Architecture',
      description: 'Developing robust APIs and scalable database architectures.',
      skills: ['Node.js', 'Express.js', 'PostgreSQL', 'Java', 'Python', 'REST APIs', 'JWT', 'MySQL', 'MongoDB'],
      colSpan: 'md:col-span-2 lg:col-span-1',
      bgColor: 'bg-blue-50/60',
      borderColor: 'border-blue-100',
    },
    {
      category: 'AI Tools & Assistants',
      description: 'Leveraging generative AI to accelerate development.',
      skills: ['ChatGPT', 'Claude', 'GitHub Copilot', 'Cursor', 'Antigravity AI', 'Codex', 'OpenCode', 'Midjourney'],
      colSpan: 'md:col-span-2 lg:col-span-1',
      bgColor: 'bg-purple-50/60',
      borderColor: 'border-purple-100',
    },
    {
      category: 'Cloud & Infrastructure',
      description: 'Managing deployment, version control, and infrastructure.',
      skills: ['Git', 'GitHub', 'Docker', 'Postman', 'Linux', 'CI/CD', 'AWS', 'Figma'],
      colSpan: 'md:col-span-2 lg:col-span-2',
      bgColor: 'bg-green-50/60',
      borderColor: 'border-green-100',
    },
  ];

  return (
    <section id="skills" className="relative w-full bg-white py-24 md:py-32 overflow-hidden">
      {/* Subtle dot pattern background */}
      <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1.5px,transparent_1.5px)] [background-size:24px_24px] opacity-60 pointer-events-none" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16 md:mb-20 text-center md:text-left flex flex-col md:flex-row md:items-end justify-between gap-8"
        >
          <div>
            <span className="inline-block text-xs font-black text-[#ff2a2a] uppercase tracking-[0.15em] px-4 py-2 bg-red-50 rounded-full mb-6 border border-red-100 shadow-sm">
              Technical Stack
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 tracking-tight">
              Tools of the <span className="text-[#ff2a2a]">Trade</span>.
            </h2>
          </div>
          <p className="text-gray-500 max-w-md text-base md:text-lg leading-relaxed font-medium">
            A curated selection of modern technologies and frameworks I use to build scalable, high-performance digital solutions.
          </p>
        </motion.div>

        {/* Bento Box Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[minmax(280px,auto)]">
          {skillsData.map((group, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true, margin: '-50px' }}
              className={`group relative ${group.colSpan} ${group.bgColor} border ${group.borderColor} rounded-[2rem] p-8 md:p-10 hover:shadow-2xl transition-all duration-500 overflow-hidden flex flex-col justify-between`}
            >
              {/* Subtle hover reveal gradient */}
              <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-40 transition-opacity duration-500 pointer-events-none" />
              
              <div className="relative z-10 mb-10">
                <h3 className="text-2xl md:text-3xl font-black text-gray-900 mb-3 tracking-tight group-hover:text-[#ff2a2a] transition-colors duration-300">
                  {group.category}
                </h3>
                <p className="text-gray-600 text-sm md:text-base leading-relaxed font-medium max-w-sm">
                  {group.description}
                </p>
              </div>

              <div className="relative z-10 flex flex-wrap gap-2.5">
                {group.skills.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className="px-4 py-2 text-sm font-bold text-gray-700 bg-white/80 backdrop-blur-sm border border-white/40 shadow-sm rounded-xl hover:shadow-md hover:-translate-y-1 hover:text-[#ff2a2a] transition-all duration-300 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;