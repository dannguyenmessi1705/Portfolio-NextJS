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

// stats profile
export type Stats = {
  key: string;
  count: number;
  description: string;
};
export const stats: Stats[] = [
  {
    key: "accessings",
    count: 0,
    description: "Accessings",
  },
  {
    key: "projects",
    count: 0,
    description: "Projects Completed",
  },
  {
    key: "numBlogs",
    count: 0,
    description: "Blogs",
  },
  {
    key: "longestStreak",
    count: 0,
    description: "Longest Streak",
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
};

export type Education = {
  institution: string;
  degree: string;
  duration?: string;
};
export type InfoEducation = {
  title: string;
  description: string;
  educations: Education[];
};

export const education: InfoEducation = {
  title: "My Education",
  description:
    "My education has equipped me with valuable knowledge and skills. It has expanded my horizons, fostered critical thinking, and fueled a passion for lifelong learning.",
  educations: [
    {
      institution: "PTIT",
      degree: "Bacherlor of Engineering",
      duration: "2020 - 2025",
    },
    {
      institution: "Udemy",
      degree: "The Ultimate React Course 2024: React, Next.js, Redux & More",
    },
    {
      institution: "Udemy",
      degree: "NodeJS - The Complete Guide (MVC, REST APIs, GraphQL, Deno)",
    },
    {
      institution: "Udemy",
      degree: "Master Spring Boot 3 & Spring Framework 6 with Java",
    },
    {
      institution: "Udemy",
      degree: "Go - The Complete Guide",
    },
    {
      institution: "Udemy",
      degree: "NestJS: The Complete Developer's Guide",
    },
    {
      institution: "Udemy",
      degree: "React Native - The Practical Guide",
    },
    {
      institution: "Coursera",
      degree: "Google IT Support Professional Certificate",
    },
  ],
};

export type Bio = {
  fieldName: string;
  fieldDescription: string;
};
export type InfoBio = {
  title: string;
  description: string;
  info: Bio[];
};

export const biography: InfoBio = {
  title: "My Biography",
  description:
    "Aspiring and enthusiastic software engineer developer, \
    I truly desire to \
    experience and learn from real-world challenges to \
    grow myself more and to become a senior in this field.",
  info: [
    {
      fieldName: "Name",
      fieldDescription: "Nguyễn Di Đan",
    },
    {
      fieldName: "Phone",
      fieldDescription: "(+84) 345 221 946",
    },
    {
      fieldName: "Nationality",
      fieldDescription: "Vietnamese",
    },
    {
      fieldName: "Address",
      fieldDescription: "Ha Dong, Hanoi, Vietnam",
    },
    {
      fieldName: "Date of Birth",
      fieldDescription: "17th May 2002",
    },
    {
      fieldName: "Languages",
      fieldDescription: "Vietnamese, English",
    },
  ],
};

export type Experience = {
  position: string;
  descriptions: string[];
};
export type InfoExperience = {
  title: string;
  description: string;
  experiences: Experience[];
};

export const experience: InfoExperience = {
  title: "My Experience",
  description:
    "I have been working in the IT field for a long time, and I have gained a lot of experience. Here are some of my experiences",
  experiences: [
    {
      position: "Back-end Developer",
      descriptions: [
        "Joining in some projects about education, rebuild, environment,... ",
        "Studied knowledge: API, Database, Load Balancing, Frameworks.",
      ],
    },
    {
      position: "Front-end Developer",
      descriptions: [
        "Joining in some projects, studies with HTML, CSS, and React JS.",
        "Studied and Shared knowledge: Bootstrap, TailwindCSS.",
      ],
    },
    {
      position: "IT Support",
      descriptions: [
        "Joining in some courses online and practicing in the real world.",
        "Working with Hardware, Software, Networking, and OS as Linux, Windows",
      ],
    },
    {
      position: "Network",
      descriptions: [
        "Joined and learned about the Network from Enterprise in Summer.",
        "Participated in a networking lab courses at the university.",
      ],
    },
  ],
};

export type Skill = {
  icon: any;
  name: string;
};
export type InfoSkill = {
  title: string;
  description: string;
  skills: Skill[];
};
export const skills: InfoSkill = {
  title: "My Skills",
  description:
    "My technical skills include proficiency in list your most relevant programming languages and frameworks to deliver effective solutions.",
  skills: [
    {
      icon: FaNodeJs,
      name: "Node.js",
    },
    {
      icon: FaHtml5,
      name: "HTML 5",
    },
    {
      icon: FaCss3,
      name: "CSS 3",
    },
    {
      icon: FaJava,
      name: "Java",
    },
    {
      icon: FaJs,
      name: "JavaScript",
    },
    {
      icon: FaReact,
      name: "React",
    },
    {
      icon: FaGolang,
      name: "Go",
    },
    {
      icon: FaBootstrap,
      name: "Bootstrap",
    },
    {
      icon: FaGitAlt,
      name: "Git",
    },
    {
      icon: SiSpring,
      name: "Spring",
    },
    {
      icon: SiTypescript,
      name: "TypeScript",
    },
    {
      icon: SiC,
      name: "C",
    },
    {
      icon: SiCplusplus,
      name: "C++",
    },
    {
      icon: SiNestjs,
      name: "NestJS",
    },
    {
      icon: SiPostman,
      name: "Postman",
    },
    {
      icon: SiMysql,
      name: "MySQL",
    },
    {
      icon: SiNextdotjs,
      name: "Next.js",
    },
    {
      icon: SiTailwindcss,
      name: "Tailwind CSS",
    },
  ],
};
