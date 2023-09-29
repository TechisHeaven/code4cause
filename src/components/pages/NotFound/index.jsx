import React from "react";

const index = () => {
  return (
    <div className="flex items-center justify-center text-4xl flex-col my-8">
      <p className="flex flex-col">
        <span className="font-extralight text-7xl">Sorry</span> we couldn't find
        that page
      </p>

      <img src={"./dog.webp"} alt="dog 404" />
    </div>
  );
};

export default index;
