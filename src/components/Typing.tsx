"use client"

import React, { useEffect, useRef } from "react";
import Typed from "typed.js";

// Define the desired words
const words = ["Hello World!", "I am amrendram", "I am full stack developer"];

const Typing = () => {
  const el = useRef(null); // Create a ref for the element

  useEffect(() => {
    const options = {
      strings: words,
      typeSpeed: 50,
      backSpeed: 50,
      loop: true,
      cursorChar: "|",
    };

    // Create a new instance of Typed.js and pass the ref as the element
    const typed = new Typed(el.current, options);

    return () => {
      // Cleanup the Typed instance on unmount
      typed.destroy();
    };
  }, []);

  return (
    <>
      <span
      className="text-4xl md:text-7xl font-bold dark:text-white text-center"
        style={{ whiteSpace: "pre" }}
        ref={el} // Pass the ref to the element
      />
    </>
  );
};

export default Typing;
