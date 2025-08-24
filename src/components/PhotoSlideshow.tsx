import React, { useState, useEffect } from 'react';

interface PhotoSlideshowProps {
  className?: string;
}

const PhotoSlideshow: React.FC<PhotoSlideshowProps> = ({ className = "" }) => {
  const images = [
    "https://d64gsuwffb70l.cloudfront.net/687ed27de48988a90b08e976_1755905642343_92c4a88a.jpg",
    "https://d64gsuwffb70l.cloudfront.net/687ed27de48988a90b08e976_1755905643565_3aa4ef89.jpg",
    "https://d64gsuwffb70l.cloudfront.net/687ed27de48988a90b08e976_1755905644363_e4cd917f.jpg",
    "https://d64gsuwffb70l.cloudfront.net/687ed27de48988a90b08e976_1755905644988_2b1eed06.jpg",
    "https://d64gsuwffb70l.cloudfront.net/687ed27de48988a90b08e976_1755921948251_16081531.jpeg",
    "https://d64gsuwffb70l.cloudfront.net/687ed27de48988a90b08e976_1755908618767_0da9937a.jpeg"
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3500); // 3.5 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className={`bg-gray-100 h-56 rounded-lg mb-6 flex items-center justify-center border-2 border-gray-300 overflow-hidden ${className}`}>
      <img 
        src={images[currentIndex]}
        alt="Happy mature Black couples"
        className="w-full h-full object-cover object-center transition-opacity duration-1000 filter brightness-110 contrast-105 saturate-110"
        style={{ objectPosition: 'center center' }}
      />
    </div>
  );
};

export default PhotoSlideshow;