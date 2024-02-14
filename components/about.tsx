"use client";

import React from "react";
import { motion } from "framer-motion";
import SectionHeading from "@/components/section-heading";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About", 0.85);

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28 justify-center"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading> About Me</SectionHeading>
      <p className="mb-3">
        While currently pursuing a degree in{" "}
        <span className="font-medium">Software Engineering</span>, I decided to
        pursue my passion for Web Developement. I enrolled in a coding bootcamp
        and learned{" "}
        <span className="font-medium underline">
          full-stack web development
        </span>
        . <span className="italic">My favorite part of programming</span> is the
        problem-solving aspect. I <span className="underline">love</span> the
        feeling of finally figuring out a solution to a problem. My core stack
        is{" "}
        <span className="font-medium underline">
          React, Next.js, Node.js, and MongoDB a.k.a MERN stack
        </span>
        . I am also familiar with TypeScript and Prisma. I am always looking to
        learn new technologies. I am currently looking for an{" "}
        <span className="font-medium underline">
          Internship/full-time position
        </span>{" "}
        as a software developer.
      </p>

      <p>
        <span className="italic">When I'm not coding</span>, I enjoy playing
        video games, watching movies, and creating 3d art on Blender. I also
        enjoy <span className="font-medium underline">learning new things</span>
        . I am currently learning about{" "}
        <span className="font-medium underline">
          AI and the related concepts
        </span>
        . I'm also learning how to make video games in Python.
      </p>
    </motion.section>
  );
}
