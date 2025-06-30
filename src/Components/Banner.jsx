import React from "react";

const Banner = () => {
  return (
    <>
      <style>
        {`
          .banner-container {
            position: relative;
            overflow: hidden;
            border-radius: 0.5rem;
            max-width: 1280px;
            margin: 0 auto;
                height: 16rem;

          }
          .banner-image {
            width: 100%;
            height: 400px;
            object-fit: cover;
            transition: opacity 0.5s ease-in-out;
          }
          .banner-text-overlay {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            display: flex;
            align-items: center;
            justify-content: center;
            opacity: 0;
            transition: opacity 0.5s ease-in-out;
          }
          .banner-text {
            font-size: 2.25rem;
            font-weight: bold;
            color: #ffffff;
            text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
          }
          .banner-container:hover .banner-image {
            opacity: 0.5;
          }
          .banner-container:hover .banner-text-overlay {
            opacity: 1;
          }
        `}
      </style>
      <section style={{ backgroundColor: "#000", padding: "3rem 1.5rem" }}>
        <div className="banner-container">
          {/* Image */}
          <img
            src="/images/bnr2.webp" // Replace with your image path
            alt="Banner"
            className="banner-image"
            onError={(e) => console.log("Image failed to load:", e)}
          />
          {/* Text Overlay */}
          <div className="banner-text-overlay">
            <h2 className="banner-text">Grow With ShinePak</h2>
          </div>
        </div>
      </section>
    </>
  );
};

export default Banner;