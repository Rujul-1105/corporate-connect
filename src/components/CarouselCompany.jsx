import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import '../components/carousel.css';

const images = [
  { src: "./images/1.png", alt: "Image 1" },
  { src: "./images/2.png", alt: "Image 2" },
  { src: "./images/3.png", alt: "Image 3" },
  { src: "./images/4.png", alt: "Image 4" },
  { src: "./images/5.png", alt: "Image 5" },
  { src: "./images/6.png", alt: "Image 6" },
  { src: "./images/7.png", alt: "Image 7" },
  { src: "./images/8.png", alt: "Image 8" },
  { src: "./images/9.png", alt: "Image 9" },
  { src: "./images/10.png", alt: "Image 10" }
];

const itemsPerPage = 6;

const Carousel = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % (images.length - itemsPerPage + 1));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex items-center justify-center overflow-hidden bg1">
      <div className="relative w-[1200px] overflow-hidden">
        <motion.div
          className="flex"
          animate={{ x: `-${index * (100 / itemsPerPage)}%` }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          style={{ width: `${(images.length / itemsPerPage) * 100}%`, display: "flex" }}
        >
          {images.map((image, i) => (
            <div
              key={image.src}
              className="w-[16.66%] flex-shrink-0 px-1"
            >
              <motion.img
                src={image.src}
                alt={image.alt}
                className="w-full h-60 object-cover rounded-lg m-5"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.8 }}
              />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Carousel;