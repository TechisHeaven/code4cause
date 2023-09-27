import React from "react";

const BackgroundCircle = () => {
  return (
    <div className="absolute -top-10 left-1/2 translate-x-[-50%] -z-10">
      <div className="circle bg-transparent border-2 border-textMain/5 rounded-full m-auto w-[40vw] aspect-square -translate-y-20"></div>
      <div className="circle bg-transparent border-2 border-textMain/5 rounded-full w-[50vw] aspect-square -translate-y-20 -mt-[45vw] m-auto"></div>
      <div className="circle bg-transparent border-2 border-textMain/5 rounded-full w-[60vw] aspect-square -translate-y-40 -mt-[50vw] m-auto"></div>
    </div>
  );
};

export default BackgroundCircle;
