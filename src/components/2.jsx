import { useState, useEffect, useMemo } from "react";
import { motion } from "framer-motion";
import '../components/carousel.css';

const images = [
  { src: "./images/c1.png", alt: "Image 1" },
  { src: "./images/c2.png", alt: "Image 2" },
  { src: "./images/c3.png", alt: "Image 3" },
  { src: "./images/c4.png", alt: "Image 4" },
  { src: "./images/c5.png", alt: "Image 5" },
  { src: "./images/c6.png", alt: "Image 6" },
  { src: "./images/c7.png", alt: "Image 7" },
  { src: "./images/c8.png", alt: "Image 8" },
  { src: "./images/c9.png", alt: "Image 9" },
  { src: "./images/c10.png", alt: "Image 10" },
];

const CarouselCompany = () => {
  // Determine itemsPerPage based on window width:
  // Mobile (<480px): 1 image per slide,
  // Medium (<768px): 3 images per slide,
  // Otherwise: 6 images per slide.
  const getItemsPerPage = () => {
    if (window.innerWidth < 480) {
      return 1;
    } else if (window.innerWidth < 768) {
      return 3;
    } else {
      return 6;
    }
  };

  const [itemsPerPage, setItemsPerPage] = useState(getItemsPerPage());
  const [index, setIndex] = useState(0);

  // Update itemsPerPage on window resize.
  useEffect(() => {
    const handleResize = () => {
      setItemsPerPage(getItemsPerPage());
      setIndex(0); // Reset slide index on resize if needed.
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Compute totalSlides based on itemsPerPage.
  const totalSlides = images.length - itemsPerPage + 1;

  // Memoize images array.
  const memoizedImages = useMemo(() => images, []);

  // Auto-slide every 3 seconds.
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % totalSlides);
    }, 3000);
    return () => clearInterval(interval);
  }, [totalSlides]);

  return (
    <div className="flex items-center justify-center overflow-hidden py-10">
      <div className="w-full flex flex-col items-center px-4">
        <h2 className="text-center text-4xl mb-8 font-bold text-gray-800">
          Previous Visitors
        </h2>
        <div className="relative w-full max-w-7xl overflow-hidden">
          <motion.div
            className="flex"
            animate={{ x: `-${index * (100 / itemsPerPage)}%` }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            style={{
              width: `${(memoizedImages.length / itemsPerPage) * 100}%`,
            }}
          >
            {memoizedImages.map((image) => (
              <div
                key={image.src}
                className="carousel-item px-2"
                style={{ flex: `0 0 ${100 / itemsPerPage}%` }}
              >
                <motion.img
                  src={image.src}
                  alt={image.alt}
                  className="w-60 h-40 sm:h-60 object-cover rounded-lg shadow-md transform hover:scale-105 transition duration-300 m-2 sm:m-5"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.8 }}
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default CarouselCompany;
