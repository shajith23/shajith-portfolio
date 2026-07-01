import React from 'react';
import { motion } from 'framer-motion';
import project1Img from '../assets/project/project1.png';
import project2Img from '../assets/project/project2.png';
import project3Img from '../assets/project/project3.png';

const Projects = () => {
  const projects = [
    {
      title:"AN Spare's & Accessories",
      subtitle: 'Full-Stack Automotive E-Commerce Platform',
      description: 'Designed and developed a scalable full-stack e-commerce platform for bike spare parts, car accessories, lubricants, garage tools, and automotive products. The platform includes a powerful admin dashboard for managing products, categories, orders, customers, and website content.',
      image: project1Img, 
      link: 'https://www.anspares.com',
      features: [
        'Advanced Admin Dashboard for Inventory & Order Management',
        'Product Search & Smart Filtering',
        'Razorpay Payment Integration',
        'Responsive Mobile-First Design & SEO Optimized'
      ],
      techStack: ['Next.js 15', 'TypeScript', 'React', 'Tailwind CSS', 'Supabase', 'PostgreSQL', 'shadcn/ui', 'Razorpay'],
    },
    {
      title: 'Mahi Fashion Jewellery',
      subtitle: 'Full-Stack E-Commerce Platform',
      description: 'Designed and developed a modern, high-performance e-commerce platform for a fashion jewellery brand. The application delivers a seamless shopping experience with responsive design, fast page loads, secure backend services, and an intuitive admin workflow.',
      image: project2Img, 
      link: 'https://www.mahifashionjewellery.com',
      features: [
        'Live metal rates integration',
        'Responsive UI optimized for mobile, tablet, and desktop',
        'Product catalog with category-based browsing',
        'Advanced search and filtering',
        'Secure backend with real-time database integration'
      ],
      techStack: ['Next.js', 'TypeScript', 'React', 'Tailwind CSS', 'Supabase'],
    },
    {
      title: 'Ronan Media Service',
      subtitle: 'Premium Media Agency Website',
      description: 'Designed and developed a premium digital media agency website showcasing creative services, brand identity, portfolio, and client engagement. The website emphasizes modern aesthetics, smooth animations, responsive layouts, and high performance.',
      image: project3Img, 
      link: 'https://ronanmediaservice.vercel.app',
      features: [
        'Premium agency-style landing page with modern UI/UX',
        'Interactive animations & smooth page transitions',
        'Creative service showcase & portfolio case studies',
        'High-performance architecture using Next.js & Framer Motion'
      ],
      techStack: ['Next.js', 'TypeScript', 'React', 'Tailwind CSS', 'Framer Motion', 'Zod', 'Antigravity AI'],
    },
  ];

  return (
    <section id="projects" className="relative w-full bg-gray-50 py-24 md:py-32 overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-white to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-white to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8"
        >
          <div>
            <span className="inline-block text-xs  text-[#ff2a2a] uppercase tracking-[0.15em] px-4 py-2 bg-red-50 border border-red-100 rounded-full mb-6">
              Selected Works
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl  text-gray-900 tracking-tight">
              Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff2a2a] to-red-400">Projects</span>.
            </h2>
          </div>
          <p className="text-gray-500 max-w-sm text-base md:text-lg  leading-relaxed">
            A showcase of my recent full-stack applications, highlighting performance, design, and complex integrations.
          </p>
        </motion.div>

        <div className="space-y-16 md:space-y-32">
          {projects.map((project, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] }}
              viewport={{ once: true, margin: '-100px' }}
              className="group relative"
            >
              {/* Project Card */}
              <div className={`relative bg-white rounded-[2.5rem] p-6 md:p-8 lg:p-12 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 hover:shadow-[0_20px_60px_rgb(0,0,0,0.08)] hover:border-gray-200 transition-all duration-500 flex flex-col ${idx % 2 !== 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-10 lg:gap-16 items-center`}>
                
                {/* Image Section */}
                <div className="w-full lg:w-[55%] relative rounded-[1.5rem] overflow-hidden shadow-lg bg-gray-100 aspect-video group-hover:shadow-2xl transition-all duration-500">
                  <div className="absolute inset-0 bg-[#ff2a2a]/10 mix-blend-overlay group-hover:opacity-0 transition-opacity duration-700 z-10 pointer-events-none"></div>
                  
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                  />

                  {/* Tech badge is baked into the image screenshots */}
                </div>

                {/* Content Section */}
                <div className="w-full lg:w-[45%] flex flex-col justify-center">
                  <div className="mb-6">
                    <h3 className="text-3xl md:text-4xl  text-gray-900 mb-3 tracking-tight group-hover:text-[#ff2a2a] transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-[#ff2a2a]  text-lg tracking-wide">
                      {project.subtitle}
                    </p>
                  </div>
                  
                  <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-8">
                    {project.description}
                  </p>

                  <div className="mb-8">
                    <h4 className="text-xs  text-gray-400 uppercase tracking-widest mb-4">Key Features</h4>
                    <ul className="space-y-3">
                      {project.features.map((feature, i) => (
                        <li key={i} className="flex items-start">
                          <svg className="w-5 h-5 text-[#ff2a2a] mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-gray-700  text-sm md:text-base">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-10">
                    {project.techStack.map((tech, i) => (
                      <span key={i} className="px-3 py-1.5 text-xs  text-gray-600 bg-gray-50 border border-gray-200 rounded-lg group-hover:border-gray-300 group-hover:bg-white group-hover:text-gray-900 hover:!text-[#ff2a2a] transition-all cursor-default shadow-sm hover:shadow-md">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div>
                    <a 
                      href={project.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center px-8 py-4 bg-gray-900 text-white  rounded-xl hover:bg-[#ff2a2a] hover:shadow-[0_10px_25px_rgba(255,42,42,0.3)] hover:-translate-y-1 transition-all duration-300 w-full md:w-auto"
                    >
                      Explore Project
                      <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
