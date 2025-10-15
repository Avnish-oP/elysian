import React from "react";
import { motion } from "framer-motion";

function About() {
  return (
    <div className="bg-gradient-to-br flex flex-col bg-[#100D28]">
      {/* Main About Section - Text Left, Image Right touching edge */}
      <div className="w-full flex items-center mb-16">
        {/* Left - Text Content with padding */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="w-1/2 px-8 lg:px-16"
        >
          <h2
            className="text-5xl lg:text-6xl font-bold text-white mb-6"
            style={{ fontFamily: "'Cinzel', serif" }}
          >
            About Elysian
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed">
            Elysian is more than just an event—it's an experience that brings
            together creativity, innovation, and celebration. We believe in
            creating unforgettable moments that inspire and connect people from
            all walks of life.
          </p>
          <p className="text-gray-300 text-lg leading-relaxed mt-4">
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
          className="relative  top-0 left-96 full  overflow-hidden"
        >
          <motion.img
            src="/elysian-elements.png"
            alt="Elysian Elements"
            className="w-full h-[70vh] object-cover"
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
        className="relative mb- w-full"
      >
        <div className="h-32 bg-gradient-to-r from-white via-amber-100 to-white flex items-center justify-center">
          <motion.div className="text-center" whileHover={{ scale: 1.05 }}>
            <p className="text-2xl font-semibold text-gray-800 mb-2">
              EVENT DATES
            </p>
            <p className="text-4xl font-bold text-gray-900">
              November 15-17, 2025
            </p>
          </motion.div>
        </div>
      </motion.div>

      {/* Rest of the content with max-w container */}
      <div className="">
        {/* Event Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-12 overflow-hidden shadow-2xl"
        >
          <img
            src="/about2.jpg"
            alt="Event Preview"
            className="w-full h-96 object-cover"
          />
        </motion.div>

        {/* Tagline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h3 className="text-5xl font-bold text-white">
            Innovation in every{" "}
            <span className="italic text-purple-400">celebration</span>
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
          {/* Outer black rectangular border container - Bigger */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-black p-8 rounded-lg"
          >
            {/* Inner button with white border */}
            <motion.button
              whileHover={{
                boxShadow: "0 0 30px rgba(255, 255, 255, 0.3)",
                backgroundColor: "rgba(255, 255, 255, 0.05)",
              }}
              transition={{ duration: 0.3 }}
              className="px-16 py-6 border-4 border-white rounded-lg bg-transparent text-white text-2xl font-bold hover:bg-white/5 transition-all duration-300"
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
