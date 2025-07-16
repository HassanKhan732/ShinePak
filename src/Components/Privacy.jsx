import React from 'react';

const Privacy = () => {
  return (
    <section className="min-h-screen bg-black text-white py-12 sm:py-16 px-4 sm:px-6 md:px-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-center mb-6 bg-gradient-to-r from-red-500 to-red-700 bg-clip-text text-transparent animate-fade-in">
          Privacy Policy: Shining Safely
        </h1>
        <div className="text-lg sm:text-xl text-gray-300 space-y-6 animate-slide-up">
          <p>
            At ShinePak, we’re committed to empowering the brightest talents and businesses while safeguarding your privacy. This Privacy Policy explains how we collect, use, and protect your data to help you shine securely in the digital world. 💫 #ShinePak
          </p>
          <h2 className="text-xl sm:text-2xl font-semibold text-red-500">Information We Collect</h2>
          <p>
            We collect minimal personal information, such as your name, email, or contact details, when you join our community through forms or interact with our services to promote your talent or business.
          </p>
          <h2 className="text-xl sm:text-2xl font-semibold text-red-500">How We Use Your Information</h2>
          <p>
            Your data helps us amplify your brilliance by delivering tailored services, responding to your inquiries, and creating personalized marketing strategies. We never share your information with third parties without your consent, except as required by law.
          </p>
          <h2 className="text-xl sm:text-2xl font-semibold text-red-500">Data Security</h2>
          <p>
            We use industry-leading security measures to protect your data, ensuring that your journey to shine with ShinePak is safe from unauthorized access or disclosure.
          </p>
          <h2 className="text-xl sm:text-2xl font-semibold text-red-500">Your Rights</h2>
          <p>
            You have full control over your data. You can access, update, or delete your personal information at any time. Join us in shining brightly by contacting us at support@shinepak.com to exercise your rights.
          </p>
          <p>
            For more details, please reach out via our Contact page
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