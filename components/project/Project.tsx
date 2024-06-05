"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import LinkProject from "./LinkProject";
import Languages from "./Languages";
import SwiperProject from "./SwiperProject";
import NotFound from "@/app/not-found";
type Project = {
  id: string;
  category: string;
  title: string;
  description: string;
  languages: string[];
  image: string;
  demo: string | null;
  source: string;
};
export default function Project({ projects }: { projects: Project[] }) {
  const [project, setProject] = useState<Project>(projects[0]);
  if (!project) return <NotFound message="There are no projects here" />;
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
            <div className="flex h-[70%] flex-col gap-[30px]">
              <div className="text-4xl font-extrabold leading-none">
                {project.title}
              </div>

              <h2 className="text-xl font-bold capitalize leading-none text-primary-50 transition-all duration-500 group-hover:text-accent-600">
                {project.category} project
              </h2>

              <div className="flex-1">
                <p className="text-primary-300">{project.description}</p>
              </div>

              <Languages project={project} />
            </div>
            <div className="border border-primary-800 mb-2 xl:mb-0"></div>
            <LinkProject demo={project.demo} source={project.source} />
          </div>

          <div className="w-full xl:w-[50%]">
            <SwiperProject projects={projects} setProject={setProject} />
          </div>
        </div>
      </div>
    </motion.section>
  );
}
