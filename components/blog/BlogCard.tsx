import Image from "next/image";
import { type Blog } from "@/lib/data";
import Link from "next/link";

export default function BlogCard({ blog }: { blog: Blog }) {
  return (
    <div className="rounded-xl p-4 shadow">
      <Link href={`/blogs/${blog.id}`}>
        <div className="relative h-4/6 w-full">
          <Image
            src={blog.coverImage}
            alt={blog.title}
            priority
            fill
            className="cursor-pointer object-cover"
          />
        </div>

        <div className="mt-5 bg-primary-900 px-2 py-1">
          Posted on {blog.date}
        </div>

        <h3>{blog.title}</h3>

        <p>{blog.excerpt}</p>
      </Link>
    </div>
  );
}
