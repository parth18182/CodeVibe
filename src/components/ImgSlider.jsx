import React, { useEffect, useState } from "react";

function ImgSlider() {
  const images = [
    "https://images.unsplash.com/photo-1602173574767-37ac01994b2a",
    "https://images.unsplash.com/photo-1605100804763-247f67b3557e",
    "https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0",
    "https://images.unsplash.com/photo-1601121141461-9d6647bca1ed",
    "https://images.unsplash.com/photo-1617038220319-276d3cfab638",
  ];

  const [index, setIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (isHovered) return;

    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isHovered, images.length]);

  const prevSlide = () => {
    setIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % images.length);
  };

  return (
    <div
      className="relative w-full h-[60vh] overflow-hidden mt-4"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {images.map((img, i) => (
          <img
            key={i}
            src={img}
            className="w-full h-[80vh] object-cover shrink-0"
          />
        ))}
      </div>

      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white px-4 py-2 rounded-full shadow"
      >
        ◀
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white px-4 py-2 rounded-full shadow"
      >
        ▶
      </button>
    </div>
  );
}

export default ImgSlider;