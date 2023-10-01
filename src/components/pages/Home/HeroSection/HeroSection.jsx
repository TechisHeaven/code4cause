import React from "react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <div className="hero-section">
      <div className="heading flex items-center text-center gap-4 flex-col py-8">
        <h1 className="md:text-6xl sm:text-5xl text-4xl  flex flex-col font-bold">
          Meet Your Virtual Healthcare Partner
          <span className="text-secondary">Your Personal Doctor AI</span>
          <span className="curved-underline"></span>
        </h1>
        <p className="md:text-xl md:px-32 xs:text-xs sm:text-sm  sm:px-12">
          Your AI health partner - 24/7 support and expertise for your
          well-being, always just a chat away. Your personal doctor.
        </p>
        <Link
          to="/chat"
          className="capitalize shadow-md hover:shadow-lg font-medium bg-primary hover:bg-primaryHover transition-all text-white p-2 px-4 rounded-md"
        >
          get started
        </Link>
      </div>
    </div>
  );
};

export default HeroSection;
