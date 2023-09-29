import React, { useState } from "react";

const LazyImage = ({ smallSrc, largeSrc, alt }) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  return (
    <>
      {imageLoaded ? (
        <img
          className="w-full select-none"
          src={largeSrc}
          alt={alt}
          onLoad={handleImageLoad}
          loading="lazy"
        />
      ) : (
        <img
          className="w-full select-none"
          src={smallSrc}
          alt={alt}
          onLoad={handleImageLoad}
          loading="lazy"
        />
      )}
    </>
  );
};

export default LazyImage;
