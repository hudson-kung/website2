const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="bg-purple-600 py-8">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Ready to Level Up Your Gaming?
          </h3>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="#"
              className="inline-flex items-center justify-center gap-2 bg-white text-purple-600 hover:bg-gray-100 font-bold py-3 px-8 rounded-full transition-all duration-300"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
              </svg>
              Start Playing Now
            </a>
            <button
              onClick={() => scrollToSection('services')}
              className="inline-flex items-center justify-center gap-2 border-2 border-white text-white hover:bg-white/10 font-bold py-3 px-8 rounded-full transition-all duration-300"
            >
              Browse Games
            </button>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">GZ</span>
              </div>
              <div>
                <span className="text-xl font-bold text-white">GameZone</span>
                <span className="text-gray-400 text-sm ml-1">Store</span>
              </div>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              The world's premier gaming destination. We're committed to delivering the best 
              gaming experiences with instant access, amazing graphics, and a global community.
            </p>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li><button onClick={() => scrollToSection('home')} className="text-gray-400 hover:text-white transition">Home</button></li>
              <li><button onClick={() => scrollToSection('services')} className="text-gray-400 hover:text-white transition">Games</button></li>
              <li><button onClick={() => scrollToSection('about')} className="text-gray-400 hover:text-white transition">About Us</button></li>
              <li><button onClick={() => scrollToSection('contact')} className="text-gray-400 hover:text-white transition">Contact</button></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Gaming Info</h3>
            <ul className="space-y-3 text-gray-400">
              <li><a href="#" className="hover:text-white transition">24/7 Support</a></li>
              <li>Global Servers<br />All Platforms</li>
              <li>Instant Access<br />No Downloads</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500">
          <p>&copy; {new Date().getFullYear()} GameZone Store. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
