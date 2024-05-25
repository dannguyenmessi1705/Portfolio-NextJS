type Education = {
  institution: string;
  degree: string;
  duration?: string;
};
type Info = {
  icon: string;
  title: string;
  description: string;
  educations: Education[];
};

const education: Info = {
  icon: "/assets/about-me/cap.svg",
  title: "My Education",
  description:
    "My education, a blend of formal and informal learning, has equipped me with valuable knowledge and skills. It has expanded my horizons, fostered critical thinking, and fueled a passion for lifelong learning.",
  educations: [
    {
      institution: "Posts and Telecommunications Institute of Technology",
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

export default function Education() {
  return <div>Education</div>;
}
