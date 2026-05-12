"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const images = [
  "/images/hero/slide1.jpg",
  "/images/hero/slide2.jpg",
  "/images/hero/slide3.jpg",
  "/images/hero/slide4.jpg",
  "/images/hero/slide5.jpg",
  "/images/hero/slide6.jpg",
  "/images/hero/slide7.jpg",
  "/images/hero/slide8.jpg",
  "/images/hero/slide9.jpg",
  "/images/hero/slide10.jpg",
  "/images/hero/slide11.jpg",
  "/images/hero/slide12.jpg",
  "/images/hero/slide13.jpg",
  "/images/hero/slide14.jpg",
  "/images/hero/slide15.jpg",
];

export function HeroImageSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-[540px] w-full bg-gray-900">
      <AnimatePresence initial={false}>
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          <img
            src={images[currentIndex]}
            alt={`Hero slide ${currentIndex + 1}`}
            className="h-full w-full object-cover"
          />
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
