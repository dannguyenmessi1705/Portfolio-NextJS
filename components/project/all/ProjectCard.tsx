import Image from "next/image";
import Link from "next/link";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";

type Props = {
  title: string;
  description: string;
  languages: { name: string }[];
  image: string;
  demo: string | null;
  source: string;
};

export default function ProjectCard({
  image,
  title,
  demo,
  source,
  languages,
  description,
}: Props) {
  return (
    <div className="grid h-[480px] w-full gap-x-12 bg-primary-900 p-6 text-primary-50 md:grid-cols-2">
      <div className="mb-6 md:mb-0">
        <div className="h- relative h-5/6 w-full">
          <Image
            src={image}
            alt={title}
            fill
            className="cursor-pointer object-cover"
          />
        </div>
        <div className="my-4 flex items-center justify-center space-x-3">
          {demo && (
            <Link
              href={demo}
              className="flex items-center space-x-3 bg-primary-900 px-4 py-2 text-lg"
            >
              <BsArrowUpRight />
              <span>Demo</span>
            </Link>
          )}
          <Link
            href={source}
            className="flex items-center space-x-3 bg-primary-900 px-4 py-2 text-lg"
          >
            <BsGithub />
            <span>Source</span>
          </Link>
        </div>
      </div>

      <div>
        <h2 className="mb-3 text-xl font-medium md:text-2xl">{title}</h2>
        <h3 className="mb-3 font-medium">{description}</h3>
        <ul className="mt-5 flex flex-wrap space-x-2 text-sm tracking-wider">
          {languages.map((lang, index) => {
            return (
              <li
                className="my-1 bg-accent-600 px-2 py-1 text-primary-50"
                key={index}
              >
                {lang.name}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
