import ProjectCard from "./ProjectCard";

type Category = "all" | "frontend" | "backend" | "fullstack";
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
export default function AllProject() {
  return (
    <div className="px-45 py-2 h-[65vh] overflow-y-scroll">
      <nav>navbar</nav>
      <div className="relative grid grid-cols-12 gap-4 my-3">
        {projects.map((project, index) => {
          return (
            <div key={index} className="col-span-12 sm:col-span-6 lg:col-span-4 p-2 bg-primary-900">
              <ProjectCard project={project} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
