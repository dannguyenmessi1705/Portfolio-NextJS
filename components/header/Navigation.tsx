"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type Link = {
  name: string;
  path: string;
};

const links: Link[] = [
  {
    name: "home",
    path: "/",
  },
  {
    name: "about me",
    path: "/about-me",
  },
  {
    name: "projects",
    path: "/projects",
  },
  {
    name: "blogs",
    path: "/blogs",
  },
];

export default function Navigation() {
  const pathName = usePathname();
  return (
    <nav className="flex gap-8">
      {links.map((link, index) => {
        return (
          <Link
            key={index}
            href={link.path}
            className={`${
              (link.path.length === 1 && pathName === link.path) ||
              (link.path.length !== 1 && pathName.startsWith(link.path))
                ? "border-b-2 border-accent-600 text-accent-600"
                : ""
            } font-medium capitalize transition-all hover:text-accent-600`}
          >
            {link.name}
          </Link>
        );
      })}
    </nav>
  );
}
