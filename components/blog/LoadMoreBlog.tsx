"use client";

import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { getAllBlogsNoRoute } from "@/lib/serverAction";
import { type Blog } from "@/lib/data";
import BlogRender from "./BlogRender";
import Image from "next/image";
import spinner from "@/public/assets/spinner.svg";

let page: number = 1;

export default function LoadMoreBlog({ query }: { query: string }) {
  const [ref, inView] = useInView();
  const [blogs, setBlogs] = useState<Blog[] | []>([]);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    if (inView) {
      getAllBlogsNoRoute(page.toString(), query).then((res) => {
        if (res.length === 0) {
          setHasMore(false);
        } else {
          setBlogs([...blogs, ...res]);
          page++;
        }
      });
    }
  }, [inView, blogs, query]);

  return (
    <>
      <ul>
        {blogs.map((blog) => (
          <BlogRender key={blog.id} blog={blog} />
        ))}
      </ul>
      {hasMore && (
        <section className="mt-4">
          <div ref={ref} className="flex items-center justify-center">
            <Image src={spinner} alt="spinner" width={50} height={50} />
          </div>
        </section>
      )}
    </>
  );
}
