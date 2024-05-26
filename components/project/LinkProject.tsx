"use client";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Link from "next/link";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";

type LinkProjectProps = {
  demo: string | null;
  source: string | null;
};

export default function LinkProject({ demo, source }: LinkProjectProps) {
  return (
    <div className="flex items-center gap-4">
      <Link href={demo!}>
        <TooltipProvider delayDuration={100}>
          <Tooltip>
            <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-primary-800 flex justify-center items-center group">
              <BsArrowUpRight className="text-primary-50 text-4xl group-hover:text-accent-600" />
            </TooltipTrigger>
            <TooltipContent>
              <p>View Demo</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </Link>

      <Link href={source!}>
        <TooltipProvider delayDuration={100}>
          <Tooltip>
            <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-primary-800 flex justify-center items-center group">
              <BsGithub className="text-primary-50 text-4xl group-hover:text-accent-600" />
            </TooltipTrigger>
            <TooltipContent>
              <p>Source Code</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </Link>
    </div>
  );
}
