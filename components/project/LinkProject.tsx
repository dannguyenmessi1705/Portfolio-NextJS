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
  source: string;
};

export default function LinkProject({ demo, source }: LinkProjectProps) {
  return (
    <div className="flex items-center gap-4">
      <Link href={demo!}>
        <TooltipProvider delayDuration={100}>
          <Tooltip>
            <TooltipTrigger className="group flex h-[70px] w-[70px] items-center justify-center rounded-full bg-primary-800">
              <BsArrowUpRight className="text-4xl text-primary-50 group-hover:text-accent-600" />
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
            <TooltipTrigger className="group flex h-[70px] w-[70px] items-center justify-center rounded-full bg-primary-800">
              <BsGithub className="text-4xl text-primary-50 group-hover:text-accent-600" />
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
