import Image from "next/image";
import { type Blog } from "@/lib/data";


export default function BlogCard({ blog }: { blog: Blog }) {
  return (
    <div className="rounded-xl p-4 shadow">
      <div className="relative w-full h-4/6">
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
    </div>
  );
}
