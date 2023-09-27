import React from "react";
import { Link } from "react-router-dom";

const PreFooterSection = () => {
  return (
    <div className="text-center flex gap-2 flex-col items-center border-t-2 py-20">
      <h1 className="text-6xl flex flex-col">
        Be the first to access{" "}
        <span className="text-secondary font-semibold">Healthco AI</span>
        <span className="curved-underline "></span>
      </h1>
      <p>
        Join the Healthco AI Revolution Today and Secure Your Spot <br /> on Our
        Exclusive List.
      </p>
      <Link
        to="/chat"
        className="capitalize shadow-md hover:shadow-lg bg-primary hover:bg-primaryHover transition-all text-white p-2 px-4 rounded-xl"
      >
        Get started
      </Link>
    </div>
  );
};

export default PreFooterSection;
