import React from "react";
import Typewriter from "typewriter-effect";

export default function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Empowering Minds, Shaping Futures",
          "Where Learning Meets Innovation",
          "Unlocking Potential, Achieving Success",
          "Knowledge. Innovation. Leadership.",
          "Learn. Grow. Succeed."
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 30,
      }}
    />
  );
}