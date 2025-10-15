import React from "react";
import { motion } from "framer-motion";

function About() {
  return (
    <div className="bg-[#100D28] overflow-x-hidden">
      {/* Main About Section - Text Left, Image Right touching edge */}
      <div className="w-full flex flex-col lg:flex-row items-center lg:items-stretch">
        {/* Left - Text Content with padding */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="w-full lg:w-1/2 px-6 py-12 lg:px-16 lg:py-20 flex flex-col justify-center"
        >
          <h2
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
            style={{ fontFamily: "'Cinzel', serif" }}
          >
            About Elysian
          </h2>
          <p className="text-gray-300 text-base md:text-lg leading-relaxed mb-4">
            Elysian is more than just an event—it's an experience that brings
            together creativity, innovation, and celebration. We believe in
            creating unforgettable moments that inspire and connect people from
            all walks of life.
          </p>
          <p className="text-gray-300 text-base md:text-lg leading-relaxed">
            Join us on this extraordinary journey where every moment is crafted
            with passion and every celebration becomes a cherished memory.
          </p>
        </motion.div>

        {/* Right - Image touching right edge */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="w-full lg:w-1/2 h-[50vh] lg:h-[70vh]"
        >
          <motion.img
            src="/elysian-elements.png"
            alt="Elysian Elements"
            className="w-full h-full object-cover"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          />
        </motion.div>
      </div>

      {/* Date Strip - Full width, no max-w container */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="w-full my-16"
      >
        <div className="h-32 bg-gradient-to-r from-white via-amber-100 to-white flex items-center justify-center shadow-lg">
          <motion.div className="text-center" whileHover={{ scale: 1.05 }}>
            <p className="text-xl md:text-2xl font-semibold text-gray-800 mb-2 tracking-wider">
              EVENT DATES
            </p>
            <p className="text-3xl md:text-4xl font-bold text-gray-900">
              November 15-17, 2025
            </p>
          </motion.div>
        </div>
      </motion.div>

      {/* Rest of the content with max-w container */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 pb-20">
        {/* Event Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16 overflow-hidden rounded-2xl shadow-2xl"
        >
          <img
            src="/about2.jpg"
            alt="Event Preview"
            className="w-full h-[300px] md:h-[400px] lg:h-[500px] object-cover"
          />
        </motion.div>

        {/* Tagline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
            Innovation in every{" "}
            <span className="italic bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
              celebration
            </span>
          </h3>
        </motion.div>

        {/* Register Button with Rectangular Double Border */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          {/* Outer black rectangular border container */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-black p-6 md:p-8 rounded-xl shadow-2xl"
          >
            {/* Inner button with white border */}
            <motion.button
              whileHover={{
                boxShadow: "0 0 40px rgba(255, 255, 255, 0.4)",
                backgroundColor: "rgba(255, 255, 255, 0.1)",
              }}
              transition={{ duration: 0.3 }}
              className="px-12 md:px-16 py-4 md:py-6 border-4 border-white rounded-lg bg-transparent text-white text-xl md:text-2xl font-bold hover:bg-white/5 transition-all duration-300"
              style={{ fontFamily: "'Cinzel', serif" }}
            >
              Register Now
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

export default About;
