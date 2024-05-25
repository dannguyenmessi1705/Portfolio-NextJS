type Experience = {
  position: string;
  description: string;
};
type Info = {
  icon: string;
  title: string;
  description: string;
  experiences: Experience[];
};

const experience: Info = {
  icon: "/assets/about-me/badge.svg",
  title: "My Experience",
  description:
    "My experiences, a mix of joy and sorrow, triumph and setback, have shaped me into who I am today. They are my greatest teachers, guiding me on a continuous journey of self-discovery and growth.",
  experiences: [
    {
      position: "Back-end Developer",
      description:
        "Joining in some projects, studies with a variety of \
        genres: education, rebuild, environment,... \
        Studied and Shared knowledge: API, Database, \
        Load Balancing, Spring Boot, NodeJs, Django.",
    },
    {
      position: "Front-end Developer",
      description:
        "Joining in some projects, studies with HTML, CSS, \
        and React JS. \
        Studied and Shared knowledge: Bootstrap, \
        TailwindCSS.",
    },
    {
      position: "IT Support",
      description:
        "Joining in some courses and practicing in the real \
        world. \
        Working with Hardware, Networking, and OS.",
    },
  ],
};
export default function Experience() {
  return <div>Experience</div>;
}
