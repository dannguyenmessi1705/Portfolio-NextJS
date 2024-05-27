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
        <div className="p-2 absolute grid md:grid-cols-2 top-0 left-0 z-10 w-full h-auto gap-x-12 text-primary-50 bg-primary-900">
          <div>
            <img src={image} alt={title} className="cursor-pointer" />
            <div className="flex justify-center my-4 space-x-3">
              {demo && (
                <Link
                  href={demo}
                  className="flex items-center px-4 py-2 space-x-3 text-lg bg-primary-900"
                >
                  <BsArrowUpRight />
                  <span>Live Demo</span>
                </Link>
              )}
              <Link
                href={source}
                className="flex items-center px-4 py-2 space-x-3 text-lg bg-primary-900"
              >
                <BsGithub />
                <span>Source Code</span>
              </Link>
            </div>
          </div>

          <div className="">
            <h2 className="mb-3 text-xl font-medium md:text-2xl">{title}</h2>
            <h3 className="mb-3 font-medium">{description}</h3>
            <ul className="flex flex-wrap mt-5 space-x-2 text-sm tracking-wider">
              {languages.map((lang, index) => {
                return (
                  <li
                    className="px-2 py-1 my-1 bg-accent-600 text-primary-50"
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
            className="absolute top-3 right-3 bg-accent-600 hover:bg-accent-700 text-primary-950 text-[22px] w-[44px] h-[44px] flex justify-center items-center rounded-full transition-all duration-300"
          >
            <IoMdClose />
          </button>
        </div>
      )}
    </div>
  );
}
