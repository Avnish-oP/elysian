import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function Events() {
  const [selectedEvent, setSelectedEvent] = useState(null);

  const events = [
    {
      id: 1,
      name: "HackFest",
      subtitle: "Powered by IEEE",
      color: "bg-red-600",
      bgColor: "from-red-600/80 to-red-800/80",
      description:
        "A 24-hour hackathon where innovative minds come together to build solutions for real-world problems. Powered by IEEE, this event brings the best of tech talent.",
      details: "Date: TBA | Venue: Main Campus | Prize Pool: ₹50,000",
    },
    {
      id: 2,
      name: "TechRituals:",
      subtitle: "Rituals decoded",
      color: "bg-gray-800",
      bgColor: "from-gray-800/80 to-gray-900/80",
      description:
        "Decode the mysteries of technology through engaging workshops and sessions. Learn the rituals that drive modern tech innovation.",
      details: "Date: TBA | Venue: Tech Lab | Multiple Sessions",
    },
    {
      id: 3,
      name: "BuggedOut",
      subtitle: "",
      color: "bg-amber-700",
      bgColor: "from-amber-700/80 to-amber-900/80",
      description:
        "A debugging competition where participants race against time to find and fix bugs in complex code. Test your problem-solving skills.",
      details: "Date: TBA | Venue: Computer Lab | Individual Event",
    },
    {
      id: 4,
      name: "Silicon Quest",
      subtitle: "",
      color: "bg-blue-700",
      bgColor: "from-blue-700/80 to-blue-900/80",
      description:
        "An adventure through the world of semiconductors and hardware. Explore the foundations of modern computing in this quest.",
      details: "Date: TBA | Venue: Electronics Lab | Team Event",
    },
    {
      id: 5,
      name: "HackEDCODE 3.0",
      subtitle: "",
      color: "bg-teal-600",
      bgColor: "from-teal-600/80 to-teal-800/80",
      description:
        "The third edition of our flagship coding competition. Decode challenges, hack solutions, and compete for glory.",
      details: "Date: TBA | Venue: Auditorium | Team of 2-4",
    },
    {
      id: 6,
      name: "VibeClash",
      subtitle: "",
      color: "bg-purple-700",
      bgColor: "from-purple-700/80 to-purple-900/80",
      description:
        "Where creativity meets competition. A cultural tech event that brings together art, music, and technology.",
      details: "Date: TBA | Venue: Main Stage | Open to All",
    },
    {
      id: 7,
      name: "Breach & Defend",
      subtitle: "",
      color: "bg-green-700",
      bgColor: "from-green-700/80 to-green-900/80",
      description:
        "A cybersecurity competition testing your offensive and defensive skills. Protect systems while trying to breach opponent defenses.",
      details: "Date: TBA | Venue: Cyber Lab | Team Event",
    },
    {
      id: 8,
      name: "Personal Finance Seminar",
      subtitle: "",
      color: "bg-cyan-500",
      bgColor: "from-cyan-500/80 to-cyan-700/80",
      description:
        "Learn the fundamentals of personal finance, investment strategies, and wealth management from industry experts.",
      details: "Date: TBA | Venue: Seminar Hall | Free Entry",
    },
    {
      id: 9,
      name: "TriCode showdown",
      subtitle: "",
      color: "bg-yellow-400",
      bgColor: "from-yellow-400/80 to-yellow-600/80",
      description:
        "A three-round coding competition testing algorithms, data structures, and problem-solving across multiple languages.",
      details: "Date: TBA | Venue: Computer Center | Individual",
    },
    {
      id: 10,
      name: "Game Tournament",
      subtitle: "",
      color: "bg-purple-600",
      bgColor: "from-purple-600/80 to-purple-800/80",
      description:
        "Esports tournament featuring popular games. Battle it out with fellow gamers for the ultimate gaming glory.",
      details: "Date: TBA | Venue: Gaming Arena | Various Formats",
    },
    {
      id: 11,
      name: "KRC CARNIVAL",
      subtitle: "",
      color: "bg-teal-800",
      bgColor: "from-teal-800/80 to-teal-950/80",
      description:
        "Krishna Raj Complex Carnival - A celebration of technology, culture, and innovation with games, stalls, and performances.",
      details: "Date: TBA | Venue: KRC Campus | All Day Event",
    },
    {
      id: 12,
      name: "Coin Quest Ideathon",
      subtitle: "",
      color: "bg-red-800",
      bgColor: "from-red-800/80 to-red-950/80",
      description:
        "An ideathon focused on blockchain and cryptocurrency innovations. Pitch your ideas and win exciting prizes.",
      details: "Date: TBA | Venue: Innovation Hub | Team of 3-5",
    },
    {
      id: 13,
      name: "Capture the Flag [CTF]",
      subtitle: "",
      color: "bg-blue-400",
      bgColor: "from-blue-400/80 to-blue-600/80",
      description:
        "A cybersecurity challenge where teams compete to capture flags by exploiting vulnerabilities and solving security puzzles.",
      details: "Date: TBA | Venue: Online/Offline | Team Event",
    },
    {
      id: 14,
      name: "Sahi Pakde hai",
      subtitle: "The storytelling game",
      color: "bg-gray-200",
      textColor: "text-gray-800",
      bgColor: "from-gray-200/80 to-gray-400/80",
      description:
        "A fun storytelling and guessing game where participants weave tales and others try to catch the truth. Entertainment meets wit.",
      details: "Date: TBA | Venue: Open Area | Fun Event",
    },
    {
      id: 15,
      name: "KBC - [Kaun Banega Champion]",
      subtitle: "quiz contest",
      color: "bg-pink-500",
      bgColor: "from-pink-500/80 to-pink-700/80",
      description:
        "Inspired by the famous quiz show, test your general knowledge and technical expertise to become the champion.",
      details: "Date: TBA | Venue: Main Auditorium | Individual",
    },
  ];

  return (
    <div className="relative min-h-screen pt-20 bg-black">
      {/* Starry Background */}
      <div className="fixed inset-0 z-0">
        <div
          className="absolute inset-0 opacity-50"
          style={{
            backgroundImage: `radial-gradient(2px 2px at 20% 30%, white, transparent),
                            radial-gradient(2px 2px at 60% 70%, white, transparent),
                            radial-gradient(1px 1px at 50% 50%, white, transparent),
                            radial-gradient(1px 1px at 80% 10%, white, transparent),
                            radial-gradient(2px 2px at 90% 60%, white, transparent),
                            radial-gradient(1px 1px at 33% 80%, white, transparent),
                            radial-gradient(1px 1px at 15% 90%, white, transparent)`,
            backgroundSize: "200% 200%",
            backgroundPosition: "0% 0%",
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1
            className="text-6xl lg:text-7xl font-bold text-white mb-4"
            style={{ fontFamily: "'Cinzel', serif" }}
          >
            Events
          </h1>
        </motion.div>

        {/* Events Layout - Organic, Staggered Pairs */}
        <div className="relative mb-20">
          {events.map((event, index) => {
            // Create irregular offsets for each card
            const rowIndex = Math.floor(index / 2);
            const isLeftCard = index % 2 === 0;

            // Random vertical offsets for staggered effect
            const verticalOffsets = [0, 30, -20, 40, -30, 25, -15, 35];
            const horizontalOffsets = isLeftCard
              ? [0, -20, 10, -30, 15, -10, 20, -15]
              : [20, 40, -10, 30, -20, 35, -25, 15];

            const verticalOffset =
              verticalOffsets[rowIndex % verticalOffsets.length];
            const horizontalOffset =
              horizontalOffsets[rowIndex % horizontalOffsets.length];

            return (
              <EventCard
                key={event.id}
                event={event}
                index={index}
                onClick={() => setSelectedEvent(event)}
                style={{
                  position: "relative",
                  display: "inline-block",
                  marginTop: index > 1 ? `${verticalOffset}px` : "0px",
                  marginLeft: index === 0 ? "0" : `${horizontalOffset}px`,
                }}
              />
            );
          })}
        </div>
      </div>

      {/* Event Detail Modal */}
      <AnimatePresence>
        {selectedEvent && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedEvent(null)}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0, rotateY: -15 }}
              animate={{ scale: 1, opacity: 1, rotateY: 0 }}
              exit={{ scale: 0.8, opacity: 0, rotateY: 15 }}
              transition={{ duration: 0.4, ease: [0.34, 1.56, 0.64, 1] }}
              onClick={(e) => e.stopPropagation()}
              className={`relative max-w-2xl w-full rounded-3xl shadow-2xl overflow-hidden bg-gradient-to-br ${selectedEvent.bgColor} p-8 border-2 border-white/20`}
              style={{ perspective: "1000px", transformStyle: "preserve-3d" }}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedEvent(null)}
                className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors z-10"
              >
                <svg
                  className="w-8 h-8"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>

              {/* Content */}
              <div className="relative z-10">
                <motion.h2
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.1 }}
                  className={`text-4xl lg:text-5xl font-bold mb-2 ${
                    selectedEvent.textColor || "text-white"
                  }`}
                  style={{ fontFamily: "'Cinzel', serif" }}
                >
                  {selectedEvent.name}
                </motion.h2>

                {selectedEvent.subtitle && (
                  <motion.p
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className={`text-lg mb-6 ${
                      selectedEvent.textColor || "text-white/80"
                    }`}
                  >
                    {selectedEvent.subtitle}
                  </motion.p>
                )}

                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="space-y-4"
                >
                  <p
                    className={`text-lg leading-relaxed ${
                      selectedEvent.textColor || "text-white/90"
                    }`}
                  >
                    {selectedEvent.description}
                  </p>

                  <div
                    className={`pt-4 border-t ${
                      selectedEvent.textColor
                        ? "border-gray-600"
                        : "border-white/20"
                    }`}
                  >
                    <p
                      className={`text-base ${
                        selectedEvent.textColor || "text-white/80"
                      }`}
                    >
                      {selectedEvent.details}
                    </p>
                  </div>
                </motion.div>

                {/* Decorative Element */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                  className={`absolute -top-20 -right-20 w-40 h-40 rounded-full blur-3xl ${
                    selectedEvent.textColor ? "bg-gray-400/30" : "bg-white/10"
                  }`}
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function EventCard({ event, index, onClick, style }) {
  const [isHovered, setIsHovered] = useState(false);

  // Random size variations for each card
  const sizeVariants = [
    { width: "16rem", height: "12rem", scale: 1 }, // Medium
    { width: "14rem", height: "14rem", scale: 1.1 }, // Square-ish
    { width: "18rem", height: "11rem", scale: 0.95 }, // Wide
    { width: "15rem", height: "13rem", scale: 1.05 }, // Medium-tall
    { width: "17rem", height: "10rem", scale: 1 }, // Very wide
    { width: "13rem", height: "15rem", scale: 1.08 }, // Tall
  ];

  // Random border radius for convex irregular shapes
  const shapeVariants = [
    "40% 60% 60% 40% / 60% 40% 60% 40%", // Blob 1
    "60% 40% 40% 60% / 40% 60% 40% 60%", // Blob 2
    "50% 50% 50% 50% / 40% 60% 60% 40%", // Blob 3
    "45% 55% 50% 50% / 55% 45% 60% 40%", // Blob 4
    "55% 45% 60% 40% / 50% 50% 45% 55%", // Blob 5
    "50% 50% 40% 60% / 60% 40% 50% 50%", // Blob 6
  ];

  const size = sizeVariants[index % sizeVariants.length];
  const borderRadius = shapeVariants[index % shapeVariants.length];

  return (
    <motion.div
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      onClick={onClick}
      whileHover={{
        scale: 1.15,
        y: -12,
        rotate: [0, -2, 2, 0],
      }}
      transition={{
        duration: 0.6,
        delay: index * 0.05,
        ease: "easeOut",
        whileHover: { duration: 0.4, ease: [0.34, 1.56, 0.64, 1] },
      }}
      className="relative cursor-pointer group"
      style={{
        perspective: "1000px",
        width: size.width,
        height: size.height,
        ...style,
      }}
    >
      <motion.div
        animate={
          isHovered
            ? {
                rotateY: 3,
                rotateX: -3,
                borderRadius: shapeVariants[(index + 1) % shapeVariants.length],
              }
            : {
                rotateY: 0,
                rotateX: 0,
                borderRadius: borderRadius,
              }
        }
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={`relative w-full h-full overflow-hidden shadow-2xl ${event.color} flex items-center justify-center p-6`}
        style={{
          transformStyle: "preserve-3d",
          borderRadius: borderRadius,
        }}
      >
        {/* Content - Hidden on hover */}
        <motion.div
          className="relative z-10 text-center"
          animate={
            isHovered ? { opacity: 0, scale: 0.8 } : { opacity: 1, scale: 1 }
          }
          transition={{ duration: 0.3 }}
        >
          <h3
            className={`text-xl lg:text-2xl font-bold ${
              event.textColor || "text-white"
            } drop-shadow-lg mb-1 leading-tight`}
            style={{ fontFamily: "'Cinzel', serif" }}
          >
            {event.name}
          </h3>
          {event.subtitle && (
            <p className={`text-xs ${event.textColor || "text-white/80"}`}>
              {event.subtitle}
            </p>
          )}
        </motion.div>

        {/* Text on Hover/Click */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={
            isHovered ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }
          }
          transition={{ duration: 0.3 }}
          className="absolute inset-0 bg-black/70 backdrop-blur-sm flex flex-col items-center justify-center z-20 p-4"
        >
          <p
            className={`text-sm text-center ${
              event.textColor || "text-white"
            } mb-3 leading-relaxed px-2`}
          >
            {event.description}
          </p>
          <p className="text-xs text-white/80 font-semibold">
            Click for more details →
          </p>
        </motion.div>

        {/* Animated morphing border */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isHovered ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="absolute inset-0 border-2 border-white/50 pointer-events-none"
          style={{
            borderRadius: isHovered
              ? shapeVariants[(index + 1) % shapeVariants.length]
              : borderRadius,
          }}
        />

        {/* Shimmer Effect */}
        <motion.div
          initial={{ x: "-100%", opacity: 0 }}
          animate={
            isHovered
              ? { x: "200%", opacity: [0, 0.6, 0] }
              : { x: "-100%", opacity: 0 }
          }
          transition={{ duration: 1, ease: "easeInOut" }}
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent pointer-events-none"
          style={{ transform: "skewX(-20deg)" }}
        />

        {/* Subtle gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none" />
      </motion.div>

      {/* Dynamic Shadow */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isHovered ? { opacity: 0.7 } : { opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="absolute inset-0 -z-10 bg-black/60 blur-2xl transform translate-y-6"
        style={{ borderRadius: borderRadius }}
      />

      {/* Colored glow matching card color */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isHovered ? { opacity: 0.5 } : { opacity: 0 }}
        transition={{ duration: 0.4 }}
        className={`absolute inset-0 -z-10 ${event.color} blur-xl transform translate-y-4 opacity-50`}
        style={{ borderRadius: borderRadius }}
      />
    </motion.div>
  );
}

export default Events;
