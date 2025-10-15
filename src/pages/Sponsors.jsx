import React from "react";
import { motion } from "framer-motion";

function Sponsors() {
  return (
    <div className="bg-black min-h-screen pt-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20"
      >
        <h1 className="text-white text-6xl font-bold mb-8">Sponsors</h1>
        <p className="text-gray-300 text-xl">
          Sponsors page coming soon. Meet our incredible sponsors who make
          Elysian possible.
        </p>
      </motion.div>
    </div>
  );
}

export default Sponsors;
