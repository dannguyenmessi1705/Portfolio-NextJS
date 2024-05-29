"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import { IoMdClose } from "react-icons/io";

type Category = "frontend" | "backend" | "fullstack";
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
export default function ProjectCard({ project }: { project: Project }) {
  const { id, category, title, description, languages, image, demo, source } =
    project;
  const [showDetail, setShowDetail] = useState<boolean>(false);
  return (
    <div>
      <Image
        src={image}
        alt={title}
        width={600}
        height={200}
        className="cursor-pointer"
        onClick={() => setShowDetail(true)}
      />
      <p className="my-2 text-center ">{title}</p>

      {showDetail && (
        <div className="absolute left-0 top-0 z-10 grid h-auto w-full gap-x-12 bg-primary-900 p-2 text-primary-50 md:grid-cols-2">
          <div>
            <img src={image} alt={title} className="cursor-pointer" />
            <div className="my-4 flex justify-center space-x-3">
              {demo && (
                <Link
                  href={demo}
                  className="flex items-center space-x-3 bg-primary-900 px-4 py-2 text-lg"
                >
                  <BsArrowUpRight />
                  <span>Live Demo</span>
                </Link>
              )}
              <Link
                href={source}
                className="flex items-center space-x-3 bg-primary-900 px-4 py-2 text-lg"
              >
                <BsGithub />
                <span>Source Code</span>
              </Link>
            </div>
          </div>

          <div className="">
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
                    {index !== languages.length - 1 && ","}
                  </li>
                );
              })}
            </ul>
          </div>

          <button
            onClick={() => setShowDetail(false)}
            className="absolute right-3 top-3 flex h-[44px] w-[44px] items-center justify-center rounded-full bg-accent-600 text-[22px] text-primary-950 transition-all duration-300 hover:bg-accent-700"
          >
            <IoMdClose />
          </button>
        </div>
      )}
    </div>
  );
}
