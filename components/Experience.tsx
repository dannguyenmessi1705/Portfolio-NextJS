import { ScrollArea } from "./ui/scroll-area";
type Experience = {
  position: string;
  descriptions: string[];
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
export default function Experience() {
  return (
    <div className="flex flex-col gap-[30px] text-center xl:text-left">
      <h3 className="text-4xl font-bold">{experience.title}</h3>
      <p className="max-w-[600px] text-primary-300 mx-auto xl:mx-0">
        {experience.description}
      </p>

      <ScrollArea className="h-[350px]">
        <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
          {experience.experiences.map((ex, index) => {
            return (
              <li
                key={index}
                className="bg-primary-900 h-[300px] py-6 px-10 rounded-xl flex flex-col justify-start items-center lg:items-start gap-1"
              >
                <h3 className="text-xl max-w-[260px] min-h-[50px] text-center lg:text-left">{ex.position}</h3>
                  {ex.descriptions.map((des, idx) => {
                    return (
                      <div key={idx} className="flex items-center gap-5">
                        <span className="w-4 lg:w-5 h-2 rounded-full bg-accent-600"></span>
                        <p className="text-primary-300">{des}</p>
                      </div>
                    );
                  })}
              </li>
            );
          })}
        </ul>
      </ScrollArea>
    </div>
  );
}
