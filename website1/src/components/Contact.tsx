const Contact = () => {
  return (
    <section id="contact" className="section-padding gradient-blue">
      <div className="container mx-auto">
        <div className="text-center max-w-4xl mx-auto">
          <span className="text-cyan-300 font-semibold text-sm uppercase tracking-wider">Contact Us</span>
          <h2 className="text-3xl md:text-5xl font-bold mt-2 mb-6 text-white">
            Ready to Start Gaming?
          </h2>
          <p className="text-blue-100 text-lg mb-12">
            Join thousands of players already enjoying the best gaming experience. Start playing now!
          </p>

          {/* Main Call Button */}
          <div className="bg-white rounded-2xl shadow-2xl p-12">
            <div className="text-center">
              <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
                </svg>
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">Start Playing Now!</h3>
              <p className="text-gray-600 text-lg mb-8">
                Get instant access to hundreds of games. No waiting, no downloads - just pure gaming fun!
              </p>
              <a
                href="#"
                className="inline-flex items-center justify-center gap-3 bg-purple-600 hover:bg-purple-700 text-white font-bold py-5 px-12 rounded-full transition-all duration-300 transform hover:scale-105 shadow-xl text-2xl"
              >
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Play Now
              </a>
              <p className="text-gray-500 mt-6">
                Available 24/7 • All Devices Supported • Instant Access
              </p>
            </div>
          </div>

          {/* Contact Info Cards */}
          <div className="grid md:grid-cols-3 gap-8 mt-16">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-white">
              <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="font-bold text-lg mb-2">Platform</h3>
              <p className="text-blue-100">
                Play on PC, Mobile, Tablet<br />
                Cross-Platform Sync
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-white">
              <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-bold text-lg mb-2">Availability</h3>
              <p className="text-blue-100">
                24/7 Access<br />
                Global Servers
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-white">
              <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="font-bold text-lg mb-2">Performance</h3>
              <p className="text-blue-100">
                Instant Play: 0ms<br />
                HD Graphics: 60fps
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
