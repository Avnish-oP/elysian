import React from "react";
import Hero from "../components/Hero";
import About from "../components/About";
import ElysianRewind from "../components/ElysianRewind";
import FAQ from "../components/FAQ";

function Home() {
  return (
    <div className="bg-black min-h-screen">
      <Hero />
      <About />
      <ElysianRewind />
      <FAQ />
      {/* Add more sections as needed */}
    </div>
  );
}

export default Home;
