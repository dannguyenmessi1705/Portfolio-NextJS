import { ScrollArea } from "@/components/ui/scroll-area";
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
      <p className="mx-auto max-w-[600px] text-primary-300 xl:mx-0">
        {experience.description}
      </p>

      <ScrollArea className="h-[350px]">
        <ul className="grid grid-cols-1 gap-[30px] lg:grid-cols-2">
          {experience.experiences.map((ex, index) => {
            return (
              <li
                key={index}
                className="flex h-[300px] flex-col items-center justify-start gap-1 rounded-xl bg-primary-900 px-10 py-6 lg:items-start"
              >
                <h3 className="min-h-[50px] max-w-[260px] text-center text-xl lg:text-left">
                  {ex.position}
                </h3>
                {ex.descriptions.map((des, idx) => {
                  return (
                    <div key={idx} className="flex items-center gap-5">
                      <span className="h-2 w-4 rounded-full bg-accent-600 lg:w-5"></span>
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
