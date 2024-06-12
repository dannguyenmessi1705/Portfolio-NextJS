import Image from "next/image";
import Link from "next/link";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import noImage from "@/public/assets/no-image.svg";

type Props = {
  title: string;
  description: string;
  languages: string[];
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
        <div className="relative h-5/6 w-full">
          <Image
            src={image ? `${image}` : noImage}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            fill
            quality={80}
            alt={title}
            loading="lazy"
            className="cursor-pointer object-cover"
          />
        </div>
        <div className="my-4 flex items-center justify-center space-x-3">
          {demo && (
            <Link
              href={demo}
              target="_blank"
              prefetch={true}
              className="flex items-center space-x-3 bg-primary-900 px-4 py-2 text-lg"
            >
              <BsArrowUpRight />
              <span>Demo</span>
            </Link>
          )}
          <Link
            href={source}
            target="_blank"
            prefetch={true}
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
                {lang}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
