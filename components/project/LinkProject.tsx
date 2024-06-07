import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTrigger,
} from "@/components/ui/dialog";
import Link from "next/link";
import { BsArrowUpRight, BsGithub, BsGridFill, BsPlus } from "react-icons/bs";
import { DialogFooter } from "../ui/dialog";
import { Button } from "../ui/button";
import ProjectCreateForm from "./ProjectCreateForm";
import { Session } from "next-auth";

type LinkProjectProps = {
  demo: string | null;
  source: string;
  session: Session | any;
};

export default function LinkProject({
  demo,
  source,
  session,
}: LinkProjectProps) {
  return (
    <div className="xl:mb-none mb-6 flex items-center gap-4">
      <Link href={demo ? demo : ""} target="_blank">
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

      <Link href={source!} target="_blank">
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

      <Link href="projects/all" prefetch={true}>
        <TooltipProvider delayDuration={100}>
          <Tooltip>
            <TooltipTrigger className="group flex h-[70px] w-[70px] items-center justify-center rounded-full bg-primary-800">
              <BsGridFill className="text-4xl text-primary-50 group-hover:text-accent-600" />
            </TooltipTrigger>
            <TooltipContent>
              <p>All Projects</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </Link>

      {session?.user && session.user.id === process.env.NEXT_PUBLIC_ADMIN_ID && (
        <Dialog>
          <DialogTrigger asChild>
            <div>
              <TooltipProvider delayDuration={100}>
                <Tooltip>
                  <TooltipTrigger className="group flex h-[70px] w-[70px] items-center justify-center rounded-full bg-primary-800">
                    <BsPlus className="text-6xl text-primary-50 group-hover:text-accent-600" />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Add Project</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
          </DialogTrigger>
          <DialogContent className="w-full">
            <DialogHeader>
              <h2 className="text-2xl font-bold">Add Project</h2>
            </DialogHeader>
            <ProjectCreateForm />
          </DialogContent>
        </Dialog>
      )}
    </div>
  );
}
