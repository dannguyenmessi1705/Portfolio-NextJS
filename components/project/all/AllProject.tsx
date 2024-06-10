"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import NavbarProject from "./NavbarProject";
import Projects from "./Projects";
import ButtonScrollTop from "@/components/ui/ButtonScrollTop";
import { type Category, type Project as ProjectType } from "@/lib/data";

export default function AllProject({ projects }: { projects: ProjectType[] }) {
  const [project, setProject] = useState<ProjectType[]>(projects);
  const [active, setActive] = useState<Category | "all">("all");

  const handleFilterCategory = (category: Category | "all") => {
    if (category === "all") {
      setProject(projects);
      setActive(category);
      return;
    }
    const filteredProjects = projects.filter(
      (project) => project.category === category,
    );
    setProject(filteredProjects);
    setActive(category);
  };
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { duration: 0.3, delay: 0.5, ease: "easeIn" },
      }}
      className="h-full w-full"
    >
      <div className="mb-6 flex justify-center">
        <NavbarProject
          handleFilterCategory={handleFilterCategory}
          active={active}
        />
      </div>
      <Projects project={project} />
      <div className="block sm:hidden">
        <ButtonScrollTop />
      </div>
    </motion.div>
  );
}
