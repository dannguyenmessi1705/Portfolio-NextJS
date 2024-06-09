import { ScrollArea } from "@/components/ui/scroll-area";
import { type Project } from "@/lib/data";
import React from "react";
import ProjectDetail from "./ProjectDetail";

export default function Projects({project}: {project: Project[]}) {
  return (
    <ScrollArea className="h-5/6 sm:h-[500px]">
      <div className="relative my-3 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
        {project.map((pro, index) => {
          return (
            <div key={index} className="rounded-md bg-primary-900">
              <ProjectDetail project={pro} />
            </div>
          );
        })}
      </div>
    </ScrollArea>
  );
}
