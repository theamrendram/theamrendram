"use client";
import { TypewriterEffect } from "../components/ui/typewriter-effect";

const Typing = () => {
  const words = [
    {
      text: "Hello",
      className: "text-primary dark:text-primary",
    },
    {
      text: "There!",
      className: "text-primary dark:text-primary",
    },
    {
      text: "I'm",
      className: "text-primary dark:text-primary",
    },
    {
      text: "Amrendram",
      className: "text-primary dark:text-primary",
    },
  ];
  return (
    <div className="flex flex-col items-center justify-center h-[40rem] ">
      <TypewriterEffect words={words} className="text-primary" />
    </div>
  );
};

export default Typing;
