import React from 'react';

const Services = () => {
  return (
    <section className="min-h-screen bg-black text-white py-12 sm:py-16 px-4 sm:px-6 md:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-center mb-6 bg-gradient-to-r from-red-500 to-red-700 bg-clip-text text-transparent animate-fade-in">
          Our Services
        </h1>
        <p className="text-lg sm:text-xl text-gray-300 text-center mb-12 animate-slide-up">
          Comprehensive digital solutions to elevate your online presence.
        </p>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <div className="bg-[#1a1a1a] p-6 rounded-lg shadow-lg border border-red-500/20 animate-slide-up">
            <h2 className="text-xl font-semibold text-red-500 mb-2">SEO Optimization</h2>
            <p className="text-gray-300">Boost your search engine rankings with tailored SEO strategies.</p>
          </div>
          <div className="bg-[#1a1a1a] p-6 rounded-lg shadow-lg border border-red-500/20 animate-slide-up">
            <h2 className="text-xl font-semibold text-red-500 mb-2">Web Development</h2>
            <p className="text-gray-300">Build responsive, high-performance websites customized to your needs.</p>
          </div>
          <div className="bg-[#1a1a1a] p-6 rounded-lg shadow-lg border border-red-500/20 animate-slide-up">
            <h2 className="text-xl font-semibold text-red-500 mb-2">Digital Marketing</h2>
            <p className="text-gray-300">Engage your audience with impactful marketing campaigns.</p>
          </div>
          <div className="bg-[#1a1a1a] p-6 rounded-lg shadow-lg border border-red-500/20 animate-slide-up">
            <h2 className="text-xl font-semibold text-red-500 mb-2">E-commerce Solutions</h2>
            <p className="text-gray-300">Create seamless online stores for maximum conversions.</p>
          </div>
          <div className="bg-[#1a1a1a] p-6 rounded-lg shadow-lg border border-red-500/20 animate-slide-up">
            <h2 className="text-xl font-semibold text-red-500 mb-2">Content Creation</h2>
            <p className="text-gray-300">Craft compelling content to connect with your audience.</p>
          </div>
          <div className="bg-[#1a1a1a] p-6 rounded-lg shadow-lg border border-red-500/20 animate-slide-up">
            <h2 className="text-xl font-semibold text-red-500 mb-2">Analytics & Reporting</h2>
            <p className="text-gray-300">Track performance with detailed insights and reports.</p>
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

export default Services;