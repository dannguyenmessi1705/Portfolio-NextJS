import { ScrollArea } from "@/components/ui/scroll-area";

export default function Experience({ experience }: { experience: any }) {
  return (
    <div className="flex flex-col gap-[30px] text-center xl:text-left">
      <h3 className="text-4xl font-bold">{experience.title}</h3>
      <p className="mx-auto max-w-[600px] text-primary-300 xl:mx-0">
        {experience.description}
      </p>

      <ScrollArea className="h-[350px]">
        <ul className="grid grid-cols-1 gap-[30px] lg:grid-cols-2">
          {experience.experiences.map((ex: any, index: number) => {
            return (
              <li
                key={index}
                className="flex h-[300px] flex-col items-center justify-start gap-1 rounded-xl bg-primary-900 px-10 py-6 lg:items-start"
              >
                <h3 className="min-h-[50px] max-w-[260px] text-center text-xl lg:text-left">
                  {ex.position}
                </h3>
                {ex.descriptions.map((des: any, idx: number) => {
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
