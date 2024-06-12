import { ScrollArea } from "../ui/scroll-area";

export default function Education({ education }: { education: any }) {
  return (
    <div className="flex flex-col gap-[30px] text-center xl:text-left">
      <h3 className="text-4xl font-bold">{education.title}</h3>
      <p className="mx-auto max-w-[600px] text-primary-300 xl:mx-0">
        {education.description}
      </p>

      <ScrollArea className="h-[350px]">
        <ul className="grid grid-cols-1 gap-[30px] lg:grid-cols-2">
          {education.educations.map((ed: any, index: number) => {
            return (
              <li
                key={index}
                className="flex h-[184px] flex-col items-center justify-start gap-1 rounded-xl bg-primary-900 px-10 py-6 lg:items-start"
              >
                <h3 className="min-h-[50px] max-w-[260px] text-center text-xl lg:text-left">
                  {ed.degree}
                </h3>

                <div className="flex items-center gap-5">
                  <span className="h-2 w-2 rounded-full bg-accent-600"></span>
                  <p className="text-primary-300">{ed.institution}</p>
                </div>
              </li>
            );
          })}
        </ul>
      </ScrollArea>
    </div>
  );
}
