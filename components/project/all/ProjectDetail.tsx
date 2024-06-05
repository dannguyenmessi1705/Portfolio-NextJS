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
import { type Project, type Category } from "@/lib/data";
import noImage from "@/public/assets/no-image.svg";


export default function ProjectDetail({ project }: { project: Project }) {
  const { id, category, title, description, languages, image, demo, source } =
    project;
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="p-3">
          <Image
            src={
              image
                ? `${process.env.NEXT_PUBLIC_SOCKET_URL}/${image}`
                : noImage
            }
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
            <Button className="border-none shadow-none focus:outline-none">
              Close
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
