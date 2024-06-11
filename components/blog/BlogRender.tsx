import noImage from "@/public/assets/no-image.svg";
import { type Blog as BlogType } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";

export default function BlogRender({ blog }: { blog: BlogType }) {
  return (
    <li className="flex items-start gap-4 border-b p-4">
      <div className="flex-shrink-0">
        <Image
          src={blog.adminAvatar ? blog.adminAvatar : noImage}
          alt="avatar"
          width={40}
          height={40}
          className="rounded-full"
        />
      </div>
      <div className="flex-1">
        <div className="mb-1 text-sm text-primary-400">
          {blog.adminName} -{" "}
          {(Date.now() - new Date(blog.date).getTime()) / 86400000 > 1
            ? `${Math.floor((Date.now() - new Date(blog.date).getTime()) / 86400000)} days ago`
            : "Today"}
        </div>
        <h2 className="mb-2 text-xl font-bold text-white">
          <Link
            href={`/blogs/${blog.id}`}
            prefetch={true}
            className="cursor-pointer"
          >
            {blog.title}
          </Link>
        </h2>
        <p className="mb-2 text-accent-400">{blog.excerpt}</p>
        <div className="mb-2 flex items-center space-x-2">
          <span className="rounded bg-accent-600 px-2 py-1 text-white">
            #didanblog
          </span>
        </div>
      </div>
      <div className="relative hidden aspect-video w-2/6 flex-shrink-0 md:block">
        <Image
          src={blog.coverImage ? blog.coverImage : noImage}
          alt={blog.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority
          quality={75}
          className="rounded-lg object-cover"
        />
      </div>
    </li>
  );
}
