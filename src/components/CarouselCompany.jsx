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

const itemsPerPage = 6;
const totalSlides = images.length - itemsPerPage + 1;

const Carousel = () => {
  const [index, setIndex] = useState(0);

  const memoizedImages = useMemo(() => images, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % totalSlides);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex items-center justify-center overflow-hidden pt-10 pb-10">
      <div className='flex flex-col'>
        <div className='text-center text-4xl mb-4 font-bold'>
          Previous Visitors
        </div>
        <div className="relative w-full max-w-[1400px] overflow-hidden">
          <motion.div
            className="flex"
            animate={{ x: `-${index * (100 / itemsPerPage)}%` }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            style={{ width: `${(memoizedImages.length / itemsPerPage) * 100}%`, display: "flex" }}
          >
            {memoizedImages.map((image, i) => (
              <div
                key={image.src}
                className="w-[12.75%] flex-shrink-0 px-1"
              >
                <motion.img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-60 object-cover rounded-lg m-5"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 0.8 }}
                  exit={{ opacity: 0, scale: 0.9 }}
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

export default Carousel;
