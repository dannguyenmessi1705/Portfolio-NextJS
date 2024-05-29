"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import LinkProject from "./LinkProject";
import ListProject from "./ListProject";
import SwiperProject from "./SwiperProject";
type Project = {
  id: string;
  category: string;
  title: string;
  description: string;
  languages: { name: string }[];
  image: string;
  demo: string | null;
  source: string;
};
const projects: Project[] = [
  {
    id: "01",
    category: "Frontend",
    title: "Project 1",
    description: "Project 1 description",
    languages: [{ name: "HTML 5" }, { name: "CSS 3" }, { name: "JavaScript" }],
    image: "/assets/projects/thumb1.png",
    demo: "https://example.com",
    source: "https://github.com",
  },
  {
    id: "02",
    category: "Fullstack",
    title: "Project 2",
    description: "Project 2 description",
    languages: [
      { name: "Next.JS" },
      { name: "Tailwind Css" },
      { name: "Nest.JS" },
    ],
    image: "/assets/projects/thumb2.png",
    demo: "https://example.com",
    source: "https://github.com",
  },
  {
    id: "03",
    category: "Backend",
    title: "Project 3",
    description: "Project 3 description",
    languages: [{ name: "Spring Boot" }],
    image: "/assets/projects/thumb3.png",
    demo: "https://example.com",
    source: "https://github.com",
  },
];
export default function Project() {
  const [project, setProject] = useState<Project>(projects[0]);
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 1, duration: 0.4, ease: "easeIn" },
      }}
      className="flex min-h-[70vh] flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="order-2 flex w-full flex-col xl:order-none xl:h-[420px] xl:w-[50%] xl:justify-between">
            <div className="flex h-[50%] flex-col gap-[30px]">
              <div className="text-8xl font-extrabold leading-none">
                {project.id}
              </div>

              <h2 className="text-[42px] font-bold capitalize leading-none text-primary-50 transition-all duration-500 group-hover:text-accent-600">
                {project.category} project
              </h2>

              <p className="text-primary-300">{project.description}</p>

              <ListProject project={project} />

              <div className="border border-primary-800"></div>

              <LinkProject demo={project.demo} source={project.source} />
            </div>
          </div>

          <div className="w-full xl:w-[50%]">
            <SwiperProject projects={projects} setProject={setProject} />
          </div>
        </div>
      </div>
    </motion.section>
  );
}
