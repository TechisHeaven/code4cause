import React from "react";
import Steps from "./Steps/Steps";

const HowWork = () => {
  return (
    <div className="max-w-[1280px] m-auto p-8 px-32 max-[1024px]:px-20 my-40">
      <div className="wrapper flex items-center gap-12 max-[768px]:flex-col max-[768px]:my-20">
        <div className="imageContainer p-8 border-2 rounded-xl bg-white border-secondary shadow-2xl shadow-secondary/70 hover:shadow-secondary/80 transition-all">
          <img src="./doctor-sitting.png" alt="doctor-sitting" />
        </div>
        <div className="description">
          <h1 className="text-3xl font-semibold">How it works</h1>
          <p>
            Here's a breakdown of how{" "}
            <span className="text-secondary">Healthco</span> ai take your health
            to better way.
          </p>
        </div>
      </div>
      <Steps />
    </div>
  );
};

export default HowWork;
