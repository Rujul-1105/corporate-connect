import { useState, useEffect, useMemo } from "react";
import { motion } from "framer-motion";
import "./CarouselCompany.css";

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
  // Calculate images per slide based on window width.
  const getItemsPerPage = () => {
    if (window.innerWidth < 480) {
      return 1; // For small screens
    } else if (window.innerWidth < 768) {
      return 3; // For tablets
    } else {
      return 6; // For desktops
    }
  };

  const [itemsPerPage, setItemsPerPage] = useState(getItemsPerPage());
  const [index, setIndex] = useState(0);

  // Update itemsPerPage on resize.
  useEffect(() => {
    const handleResize = () => {
      setItemsPerPage(getItemsPerPage());
      setIndex(0);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Total slides based on images array.
  const totalSlides = images.length - itemsPerPage + 1;
  const memoizedImages = useMemo(() => images, []);

  // Auto-slide every 3 seconds.
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % totalSlides);
    }, 3000);
    return () => clearInterval(interval);
  }, [totalSlides]);

  return (
    <div className="carousel-company">
      <h2 className="carousel-heading">Previous Visitors</h2>
      <div className="carousel-slider-wrapper">
        <motion.div
          className="carousel-slider"
          animate={{ x: `-${index * (100 / itemsPerPage)}%` }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          style={{
            width: `${(memoizedImages.length / itemsPerPage) * (window.innerWidth < 480 ? 10 : 100)}%`,
          }}
        >
          {memoizedImages.map((image) => (
            <div
              key={image.src}
              className="carousel-item"
              style={{ flex: `0 0 ${100 / itemsPerPage}%` }}
            >
              <motion.img
                src={image.src}
                alt={image.alt}
                className="carousel-img"
                style={{
                  width: window.innerWidth < 480 ? "80%" : "100%", // Smaller size for mobiles
                  height: "auto",
                  margin: "0 auto", // Center the image
                  display: "block", // Ensure block-level for centering
                }}
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
  );
};

export default CarouselCompany;