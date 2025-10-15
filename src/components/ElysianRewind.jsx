import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";

function ElysianRewind() {
  const galleryRef = useRef(null);
  const [scrollPosition, setScrollPosition] = useState(0);

  // Sample images for the gallery - you can replace these with your actual images
  const galleryImages = [
    { id: 1, url: "/heroImage.png", title: "Event 2024 - Day 1" },
    { id: 2, url: "/elysian-elements.png", title: "Opening Ceremony" },
    { id: 3, url: "/heroImage.png", title: "Tech Showcase" },
    { id: 4, url: "/elysian-elements.png", title: "Innovation Hub" },
    { id: 5, url: "/heroImage.png", title: "Grand Finale" },
    { id: 6, url: "/elysian-elements.png", title: "Highlights" },
    { id: 7, url: "/heroImage.png", title: "Behind the Scenes" },
  ];

  const handleScroll = () => {
    if (galleryRef.current) {
      const scrollLeft = galleryRef.current.scrollLeft;
      const maxScroll =
        galleryRef.current.scrollWidth - galleryRef.current.clientWidth;
      setScrollPosition(scrollLeft / maxScroll);
    }
  };

  return (
    <div className="bg-black py-20 overflow-hidden">
      {/* Clean Infinite Scrolling Text */}
      <div className="mb-20 relative h-24 flex items-center overflow-hidden bg-black">
        <div className="absolute inset-0 flex">
          <motion.div
            className="flex whitespace-nowrap"
            animate={{
              x: ["0%", "-50%"],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 25,
                ease: "linear",
              },
            }}
          >
            {[...Array(20)].map((_, index) => (
              <span
                key={index}
                className="text-7xl lg:text-8xl font-bold text-white mx-12 tracking-wider"
                style={{ fontFamily: "'Cinzel', serif" }}
              >
                ELYSIAN REWIND
              </span>
            ))}
          </motion.div>
        </div>

        {/* Gradient fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-40 bg-gradient-to-r from-black to-transparent pointer-events-none z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-40 bg-gradient-to-l from-black to-transparent pointer-events-none z-10" />
      </div>

      {/* Cylindrical Photo Gallery */}
      <div className="relative py-12">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center text-gray-400 text-xl mb-12"
        >
          Scroll horizontally to explore the memories
        </motion.p>

        {/* Gallery Container */}
        <div
          ref={galleryRef}
          onScroll={handleScroll}
          className="flex gap-0 overflow-x-auto pb-8 scrollbar-hide px-4 md:px-20"
          style={{
            scrollSnapType: "x mandatory",
            perspective: "2000px",
            perspectiveOrigin: "center center",
          }}
        >
          {galleryImages.map((image, index) => (
            <CylindricalCard
              key={image.id}
              image={image}
              index={index}
              total={galleryImages.length}
              scrollPosition={scrollPosition}
            />
          ))}
        </div>

        {/* Scroll Indicator */}
        <div className="flex justify-center mt-8 gap-2">
          {galleryImages.map((_, index) => (
            <div
              key={index}
              className={`h-2 rounded-full transition-all duration-300 ${
                Math.round(scrollPosition * (galleryImages.length - 1)) ===
                index
                  ? "w-8 bg-purple-500"
                  : "w-2 bg-gray-600"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

// Individual Cylindrical Card Component
function CylindricalCard({ image, index, total, scrollPosition }) {
  const cardRef = useRef(null);
  const [position, setPosition] = useState("side");

  useEffect(() => {
    if (cardRef.current) {
      const rect = cardRef.current.getBoundingClientRect();
      const windowCenter = window.innerWidth / 2;
      const cardCenter = rect.left + rect.width / 2;
      const distanceFromCenter = Math.abs(windowCenter - cardCenter);

      // Determine if card is in center
      if (distanceFromCenter < rect.width / 2) {
        setPosition("center");
      } else if (cardCenter < windowCenter) {
        setPosition("left");
      } else {
        setPosition("right");
      }
    }
  }, [scrollPosition]);

  // Calculate transform based on position
  const getTransform = () => {
    if (!cardRef.current) return {};

    const rect = cardRef.current.getBoundingClientRect();
    const windowCenter = window.innerWidth / 2;
    const cardCenter = rect.left + rect.width / 2;
    const distanceFromCenter = cardCenter - windowCenter;
    const maxDistance = window.innerWidth / 2;
    const normalizedDistance = Math.max(
      -1,
      Math.min(1, distanceFromCenter / maxDistance)
    );

    // Calculate rotation angle (max 45 degrees on sides)
    const rotationY = normalizedDistance * 45;

    // Calculate scale (center is normal, sides are bigger)
    const scale = position === "center" ? 1 : 1.15;

    // Calculate z-position for depth
    const translateZ = position === "center" ? 0 : -100;

    return {
      transform: `perspective(2000px) rotateY(${-rotationY}deg) translateZ(${translateZ}px) scale(${scale})`,
      zIndex: position === "center" ? 10 : 1,
    };
  };

  // Determine border radius based on position
  const getBorderRadius = () => {
    if (position === "center") {
      return "1rem"; // Rectangular with slight rounding
    } else if (position === "left") {
      return "1rem 4rem 4rem 1rem"; // Curved on right side
    } else {
      return "4rem 1rem 1rem 4rem"; // Curved on left side
    }
  };

  return (
    <motion.div
      ref={cardRef}
      className="flex-shrink-0 transition-all duration-500 ease-out"
      style={{
        scrollSnapAlign: "center",
        width: "400px",
        minWidth: "400px",
        transformStyle: "preserve-3d",
        ...getTransform(),
      }}
    >
      <div
        className="relative h-[500px] overflow-hidden shadow-2xl"
        style={{
          borderRadius: getBorderRadius(),
          transition: "border-radius 0.5s ease-out",
        }}
      >
        <img
          src={image.url}
          alt={image.title}
          className="w-full h-full object-cover"
          style={{
            filter: position === "center" ? "brightness(1)" : "brightness(0.7)",
            transition: "filter 0.5s ease-out",
          }}
        />

        {/* Title Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent flex items-end p-8">
          <h3
            className="text-white text-2xl font-bold transition-opacity duration-500"
            style={{
              opacity: position === "center" ? 1 : 0.6,
            }}
          >
            {image.title}
          </h3>
        </div>

        {/* Center highlight effect */}
        {position === "center" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 border-4 border-purple-500/50 pointer-events-none"
            style={{ borderRadius: getBorderRadius() }}
          />
        )}
      </div>
    </motion.div>
  );
}

export default ElysianRewind;
