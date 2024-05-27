"use client";
import { useState } from "react";
import NavbarProject from "./NavbarProject";
import ProjectCard from "./ProjectCard";

type Category = "frontend" | "backend" | "fullstack";
type Project = {
  id: string;
  category: Category;
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
    category: "frontend",
    title: "Project 1",
    description: "Project 1 description",
    languages: [{ name: "HTML 5" }, { name: "CSS 3" }, { name: "JavaScript" }],
    image: "/assets/projects/thumb1.png",
    demo: "https://example.com",
    source: "https://github.com",
  },
  {
    id: "02",
    category: "fullstack",
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
    category: "backend",
    title: "Project 3",
    description: "Project 3 description",
    languages: [{ name: "Spring Boot" }],
    image: "/assets/projects/thumb3.png",
    demo: "https://example.com",
    source: "https://github.com",
  },
];
export default function AllProject() {
  const [project, setProject] = useState<Project[]>(projects);
  const [active, setActive] = useState<Category | "all">("all");

  const handleFilterCategory = (category: Category | "all") => {
    if (category === "all") {
      setProject(projects);
      setActive(category);
      return;
    }
    const filteredProjects = projects.filter(
      (project) => project.category === category
    );
    console.log(filteredProjects);
    setProject(filteredProjects);
    setActive(category);
  };
  return (
    <div className="px-45 py-2 h-[65vh] overflow-y-scroll">
      <nav>
        <NavbarProject
          handleFilterCategory={handleFilterCategory}
          active={active}
        />
      </nav>
      <div className="relative grid grid-cols-12 gap-4 my-3">
        {project.map((pro, index) => {
          return (
            <div
              key={index}
              className="col-span-12 sm:col-span-6 lg:col-span-4 p-2 bg-primary-900"
            >
              <ProjectCard project={pro} />
            </div>
          );
        })}
      </div>
    </div>
  );
}