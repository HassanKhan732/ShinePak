import React from "react";
import { Link } from "react-router-dom";

const storeItems = [
  {
    id: 1,
    name: "Tech Gadgets",
    description: "Latest smart devices and accessories.",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=400&q=80",
    price: "$99.99",
  },
  {
    id: 2,
    name: "E-books",
    description: "Digital books on tech and marketing.",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=400&q=80",
    price: "$19.99",
  },
  {
    id: 3,
    name: "Online Courses",
    description: "Learn SEO, coding, and more.",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=400&q=80",
    price: "$49.99",
  },
];

const Store = () => {
  return (
    <section className="bg-black text-white py-12 px-6 md:px-16 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-8">Store</h1>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {storeItems.map((item) => (
            <div
              key={item.id}
              className="bg-[#222] rounded-xl shadow-lg p-4 flex flex-col items-center text-center hover:scale-105 transition-transform duration-300"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-lg font-semibold">{item.name}</h3>
              <p className="text-sm text-gray-300">{item.description}</p>
              <p className="text-sm font-bold text-red-500 mt-2">{item.price}</p>
            </div>
          ))}
        </div>
        <Link
          to="/"
          className="mt-8 inline-block bg-red-600 text-white px-6 py-3 rounded-lg text-base font-semibold hover:bg-red-700 transition-colors duration-300"
        >
          Back to Home
        </Link>
      </div>
    </section>
  );
};

export default Store;