import React from 'react';
// import bgVideo from '../videos/vid1.mp4'
const profiles = [
  {
    name: 'Ali Raza',
    role: 'Businessman',
    description: 'Ali is a seasoned entrepreneur with over 10 years of experience in the textile industry.',
    image: 'https://randomuser.me/api/portraits/men/32.jpg',
    date: 'April 10, 2025',
  },
  {
    name: 'Sara Khan',
    role: 'Digital Marketer',
    description: 'Sara specializes in SEO and content marketing, helping brands grow their online presence.',
    image: 'https://randomuser.me/api/portraits/women/44.jpg',
    date: 'March 22, 2025',
  },
  {
    name: 'Ahmed Ali',
    role: 'Software Engineer',
    description: 'Ahmed is a full-stack developer with a passion for building scalable web applications.',
    image: 'https://randomuser.me/api/portraits/men/85.jpg',
    date: 'February 15, 2025',
  },
];

const Hero = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover position-center "
        src="/videos/vid1.mp4"
        autoPlay
        muted
        loop
        playsInline
      ></video>

      {/* Dark Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-opacity-70"></div>

      {/* Content */}
      <div className="relative z-10 flex items-center justify-end h-full px-8">
        <div className="grid gap-6">
          {profiles.map((profile, index) => (
            <div
              key={index}
              className="bg-black text-white rounded-lg shadow-lg p-4 flex items-center w-[400px] hover:scale-105 transition-transform duration-300 border border-white/10"
            >
              {/* Left: Text */}
              <div className="flex-1">
                <button className="bg-red-600 text-white px-3 py-1 rounded-full text-sm mb-2">
                  {profile.role}
                </button>
                <h3 className="text-lg font-semibold">{profile.name}</h3>
                <p className="text-sm text-gray-300">{profile.description}</p>
                <p className="text-xs text-gray-400 mt-2">{profile.date}</p>
              </div>

              {/* Right: Image */}
              <div className="w-24 h-24 ml-4">
                <img
                  src={profile.image}
                  alt={profile.name}
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
