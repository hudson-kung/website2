const features = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: 'Instant Gaming',
    description: 'Start playing immediately. No downloads, no waiting. Just click and play your favorite games instantly.',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: 'Quality Guaranteed',
    description: "Not satisfied? Get a full refund within 30 days. Your gaming experience is our top priority.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
      </svg>
    ),
    title: 'Cross-Platform',
    description: 'Play on any device. PC, mobile, tablet - your games sync seamlessly across all platforms.',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    title: 'Expert Support',
    description: 'Our gaming experts are available 24/7 to help you with any questions or technical issues.',
  },
];

const About = () => {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div>
            <span className="text-purple-600 font-semibold text-sm uppercase tracking-wider">About Us</span>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mt-2 mb-6">
              The Ultimate Gaming Destination
            </h2>
            <p className="text-gray-600 text-lg mb-6">
              GameZone has been the premier gaming platform for over 10 years. 
              We're passionate about delivering the best gaming experiences with instant access,
              amazing graphics, and a community of millions of players worldwide.
            </p>
            <p className="text-gray-600 text-lg mb-8">
              Whether you're into action games, creative building, or competitive multiplayer, 
              our platform offers something for every type of gamer with new games added weekly.
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center text-purple-600">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">{feature.title}</h3>
                    <p className="text-gray-600 text-sm">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Image Placeholder */}
          <div className="relative">
            <div className="aspect-square bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl flex items-center justify-center">
              <div className="text-center text-blue-400 p-8">
                <svg className="w-24 h-24 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <span className="text-lg">Add Gaming Community Image</span>
              </div>
            </div>
            
            {/* Stats Card */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-6">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center">
                  <span className="text-2xl font-bold text-white">10+</span>
                </div>
                <div>
                  <p className="text-gray-900 font-bold text-lg">Years Experience</p>
                  <p className="text-gray-500 text-sm">In Gaming</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonials */}
        <div className="mt-24">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-12">What Our Gamers Say</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: 'Alex M.',
                location: 'Online',
                text: 'Best gaming platform ever! The instant play feature is amazing and the game selection is incredible.',
                rating: 5,
              },
              {
                name: 'Sarah K.',
                location: 'Mobile',
                text: 'I love playing on my phone during breaks. The cross-platform sync is perfect for my gaming lifestyle.',
                rating: 5,
              },
              {
                name: 'Mike R.',
                location: 'PC',
                text: 'The graphics quality and performance are outstanding. Worth every penny for the premium experience!',
                rating: 5,
              },
            ].map((testimonial, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl p-6">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-600 mb-4">"{testimonial.text}"</p>
                <div>
                  <p className="font-bold text-gray-900">{testimonial.name}</p>
                  <p className="text-gray-500 text-sm">{testimonial.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
