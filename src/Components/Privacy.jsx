import React from 'react';

const Privacy = () => {
  return (
    <section className="min-h-screen bg-black text-white py-12 sm:py-16 px-4 sm:px-6 md:px-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-center mb-6 bg-gradient-to-r from-red-500 to-red-700 bg-clip-text text-transparent animate-fade-in">
          Privacy Policy
        </h1>
        <div className="text-lg sm:text-xl text-gray-300 space-y-6 animate-slide-up">
          <p>
            At ShinePak, we value your privacy and are committed to protecting your personal information. This Privacy Policy outlines how we collect, use, and safeguard your data.
          </p>
          <h2 className="text-xl sm:text-2xl font-semibold text-red-500">Information We Collect</h2>
          <p>
            We may collect personal information such as your name, email, and contact details when you interact with our services, including our contact forms and analytics tools.
          </p>
          <h2 className="text-xl sm:text-2xl font-semibold text-red-500">How We Use Your Information</h2>
          <p>
            Your data is used to provide and improve our services, respond to inquiries, and deliver personalized marketing content. We do not share your information with third parties without your consent, except as required by law.
          </p>
          <h2 className="text-xl sm:text-2xl font-semibold text-red-500">Data Security</h2>
          <p>
            We implement industry-standard security measures to protect your data from unauthorized access or disclosure.
          </p>
          <h2 className="text-xl sm:text-2xl font-semibold text-red-500">Your Rights</h2>
          <p>
            You have the right to access, update, or delete your personal information. Contact us at support@shinepak.com to exercise these rights.
          </p>
          <p>
            For more details, please contact us via our <a href="/contact" className="text-red-500 hover:underline">Contact page</a>.
          </p>
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

export default Privacy;