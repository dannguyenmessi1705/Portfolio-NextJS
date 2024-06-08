// stats profile
export type Stats = {
  key: string;
  count: number;
  description: string;
};
export const stats: Stats[] = [
  {
    key: "projects",
    count: 0,
    description: "Projects Completed",
  },
  {
    key: "currentStreaks",
    count: 0,
    description: "Current Streaks",
  },
  {
    key: "codeCommits",
    count: 0,
    description: "Code Commits",
  },
  {
    key: "accessings",
    count: 0,
    description: "Accessings",
  },
];

export type Category = "frontend" | "backend" | "others";
export type Project = {
  id: string;
  category: Category;
  title: string;
  description: string;
  languages: string[];
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
    languages: ["HTML 5", "CSS 3", "JavaScript"],
    image: "/assets/projects/thumb1.png",
    demo: "https://example.com",
    source: "https://github.com",
  },
];

export type Mail = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  message: string;
};

export type Blog = {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  coverImage: string;
  date: string;
  adminName: string;
  adminAvatar: string;
}