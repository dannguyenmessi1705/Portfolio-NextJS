"use client";

import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { getAllBlogsNoRoute } from "@/lib/serverAction";
import { type Blog } from "@/lib/data";
import BlogRender from "./BlogRender";
import Image from "next/image";
import spinner from "@/public/assets/spinner.svg";

let page: number = 1;

export default function LoadMoreBlog() {
  const [ref, inView] = useInView();
  const [blogs, setBlogs] = useState<Blog[] | []>([]);

  useEffect(() => {
    if (inView) {
      getAllBlogsNoRoute(page.toString()).then((res) => {
        setBlogs([...blogs, ...res]);
        page++;
      });
    }
  }, [inView, blogs]);

  return (
    <>
      <ul>
        {blogs.map((blog) => (
          <BlogRender key={blog.id} blog={blog} />
        ))}
      </ul>
      <section className="mt-4">
        <div ref={ref} className="flex justify-center items-center">
          <Image src={spinner} alt="spinner" width={50} height={50} />
        </div>
      </section>
    </>
  );
}
