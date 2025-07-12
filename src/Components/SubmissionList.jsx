import React, { useState, useEffect } from "react";
import database from "../firebase/firebase"; // Correct path (ensure folder is lowercase 'firebase')
import { ref, onValue } from "firebase/database"; // Corrected import from Firebase SDK
import { Link } from "react-router-dom";

function SubmissionList() {
  const [submissions, setSubmissions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const submissionsRef = ref(database, "submissions");
    onValue(submissionsRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const submissionList = Object.keys(data).map((key) => ({
          id: key,
          ...data[key]
        }));
        setSubmissions(submissionList);
      } else {
        setSubmissions([]);
      }
      setLoading(false);
    }, (error) => {
      console.error("Error fetching submissions:", error);
      setError("Failed to load submissions. Please try again later.");
      setLoading(false);
    });
  }, []);

  return (
    <section className="min-h-screen bg-black text-white py-12 sm:py-16 px-4 sm:px-6 md:px-8">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8 sm:mb-12 bg-gradient-to-r from-red-500 to-red-700 bg-clip-text text-transparent animate-fade-in">
          Submitted Forms
        </h2>
        {loading ? (
          <p className="text-gray-400 text-center">Loading submissions...</p>
        ) : error ? (
          <p className="text-red-500 text-center">{error}</p>
        ) : submissions.length === 0 ? (
          <p className="text-gray-400 text-center">No submissions yet.</p>
        ) : (
          <ul className="space-y-6">
            {submissions.map((submission) => (
              <li key={submission.id} className="bg-[#1a1a1a] p-6 rounded-xl shadow-2xl animate-slide-up">
                <p><strong>Name:</strong> {submission.fullName}</p>
                <p><strong>Email:</strong> {submission.email}</p>
                <p><strong>Phone:</strong> {submission.phone}</p>
                {submission.company && <p><strong>Company:</strong> {submission.company}</p>}
                <p><strong>Role:</strong> {submission.role}</p>
                <p><strong>Interests:</strong> {submission.interests.join(", ")}</p>
                {submission.message && <p><strong>Message:</strong> {submission.message}</p>}
                <p><strong>Submitted:</strong> {new Date(submission.timestamp).toLocaleString()}</p>
              </li>
            ))}
          </ul>
        )}
        <div className="mt-6 text-center">
          <Link
            to="/form"
            className="text-gray-300 hover:text-red-500 transition-colors duration-300 text-sm sm:text-base"
          >
            Back to Form
          </Link>
        </div>
      </div>
      <style jsx>{`
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
      `}</style>
    </section>
  );
}

export default SubmissionList;