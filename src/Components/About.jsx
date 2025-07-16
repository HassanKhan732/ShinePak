import React from 'react';

const About = () => {
  return (
    <section className="min-h-screen bg-black text-white py-12 sm:py-16 px-4 sm:px-6 md:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-center mb-6 bg-gradient-to-r from-red-500 to-red-700 bg-clip-text text-transparent animate-fade-in">
          ShinePak: Empowering Brilliance
        </h1>
        <p className="text-lg sm:text-xl text-gray-300 text-center mb-8 animate-slide-up">
          ShinePak is dedicated to promoting the brightest talents and businesses, helping them shine in the digital world. Join us to unleash your potential with innovative SEO, web development, and marketing solutions. 💫 #ShinePak
        </p>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mt-12">
          <div className="bg-[#1a1a1a] p-6 rounded-lg shadow-lg border border-red-500/20 animate-slide-up">
            <h2 className="text-xl font-semibold text-red-500 mb-2">Our Mission</h2>
            <p className="text-gray-300">To spotlight exceptional talents and businesses, driving their success through cutting-edge digital strategies.</p>
          </div>
          <div className="bg-[#1a1a1a] p-6 rounded-lg shadow-lg border border-red-500/20 animate-slide-up">
            <h2 className="text-xl font-semibold text-red-500 mb-2">Our Community</h2>
            <p className="text-gray-300">A vibrant network of creators, innovators, and businesses collaborating to shine brighter together.</p>
          </div>
          <div className="bg-[#1a1a1a] p-6 rounded-lg shadow-lg border border-red-500/20 animate-slide-up">
            <h2 className="text-xl font-semibold text-red-500 mb-2">Our Promise</h2>
            <p className="text-gray-300">Delivering tailored solutions to make your brand stand out and achieve unparalleled digital success.</p>
          </div>
        </div>
      </div>
      <style>
        {`
          .animate-fade-in {
            animation: fadeIn 1s ease-out;
          }
          .animate-slide-up {
            animation: slideUp 0.8s ease-out;
          }
          @keyframes fadeIn {
            0% { opacity: 0; }
            100% { opacity: 1; }
          }
          @keyframes slideUp {
            0% { transform: translateY(20px); opacity: 0; }
            100% { transform: translateY(0); opacity: 1; }
          }
        `}
      </style>
    </section>
  );
};

export default About;