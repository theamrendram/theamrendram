"use client";
import { useState, useEffect } from "react";
import { useAnimation, motion } from "framer-motion";
import Cover from "@/components/Cover";
import Personal from "@/components/Personal";
import Portfolio from "@/components/Portfolio";
import Skills from "@/components/Skills";

export default function Home() {
  const [showCover, setShowCover] = useState(true);
  const controls = useAnimation();

  useEffect(() => {
    // Start the animation after the component mounts
    const timer = setTimeout(() => {
      controls.start({
        y: -1000, // Moves up by 100px
      });
      // Remove the cover component after the animation completes (1s)
      setTimeout(() => {
        setShowCover(false);
      }, 1000); // Adjust if the move animation duration is not 1s
    }, 7000); // Wait 2 seconds before starting the animation

    // Clear timeout if component unmounts
    return () => clearTimeout(timer);
  }, [controls]);

  return (
    <div className="bg-zinc-900 h-screen text-primary">
      {showCover && (
        <motion.div
          initial={{ y: 0 }}
          animate={controls}
          transition={{ duration: 1 }} // Duration of the move animation
        >
          <Cover />
        </motion.div>
      )}
      <div className="flex flex-col md:flex-row justify-between bg-zinc-900 h-screen md:px-20">
        <div className="md:w-1/3">
          <Personal />
        </div>
        <div className="md:w-1/3">
          <Skills />
        </div>
        <div className="md:w-1/3">
          <Portfolio />
        </div>
      </div>
    </div>
  );
}
