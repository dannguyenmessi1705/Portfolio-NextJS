"use client";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetClose,
} from "@/components/ui/sheet";
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
    name: "projects",
    path: "/projects",
  },
  {
    name: "blogs",
    path: "/blogs",
  },
  {
    name: "contact",
    path: "/contact",
  },
];

export default function NavigationMobile() {
  const pathName = usePathname();
  return (
    <Sheet>
      <SheetTrigger className="flex items-center justify-center">
        <CiMenuFries className="text-4xl text-accent-600" />
      </SheetTrigger>
      <SheetContent className="flex flex-col">
        <div className="mb-28 mt-28 text-center text-2xl">
          <Link href="/" prefetch={true}>
            <SheetClose>
              <h1 className="text-4xl font-semibold">ZDiDane</h1>
            </SheetClose>
          </Link>
        </div>

        <nav className="flex flex-col items-center justify-center gap-8">
          {links.map((link, index) => {
            return (
              <Link
                key={index}
                href={link.path}
                prefetch={true}
                className={`${
                  (link.path.length === 1 && pathName === link.path) ||
                  (link.path.length !== 1 && pathName.startsWith(link.path))
                    ? "border-b-2 border-accent-600 text-accent-600"
                    : ""
                } `}
              >
                <SheetClose className="font-medium capitalize transition-all hover:text-accent-600">
                  {link.name}
                </SheetClose>
              </Link>
            );
          })}
        </nav>
      </SheetContent>
    </Sheet>
  );
}
