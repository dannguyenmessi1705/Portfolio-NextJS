import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogTrigger,
} from "@/components/ui/dialog";
import { DialogClose } from "@radix-ui/react-dialog";
import ProjectCard from "./ProjectCard";

type Category = "frontend" | "backend" | "others";
type Project = {
  id: string;
  category: Category;
  title: string;
  description: string;
  languages: { name: string }[];
  image: string;
  demo: string | null;
  source: string;
};
export default function ProjectDetail({ project }: { project: Project }) {
  const { id, category, title, description, languages, image, demo, source } =
    project;
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="p-3">
          <Image
            src={image}
            alt={title}
            priority
            width={540}
            height={200}
            className="cursor-pointer"
          />
          <p className="my-2 text-center ">{title}</p>
        </div>
      </DialogTrigger>
      <DialogContent className="w-full">
        <ProjectCard
          demo={demo}
          source={source}
          description={description}
          image={image}
          languages={languages}
          title={title}
          key={id}
        />
        <DialogFooter className="sm:justify-start">
          <DialogClose asChild>
            <Button>Close</Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
