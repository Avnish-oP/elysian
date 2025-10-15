import React from "react";
import { motion } from "framer-motion";

function Team() {
  // Team members from your design
  const organizers = [
    { id: 1, name: "Dhairya", image: "/dhairya.png" },
    { id: 2, name: "Dhruv", image: "/dhruv.png" },
    { id: 3, name: "Avnish", image: "/avnish.png" },
    { id: 4, name: "Kavyanshi Gera", image: "/kavyanshi.jpg" },
    { id: 5, name: "Dipsvini Dixit", image: "/dipsvini.jpg" },
    { id: 6, name: "Dhivani Verma", image: "/dhivani.jpg" },
    { id: 7, name: "Aadnan", image: "/aadnan.jpg" },
    { id: 8, name: "Arnav", image: "/arnav.jpg" },
    { id: 9, name: "Ammar Singh", image: "/ammar.jpg" },
    { id: 10, name: "Anariya Chauhan", image: "/anariya.jpg" },
    { id: 11, name: "Prathna", image: "/prathna.jpg" },
    { id: 12, name: "Susmi", image: "/susmi.jpg" },
    { id: 13, name: "Annamalya Gera", image: "/annamalya.jpg" },
    { id: 14, name: "Trisha Verma", image: "/trisha.jpg" },
    { id: 15, name: "Yash Shah", image: "/yash.jpg" },
    { id: 16, name: "Annamalya Gera", image: "/annamalya2.jpg" },
    { id: 17, name: "Riya", image: "/riya.jpg" },
  ];

  // Color palette matching your design
  const cardColors = [
    { bg: "bg-purple-400", text: "text-white" },
    { bg: "bg-yellow-300", text: "text-gray-800" },
    { bg: "bg-purple-500", text: "text-white" },
    { bg: "bg-pink-400", text: "text-white" },
    { bg: "bg-indigo-400", text: "text-white" },
    { bg: "bg-yellow-300", text: "text-gray-800" },
    { bg: "bg-purple-700", text: "text-white" },
    { bg: "bg-purple-500", text: "text-white" },
    { bg: "bg-indigo-400", text: "text-white" },
    { bg: "bg-purple-500", text: "text-white" },
    { bg: "bg-purple-400", text: "text-white" },
    { bg: "bg-yellow-300", text: "text-gray-800" },
    { bg: "bg-purple-700", text: "text-white" },
    { bg: "bg-indigo-400", text: "text-white" },
    { bg: "bg-pink-400", text: "text-white" },
    { bg: "bg-purple-500", text: "text-white" },
  ];

  return (
    <div className="relative min-h-screen pt-20 overflow-hidden">
      {/* Background Image - Scrollable */}
      <div className="absolute inset-0 z-0">
        <img
          src="/teambg.png"
          alt="Team Background"
          className="w-full min-h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/90 via-blue-950/90 to-slate-900/90" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
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
            Meet Our Team
          </h1>
          <p className="text-xl text-gray-300">
            The brilliant minds behind Elysian
          </p>
        </motion.div>

        {/* Cards Layout - 6 per row with gaps */}
        <div className="flex flex-col items-center gap-8">
          {Array.from({ length: Math.ceil(organizers.length / 6) }).map(
            (_, rowIndex) => (
              <div key={rowIndex} className="flex items-center">
                {organizers
                  .slice(rowIndex * 6, (rowIndex + 1) * 6)
                  .map((organizer, indexInRow) => {
                    const globalIndex = rowIndex * 6 + indexInRow;
                    return (
                      <OrganizerCard
                        key={organizer.id}
                        organizer={organizer}
                        index={globalIndex}
                        positionInRow={indexInRow}
                        colorData={cardColors[globalIndex % cardColors.length]}
                      />
                    );
                  })}
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
}

function OrganizerCard({ organizer, index, positionInRow, colorData }) {
  // Size pattern: 1st & 6th = normal, 2nd & 5th = larger, 3rd & 4th = smaller (all made taller)
  let cardHeight = "h-80"; // normal (increased from h-64)
  let cardWidth = "w-40";

  if (positionInRow === 1 || positionInRow === 4) {
    // 2nd and 5th - larger
    cardHeight = "h-96";
    cardWidth = "w-44";
  } else if (positionInRow === 2 || positionInRow === 3) {
    // 3rd and 4th - smaller
    cardHeight = "h-72";
    cardWidth = "w-36";
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      transition={{
        duration: 0.8,
        delay: index * 0.05,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      viewport={{ once: true, margin: "-50px" }}
      whileHover={{
        y: -12,
        scale: 1.08,
        rotateY: 5,
        rotateX: -3,
        transition: { duration: 0.4, ease: [0.34, 1.56, 0.64, 1] },
      }}
      className="group relative"
      style={{ perspective: "1200px" }}
    >
      <motion.div
        className={`relative ${cardHeight} ${cardWidth} rounded-3xl overflow-hidden shadow-2xl`}
        style={{
          transformStyle: "preserve-3d",
          backdropFilter: "blur(10px)",
        }}
      >
        {/* Brighter semi-transparent background */}
        <div
          className={`absolute inset-0 ${colorData.bg}`}
          style={{ opacity: 0.85 }}
        />

        {/* Subtle gradient overlay for depth */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent" />

        {/* Vertical Name Text on Right Side - ending at top */}
        <div className="absolute top-4 right-3 flex justify-end z-20">
          <motion.h3
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.05 + 0.2, duration: 0.6 }}
            viewport={{ once: true }}
            className={`text-base font-bold ${colorData.text} drop-shadow-lg tracking-widest uppercase`}
            style={{
              writingMode: "vertical-rl",
              textOrientation: "mixed",
              fontSize: "0.95rem",
              letterSpacing: "0.1em",
            }}
          >
            {organizer.name}
          </motion.h3>
        </div>

        {/* Person Image at Bottom with 3D effect */}
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-3/5 z-10"
          whileHover={{
            scale: 1.12,
            y: -10,
            z: 30,
            rotateX: -5,
            transition: { duration: 0.5, ease: [0.34, 1.56, 0.64, 1] },
          }}
          style={{ transformStyle: "preserve-3d" }}
        >
          <img
            src={organizer.image}
            alt={organizer.name}
            className="w-full h-full object-contain object-bottom transition-all duration-500"
            onError={(e) => {
              e.target.src = "/heroImage.png";
            }}
          />
        </motion.div>

        {/* Animated border on hover */}
        <motion.div
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="absolute inset-0 rounded-3xl border-2 border-white/30 pointer-events-none z-20"
        />

        {/* Shimmer effect on hover */}
        <motion.div
          initial={{ x: "-100%", opacity: 0 }}
          whileHover={{ x: "200%", opacity: [0, 0.5, 0] }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none z-20"
          style={{ transform: "skewX(-20deg)" }}
        />

        {/* Hover Glow Effect */}
        <motion.div
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="absolute inset-0 bg-white/5 pointer-events-none z-15"
        />
      </motion.div>

      {/* Enhanced Shadow Effect on Hover */}
      <motion.div
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 0.7 }}
        transition={{ duration: 0.4 }}
        className="absolute inset-0 -z-10 bg-black/50 blur-2xl rounded-3xl transform translate-y-6"
      />

      {/* Colored glow matching card color */}
      <motion.div
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 0.4 }}
        transition={{ duration: 0.4 }}
        className={`absolute inset-0 -z-10 ${colorData.bg} blur-xl rounded-3xl transform translate-y-4`}
      />
    </motion.div>
  );
}

export default Team;
