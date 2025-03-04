"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

export default function Header() {
  const pathname = usePathname();
  const [hoveredMenu, setHoveredMenu] = useState(null);
  const [timeoutId, setTimeoutId] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isWhatWeDoOpen, setIsWhatWeDoOpen] = useState(false);
  const [isForTalentOpen, setIsForTalentOpen] = useState(false);

  const isActive = (path) => pathname === path;
  const isChildActive = (parentPath) => pathname.startsWith(parentPath);

  const handleMouseEnter = (menu) => {
    if (timeoutId) {
      clearTimeout(timeoutId);
      setTimeoutId(null);
    }
    setHoveredMenu(menu);
  };

  const handleMouseLeave = () => {
    const id = setTimeout(() => {
      setHoveredMenu(null);
    }, 300); // 0.8 second delay
    setTimeoutId(id);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleWhatWeDo = () => {
    setIsWhatWeDoOpen(!isWhatWeDoOpen);
  };

  const toggleForTalent = () => {
    setIsForTalentOpen(!isForTalentOpen);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-4 py-1 shadow-lg bg-black/90 backdrop-blur-lg border-b border-transparent border-b-white">
      <div className="flex items-center space-x-2">
        <img src="/OnlyLogo.png" alt="Logo" className="h-8 w-8 rounded-lg shadow-lg hover:scale-105 transition-transform" />
        <Link href="/" className="text-xl font-bold text-white bg-clip-text text-transparent transition-all hover:glow-blue">
          MJX LABS
        </Link>
      </div>
      <nav className="hidden md:flex items-center space-x-6">
        <div 
          className="relative group"
          onMouseEnter={() => handleMouseEnter('what-we-do')}
          onMouseLeave={handleMouseLeave}
        >
          <button className={`px-3 py-2 rounded-lg hover:bg-gray-800/50 transition-colors ${(isActive('/what-we-do') || isChildActive('/services')) ? 'text-blue-500 glow-blue' : 'text-gray-300 hover:text-blue-600'}`}>
            Services
          </button>
          <div className={`absolute left-0 mt-2 w-56 bg-gray-900/95 backdrop-blur-lg border border-gray-800 rounded-lg shadow-2xl transition-opacity duration-200 ${
            hoveredMenu === 'what-we-do' ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
          }`}>
            <ul className="py-2">
              <li className="px-4 py-2 hover:bg-gray-800/50 transition-colors">
                <Link href="/services/frontend-development" className={`block ${isActive('/services/frontend-development') ? 'text-blue-500 glow-blue' : 'text-gray-300 hover:text-white'}`}>Frontend Development</Link>
              </li>
              <li className="px-4 py-2 hover:bg-gray-800/50 transition-colors">
                <Link href="/services/mobile-app-development" className={`block ${isActive('/services/mobile-app-development') ? 'text-blue-500 glow-blue' : 'text-gray-300 hover:text-white'}`}>Mobile App Development</Link>
              </li>
              <li className="px-4 py-2 hover:bg-gray-800/50 transition-colors">
                <Link href="/services/ai-machine-learning" className={`block ${isActive('/services/ai-machine-learning') ? 'text-blue-500 glow-blue' : 'text-gray-300 hover:text-white'}`}>AI & Machine Learning Solutions</Link>
              </li>
              <li className="px-4 py-2 hover:bg-gray-800/50 transition-colors">
                <Link href="/services/cloud-devops" className={`block ${isActive('/services/cloud-devops') ? 'text-blue-500 glow-blue' : 'text-gray-300 hover:text-white'}`}>Cloud Solutions & DevOps</Link>
              </li>
              <li className="px-4 py-2 hover:bg-gray-800/50 transition-colors">
                <Link href="/services/data-analysis-data-science" className={`block ${isActive('/services/data-analysis-data-science') ? 'text-blue-500 glow-blue' : 'text-gray-300 hover:text-white'}`}>Data Analysis Data Science</Link>
              </li>
              <li className="px-4 py-2 hover:bg-gray-800/50 transition-colors">
                <Link href="/services/backend-development" className={`block ${isActive('/services/backend-development') ? 'text-blue-500 glow-blue' : 'text-gray-300 hover:text-white'}`}>Backend Development</Link>
              </li>
            </ul>
          </div>
        </div>

        {/* <div 
          className="relative group"
          onMouseEnter={() => handleMouseEnter('for-talent')}
          onMouseLeave={handleMouseLeave}
        >
          <button className={`px-3 py-2 rounded-lg hover:bg-gray-800/50 transition-colors ${(isActive('/for-talent') || isChildActive('/fortalent')) ? 'text-blue-500 glow-blue' : 'text-gray-300 hover:text-blue-600'}`}>
            For Talent
          </button>
          <div className={`absolute left-0 mt-2 w-56 bg-gray-900/95 backdrop-blur-lg border border-gray-800 rounded-lg shadow-2xl transition-opacity duration-200 ${
            hoveredMenu === 'for-talent' ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
          }`}>
            <ul className="py-2">
              <li className="px-4 py-2 hover:bg-gray-800/50 transition-colors">
                <Link href="/fortalent/how-to-get-hired" className={`block ${isActive('/fortalent/how-to-get-hired') ? 'text-blue-500 glow-blue' : 'text-gray-300 hover:text-white'}`}>How to get hired</Link>
              </li>
              <li className="px-4 py-2 hover:bg-gray-800/50 transition-colors">
                <Link href="/fortalent/developer-resources" className={`block ${isActive('/fortalent/developer-resources') ? 'text-blue-500 glow-blue' : 'text-gray-300 hover:text-white'}`}>Developer resources</Link>
              </li>
              <li className="px-4 py-2 hover:bg-gray-800/50 transition-colors">
                <Link href="/fortalent/talent-support" className={`block ${isActive('/fortalent/talent-support') ? 'text-blue-500 glow-blue' : 'text-gray-300 hover:text-white'}`}>Talent support</Link>
              </li>
            </ul>
          </div>
        </div> */}

<Link href="/hiredevelopers" className={`px-3 py-2 rounded-lg hover:bg-gray-800/50 transition-colors ${isActive('/hiredevelopers') ? 'text-blue-500 glow-blue' : 'text-gray-300 hover:text-blue-600'}`}>Hire Developers</Link>
        <Link href="/blog" className={`px-3 py-2 rounded-lg hover:bg-gray-800/50 transition-colors ${isActive('/blog') ? 'text-blue-500 glow-blue' : 'text-gray-300 hover:text-blue-600'}`}>Blog</Link>
        <Link href="/about" className={`px-3 py-2 rounded-lg hover:bg-gray-800/50 transition-colors ${isActive('/about') ? 'text-blue-500 glow-blue' : 'text-gray-300 hover:text-blue-600'}`}>About Us</Link>
        <Link href="/pricing" className={`px-3 py-2 rounded-lg hover:bg-gray-800/50 transition-colors ${isActive('/pricing') ? 'text-blue-500 glow-blue' : 'text-gray-300 hover:text-blue-600'}`}>Pricing</Link>
        <Link href="/contact" className={`px-2 py-1 rounded-lg bg-gradient-to-r from-blue-700 to-blue-400 transition-colors ${isActive('/contact') ? 'text-blue-800 glow-blue' : 'text-gray-300 hover:text-blue-600'}`}>Contact</Link>
      </nav>
      <Link href="/contact" className={`md:hidden px-3 py-2 rounded-lg bg-gradient-to-r from-blue-700 to-blue-400 transition-colors ${isActive('/contact') ? 'text-blue-800 glow-blue' : 'text-gray-300 hover:text-blue-600'}`}>Contact</Link>
      <button className="md:hidden text-white" onClick={toggleMobileMenu}>
        
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
        </svg>
      </button>
      
      {isMobileMenuOpen && (
        <div className="absolute top-16 left-0 right-0 bg-gray-900 rounded-lg shadow-lg z-50">
          
          <ul className="flex flex-col items-center py-2">
            <li className="px-4 py-2 hover:bg-gray-800/50 transition-colors">
              <button onClick={toggleWhatWeDo} className={`block text-gray-300 hover:text-white`}>
                Services
              </button>
              {isWhatWeDoOpen && (
                <ul className="flex flex-col items-center py-2">
                  <li className="px-4 py-2 hover:bg-gray-800/50 transition-colors">
                    <Link href="/services/frontend-development" className={`block ${isActive('/services/frontend-development') ? 'text-blue-500 glow-blue' : 'text-gray-300 hover:text-white'}`}>Frontend Development</Link>
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-800/50 transition-colors">
                    <Link href="/services/mobile-app-development" className={`block ${isActive('/services/mobile-app-development') ? 'text-blue-500 glow-blue' : 'text-gray-300 hover:text-white'}`}>Mobile App Development</Link>
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-800/50 transition-colors">
                    <Link href="/services/ai-machine-learning" className={`block ${isActive('/services/ai-machine-learning') ? 'text-blue-500 glow-blue' : 'text-gray-300 hover:text-white'}`}>AI & Machine Learning Solutions</Link>
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-800/50 transition-colors">
                    <Link href="/services/cloud-devops" className={`block ${isActive('/services/cloud-devops') ? 'text-blue-500 glow-blue' : 'text-gray-300 hover:text-white'}`}>Cloud Solutions & DevOps</Link>
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-800/50 transition-colors">
                    <Link href="/services/data-analysis-data-science" className={`block ${isActive('/services/data-analysis-data-science') ? 'text-blue-500 glow-blue' : 'text-gray-300 hover:text-white'}`}>Data Analysis Data Science</Link>
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-800/50 transition-colors">
                    <Link href="/services/backend-development" className={`block ${isActive('/services/backend-development') ? 'text-blue-500 glow-blue' : 'text-gray-300 hover:text-white'}`}>Backend Development</Link>
                  </li>
                </ul>
              )}
            </li>
            {/* <li className="px-4 py-2 hover:bg-gray-800/50 transition-colors">
              <button onClick={toggleForTalent} className={`block text-gray-300 hover:text-white`}>
                For Talent
              </button>
              {isForTalentOpen && (
                <ul className="flex flex-col items-center py-2">
                  <li className="px-4 py-2 hover:bg-gray-800/50 transition-colors">
                    <Link href="/fortalent/how-to-get-hired" className={`block ${isActive('/fortalent/how-to-get-hired') ? 'text-blue-500 glow-blue' : 'text-gray-300 hover:text-white'}`}>How to get hired</Link>
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-800/50 transition-colors">
                    <Link href="/fortalent/developer-resources" className={`block ${isActive('/fortalent/developer-resources') ? 'text-blue-500 glow-blue' : 'text-gray-300 hover:text-white'}`}>Developer resources</Link>
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-800/50 transition-colors">
                    <Link href="/fortalent/talent-support" className={`block ${isActive('/fortalent/talent-support') ? 'text-blue-500 glow-blue' : 'text-gray-300 hover:text-white'}`}>Talent support</Link>
                  </li>
                </ul>
              )}
            </li> */}
             <li className="px-4 py-2 hover:bg-gray-800/50 transition-colors">
              <Link href="/hiredevelopers" className={`block ${isActive('/hiredevelopers') ? 'text-blue-500 glow-blue' : 'text-gray-300 hover:text-white'}`}>Hire Developers</Link>
            </li>
            <li className="px-4 py-2 hover:bg-gray-800/50 transition-colors">
              <Link href="/blog" className={`block ${isActive('/blog') ? 'text-blue-500 glow-blue' : 'text-gray-300 hover:text-white'}`}>Blog</Link>
            </li>
            <li className="px-4 py-2 hover:bg-gray-800/50 transition-colors">
              <Link href="/about" className={`block ${isActive('/about') ? 'text-blue-500 glow-blue' : 'text-gray-300 hover:text-white'}`}>About Us</Link>
            </li>
            <li className="px-4 py-2 hover:bg-gray-800/50 transition-colors">
              <Link href="/pricing" className={`block ${isActive('/pricing') ? 'text-blue-500 glow-blue' : 'text-gray-300 hover:text-white'}`}>Pricing</Link>
            </li>
            
          </ul>
        </div>
      )}
      
      <style jsx>{`
        .glow-blue {
          text-shadow: 0 0 8px rgba(59, 130, 246, 0.8), 0 0 12px rgba(59, 130, 246, 0.6);
          transition: text-shadow 0.3s ease;
        }
      `}</style>
    </header>
  );
}