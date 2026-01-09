import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <nav className="fixed w-full bg-white/95 backdrop-blur-lg shadow-lg z-50 border-b border-gray-100">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-purple-700 rounded-xl flex items-center justify-center shadow-lg">
            <span className="text-white font-bold text-lg">GZ</span>
          </div>
          <div>
            <span className="text-xl font-black text-purple-600">GameZone</span>
            <span className="hidden sm:inline text-gray-600 text-sm ml-2 font-medium">Store</span>
          </div>
        </div>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <button 
            onClick={() => scrollToSection('home')} 
            className="relative text-gray-600 hover:text-purple-600 font-medium transition-all duration-300 text-sm group"
          >
            Home
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-purple-600 transition-all duration-300 group-hover:w-full"></span>
          </button>
          <button 
            onClick={() => scrollToSection('services')} 
            className="relative text-gray-600 hover:text-purple-600 font-medium transition-all duration-300 text-sm group"
          >
            Games
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-purple-600 transition-all duration-300 group-hover:w-full"></span>
          </button>
          <button 
            onClick={() => scrollToSection('about')} 
            className="relative text-gray-600 hover:text-purple-600 font-medium transition-all duration-300 text-sm group"
          >
            About
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-purple-600 transition-all duration-300 group-hover:w-full"></span>
          </button>
          <button 
            onClick={() => scrollToSection('contact')} 
            className="relative text-gray-600 hover:text-purple-600 font-medium transition-all duration-300 text-sm group"
          >
            Contact
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-purple-600 transition-all duration-300 group-hover:w-full"></span>
          </button>
          <a 
            href="#" 
            className="group relative bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl text-sm ml-6 overflow-hidden"
          >
            <span className="relative z-10 flex items-center gap-2">
              <svg className="w-4 h-4 group-hover:rotate-12 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Play Now
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-700 to-purple-800 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
          </a>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden flex items-center gap-3">
          <a href="#" className="bg-gradient-to-r from-purple-600 to-purple-700 text-white p-3 rounded-xl shadow-lg">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </a>
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-700 focus:outline-none p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 px-4 py-4 space-y-2">
          <button 
            onClick={() => scrollToSection('home')} 
            className="block w-full text-left py-3 px-4 text-gray-700 hover:text-purple-600 hover:bg-purple-50 font-medium rounded-lg transition-all duration-200"
          >
            Home
          </button>
          <button 
            onClick={() => scrollToSection('services')} 
            className="block w-full text-left py-3 px-4 text-gray-700 hover:text-purple-600 hover:bg-purple-50 font-medium rounded-lg transition-all duration-200"
          >
            Services
          </button>
          <button 
            onClick={() => scrollToSection('about')} 
            className="block w-full text-left py-3 px-4 text-gray-700 hover:text-purple-600 hover:bg-purple-50 font-medium rounded-lg transition-all duration-200"
          >
            About
          </button>
          <button 
            onClick={() => scrollToSection('contact')} 
            className="block w-full text-left py-3 px-4 text-gray-700 hover:text-purple-600 hover:bg-purple-50 font-medium rounded-lg transition-all duration-200"
          >
            Contact
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
