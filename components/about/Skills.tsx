import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";
import { ScrollArea } from "../ui/scroll-area";

export default function Skills({ skills }: { skills: any }) {
  return (
    <div className="flex flex-col gap-[30px]">
      <div className="flex flex-col gap-[30px] text-center xl:text-left">
        <h3 className="text-4xl font-bold">{skills.title}</h3>
        <p className="mx-auto max-w-[600px] text-primary-300 xl:mx-0 ">
          {skills.description}
        </p>
      </div>
      <ScrollArea className="h-[350px]">
        <ul className="grid grid-cols-2 gap-4 sm:grid md:grid-cols-4 xl:gap-[30px]">
          {skills.skills.map((sk: any, index: number) => {
            return (
              <li key={index}>
                <TooltipProvider delayDuration={100}>
                  <Tooltip>
                    <TooltipTrigger className="group flex h-[150px] w-full items-center justify-center rounded-xl bg-primary-900">
                      <div className="text-6xl transition-all duration-300 group-hover:text-accent-600">
                        {sk.icon()}
                      </div>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p className="capitalize">{sk.name}</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </li>
            );
          })}
        </ul>
      </ScrollArea>
    </div>
  );
}
