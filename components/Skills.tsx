"use client";
import { type ReactNode } from "react";
import {
  FaNodeJs,
  FaHtml5,
  FaCss3,
  FaJava,
  FaJs,
  FaReact,
  FaBootstrap,
  FaGitAlt,
} from "react-icons/fa";
import { FaGolang } from "react-icons/fa6";
import {
  SiSpring,
  SiTypescript,
  SiC,
  SiCplusplus,
  SiNestjs,
  SiPostman,
  SiMysql,
  SiNextdotjs,
  SiTailwindcss,
} from "react-icons/si";

type Skill = {
  icon: ReactNode;
  name: string;
};
const skill = {
  title: "My Skills",
  description:
    "My technical skills include proficiency in list your most relevant programming languages and frameworks. I am adaptable and eager to learn new technologies to deliver effective solutions.",
  skills: [
    {
      icon: <FaNodeJs />,
      name: "Node.js",
    },
    {
      icon: <FaHtml5 />,
      name: "HTML 5",
    },
    {
      icon: <FaCss3 />,
      name: "CSS 3",
    },
    {
      icon: <FaJava />,
      name: "Java",
    },
    {
      icon: <FaJs />,
      name: "JavaScript",
    },
    {
      icon: <FaReact />,
      name: "React",
    },
    {
      icon: <FaGolang />,
      name: "Go",
    },
    {
      icon: <FaBootstrap />,
      name: "Bootstrap",
    },
    {
      icon: <FaGitAlt />,
      name: "Git",
    },
    {
      icon: <SiSpring />,
      name: "Spring",
    },
    {
      icon: <SiTypescript />,
      name: "TypeScript",
    },
    {
      icon: <SiC />,
      name: "C",
    },
    {
      icon: <SiCplusplus />,
      name: "C++",
    },
    {
      icon: <SiNestjs />,
      name: "NestJS",
    },
    {
      icon: <SiPostman />,
      name: "Postman",
    },
    {
      icon: <SiMysql />,
      name: "MySQL",
    },
    {
      icon: <SiNextdotjs />,
      name: "Next.js",
    },
    {
      icon: <SiTailwindcss />,
      name: "Tailwind CSS",
    },
  ],
};

export default function Skills() {
  return <div>Skills</div>;
}
