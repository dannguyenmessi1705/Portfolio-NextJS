"use client";
import { Sheet, SheetTrigger, SheetContent } from "./ui/sheet";
import { CiMenuFries } from "react-icons/ci";
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
    name: "skills",
    path: "/skills",
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

export default function NavigationMobile() {
  const pathName = usePathname();
  return (
    <Sheet>
      <SheetTrigger className="flex justify-center items-center">
        <CiMenuFries className="text-4xl text-accent-600" />
      </SheetTrigger>
      <SheetContent className="flex flex-col">
        <div className="mt-28 mb-28 text-center text-2xl">
          <Link href="/">
            Logo
            <h1 className="text-4xl font-semibold">ZDiDane</h1>
          </Link>
        </div>

        <nav className="flex flex-col justify-center items-center gap-8">
          {links.map((link, index) => {
            return (
              <Link
                key={index}
                href={link.path}
                className={`${
                  link.path === pathName
                    ? "text-accent-600 border-b-2 border-accent-600"
                    : ""
                } capitalize font-medium hover:text-accent-600 transition-all`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>
      </SheetContent>
    </Sheet>
  );
}
