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
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";
import { ScrollArea } from "../ui/scroll-area";

type Skill = {
  icon: ReactNode;
  name: string;
};
type Info = {
  title: string;
  description: string;
  skills: Skill[];
};
const skill: Info = {
  title: "My Skills",
  description:
    "My technical skills include proficiency in list your most relevant programming languages and frameworks to deliver effective solutions.",
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
  return (
    <div className="flex flex-col gap-[30px]">
      <div className="flex flex-col gap-[30px] text-center xl:text-left">
        <h3 className="text-4xl font-bold">{skill.title}</h3>
        <p className="mx-auto max-w-[600px] text-primary-300 xl:mx-0 ">
          {skill.description}
        </p>
      </div>
      <ScrollArea className="h-[350px]">
        <ul className="grid grid-cols-2 gap-4 sm:grid md:grid-cols-4 xl:gap-[30px]">
          {skill.skills.map((sk, index) => {
            return (
              <li key={index}>
                <TooltipProvider delayDuration={100}>
                  <Tooltip>
                    <TooltipTrigger className="group flex h-[150px] w-full items-center justify-center rounded-xl bg-primary-900">
                      <div className="text-6xl transition-all duration-300 group-hover:text-accent-600">
                        {sk.icon}
                      </div>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p className="capitalize">{sk.name}</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </li>
            );
          })}
        </ul>
      </ScrollArea>
    </div>
  );
}
