import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll to track positioning parameters safely
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = ['Home', 'About', 'Expertise', 'Skills', 'Projects', 'Certifications', 'Contact'];

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isOpen 
          ? 'bg-[#ff2a2a] py-4'
          : isScrolled 
            ? 'bg-white/70 backdrop-blur-xl py-3 border-b border-gray-200/50 shadow-[0_4px_30px_rgba(0,0,0,0.03)]' 
            : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        
        {/* Left Side: Dynamic Logo font node configurations */}
        <div className="flex items-center">
          <a 
            href="#" 
            className={`text-2xl font-black tracking-tight transition-colors duration-500 ${
              isOpen || !isScrolled ? 'text-white' : 'text-gray-900'
            }`}
          >
            SHAJITH <span className="text-[#ff2a2a]">.</span>
          </a>
        </div>

        {/* Center: Desktop Links with dynamic contrasting rules */}
        <div className="hidden md:flex space-x-7 lg:space-x-8">
          {navLinks.map((link) => (
            <a 
              key={link} 
              href={`#${link.toLowerCase()}`}
              className={`font-semibold text-sm tracking-wide relative group transition-colors duration-500 ${
                isScrolled ? 'text-gray-600 hover:text-gray-950' : 'text-white/80 hover:text-white'
              }`}
            >
              {link}
              {/* Active animated custom alignment tracking baseline highlight */}
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[#ff2a2a] transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </div>

        {/* Right Side: Responsive CTA Frame Button & GitHub */}
        <div className="hidden md:flex items-center space-x-5">
          <a 
            href="https://github.com/shajith23" 
            target="_blank" 
            rel="noopener noreferrer"
            className={`transition-all duration-500 transform hover:scale-110 ${
              isOpen ? 'text-white hover:text-black' : isScrolled ? 'text-gray-900 hover:text-[#ff2a2a]' : 'text-white hover:text-[#ff2a2a]'
            }`}
            aria-label="GitHub"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
            </svg>
          </a>
          <a 
            href="https://drive.google.com/drive/folders/1-2NCKFzCs41FypumOScQ5YDw_TefleHN" 
            target="_blank"
            rel="noopener noreferrer"
            className={`px-5 py-2 rounded-full text-sm font-bold transition-all duration-500 border ${
              isScrolled
                ? 'border-gray-300 text-gray-700 hover:border-gray-900 hover:text-gray-900'
                : 'border-white/30 text-white hover:border-white hover:bg-white/10'
            }`}
          >
            Resume
          </a>
          <a 
            href="#contact" 
            className={`px-6 py-2.5 rounded-full text-sm font-black transition-all duration-500 ${
              isScrolled
                ? 'bg-gray-900 text-white hover:bg-[#ff2a2a] hover:shadow-[0_10px_25px_rgba(255,42,42,0.25)]'
                : 'bg-white/10 border border-white/20 text-white hover:bg-white hover:text-black backdrop-blur-md'
            }`}
          >
            Hire Me
          </a>
        </div>

        {/* Mobile Hamburger Trigger Controllers */}
        <div className="md:hidden flex items-center">
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className={`focus:outline-none p-2 transition-colors duration-500 ${
              isOpen || !isScrolled ? 'text-white' : 'text-gray-900'
            }`}
            aria-label="Toggle navigation drawer menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu Panel Expansion Drawer Overlay */}
      <div 
        className={`md:hidden absolute top-full left-0 w-full overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen ? 'max-h-[600px] py-6 opacity-100 bg-[#ff2a2a] shadow-2xl' : 'max-h-0 opacity-0 pointer-events-none'
        }`}
      >
        <div className="flex flex-col px-6 space-y-4">
          {navLinks.map((link) => (
            <a 
              key={link} 
              href={`#${link.toLowerCase()}`}
              onClick={() => setIsOpen(false)}
              className="text-white hover:text-black font-extrabold text-base border-b border-white/10 pb-2.5 transition-colors"
            >
              {link}
            </a>
          ))}
          <div className="pt-2 flex flex-col gap-4">
             <a 
               href="https://drive.google.com/drive/folders/1-2NCKFzCs41FypumOScQ5YDw_TefleHN" 
               target="_blank"
               rel="noopener noreferrer"
               className="inline-block px-6 py-3 rounded-full border border-white/50 text-white font-bold hover:bg-white hover:text-[#ff2a2a] transition-all duration-300 w-full text-center"
             >
               Download Resume
             </a>
             <a 
               href="#contact" 
               onClick={() => setIsOpen(false)} 
               className="inline-block px-6 py-3 rounded-full bg-white text-[#ff2a2a] font-black hover:bg-gray-950 hover:text-white transition-all duration-300 w-full text-center shadow-xl"
             >
               Hire Me
             </a>
             <a 
               href="https://github.com/shajith23" 
               target="_blank" 
               rel="noopener noreferrer"
               className="flex items-center justify-center gap-2 text-white/90 font-bold hover:text-black transition-colors pb-4"
             >
               <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                 <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
               </svg>
               GitHub Profile
             </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;