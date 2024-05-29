import Link from "next/link";
import { type ReactNode } from "react";
import { FaGithub, FaXTwitter, FaLinkedin } from "react-icons/fa6";

type SocialElement = {
  icon: ReactNode;
  link: string;
};

const socials: SocialElement[] = [
  {
    icon: <FaGithub />,
    link: "https://github.com/dannguyenmessi1705",
  },
  {
    icon: <FaXTwitter />,
    link: "https://twitter.com/DanNguyen1705",
  },
  {
    icon: <FaLinkedin />,
    link: "https://www.linkedin.com/in/dannguyenmessi1705",
  },
];
export default function Socials() {
  return (
    <div className="flex gap-8">
      {socials.map((social, index) => {
        return (
          <Link
            key={index}
            href={social.link}
            target="_blank"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-accent-700 text-xl text-accent-600 hover:bg-accent-600 hover:text-primary-50 hover:transition-all hover:duration-500"
          >
            {social.icon}
          </Link>
        );
      })}
    </div>
  );
}
