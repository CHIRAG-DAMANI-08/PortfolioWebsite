import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import rediscord from "@/public/rediscord.png";
import bargainbuddy from "@/public/bargainbuddy.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Graduated High School",
    location: "Bangalore, India",
    description:
      "I graduated from Sri Sri Ravishankar Vidya Mandir I did my schooling from 2020 to 2022.",
    icon: React.createElement(LuGraduationCap),
    date: "2020 - 2022",
  },
  {
    title: "University Student",
    location: "Bangalore, India",
    description:
      "I'm currently pursuing my Bachelor's degree in Computer Science and Engineering from Jain University, Bangalore.",
    icon: React.createElement(CgWorkAlt),
    date: "2022-Present",
  },
  {
    title: "Full-Stack Developer",
    location: "Bangalore, India",
    description:
      "I'm currently learnign full-stack development. I'm learning React, Next.js, TypeScript, MongoDB, Prisma and so much more.",
    icon: React.createElement(FaReact),
    date: "2023 - present",
  },
] as const;

export const projectsData = [
  {
    title: "ReDiscord",
    description:
      "I rebuilt Discord's web app. It has features like Searching , Video/Audio calls, Direct Messages, Server Invites, Roles and so much more.",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma"],
    imageUrl: rediscord,
  },
  {
    title: "BargainBuddy",
    description:
      "A web app for finding bargains on Amazon. It has features like Searching, Product Details, Price Tracking and Email Notifications.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux", "MongoDB"],
    imageUrl: bargainbuddy,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Redux",
  "Python",
  "Blender",
  "Notion",
  "Wordpress",
] as const;
